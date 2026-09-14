// ==========================================
// MINI GAME TV2: HIỆP SĨ CHÍNH TẢ - VƯỢT CỔNG THÀNH
// Gameplay thuần game: chọn cổng chữ đúng để giúp hiệp sĩ vượt thành.
// Dữ liệu lấy trực tiếp từ kho câu hỏi Chuyên đề 2 & 3, không tạo database riêng.
// ==========================================
let skPool = [];
let skIndex = 0;
let skScore = 0;
let skLives = 3;
let skStreak = 0;
let skBestStreak = 0;
let skAnswered = false;
let skRoundSize = 10;
let skMode = 'mixed';
let skRoundTimer = null;
let skTimeLeft = 12;
let skCurrentChallenge = null;

const SK_MODES = [
    { id: 'mixed', label: 'Trộn thử thách', icon: '⚔️', subs: null },
    { id: 'chtr', label: 'ch / tr', icon: '🛡️', subs: ['Phân biệt ch / tr'], gates: ['ch', 'tr'] },
    { id: 'sx', label: 's / x', icon: '🌟', subs: ['Phân biệt s / x'], gates: ['s', 'x'] },
    { id: 'ln', label: 'l / n', icon: '🍀', subs: ['Phân biệt l / n'], gates: ['l', 'n'] },
    { id: 'rdgi', label: 'r / d / gi', icon: '🔥', subs: ['Phân biệt r / d / gi'], gates: ['r', 'd', 'gi'] },
    { id: 'rules', label: 'c/k · g/gh · ng/ngh', icon: '🏰', subs: ['Luật chính tả c/k, g/gh, ng/ngh'] }
];

const SK_GATE_MAP = [
    { test: /ch\s*\/\s*tr/i, gates: ['ch', 'tr'] },
    { test: /s\s*\/\s*x/i, gates: ['s', 'x'] },
    { test: /l\s*\/\s*n/i, gates: ['l', 'n'] },
    { test: /r\s*\/\s*d\s*\/\s*gi/i, gates: ['r', 'd', 'gi'] },
    { test: /c\s*\/\s*k|g\s*\/\s*gh|ng\s*\/\s*ngh/i, gates: ['c', 'k', 'g', 'gh', 'ng', 'ngh'] }
];

function skEnsureStyles() {
    if (document.getElementById('sk-game-styles')) return;
    const style = document.createElement('style');
    style.id = 'sk-game-styles';
    style.textContent = `
        @keyframes skFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes skGatePulse { 0%,100%{box-shadow:0 8px 18px rgba(99,102,241,.12)} 50%{box-shadow:0 10px 28px rgba(99,102,241,.30)} }
        @keyframes skShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
        @keyframes skSlash { 0%{opacity:0;transform:scale(.4) rotate(-25deg)} 45%{opacity:1;transform:scale(1.25) rotate(8deg)} 100%{opacity:0;transform:scale(1.6) rotate(18deg)} }
        @keyframes skPop { 0%{transform:scale(.5);opacity:0} 65%{transform:scale(1.15);opacity:1} 100%{transform:scale(1);opacity:1} }
        .sk-knight-idle{animation:skFloat 1.8s ease-in-out infinite}
        .sk-gate-live{animation:skGatePulse 1.6s ease-in-out infinite}
        .sk-scene-shake{animation:skShake .28s linear 2}
        .sk-slash{animation:skSlash .55s ease-out forwards}
        .sk-pop{animation:skPop .28s ease-out both}
        .sk-gate-btn{transition:transform .18s ease,filter .18s ease,box-shadow .18s ease}
        .sk-gate-btn:hover{transform:translateY(-5px) scale(1.035);filter:saturate(1.1)}
        .sk-road{background:linear-gradient(180deg,#dbeafe 0%,#ecfeff 37%,#dcfce7 38%,#bbf7d0 70%,#d6d3d1 71%,#a8a29e 100%)}
        .sk-cloud{position:absolute;opacity:.85;filter:drop-shadow(0 3px 4px rgba(0,0,0,.08))}
    `;
    document.head.appendChild(style);
}

async function startSpellingKnightGame() {
    skEnsureStyles();
    skStopRoundTimer();
    const box = document.getElementById('game-play-container');
    if (box) box.innerHTML = '<div class="py-10 text-center text-rose-500 font-black"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Đang mở cổng thành chính tả...</div>';
    try {
        await fetchAllQuestionsFlat();
        skRenderModeMenu();
    } catch (e) {
        if (box) box.innerHTML = `<div class="py-10 text-center text-rose-500 font-black">😿 Không tải được học liệu: ${escapeHtml(e.message || String(e))}</div>`;
    }
}

function skGetAllSourceQuestions() {
    const flat = Array.isArray(allQuestionsFlatCache) ? allQuestionsFlatCache : [];
    return flat.filter(q => [2, 3].includes(Number(q.source_topic_id)) && q.answer && skBuildChallenge(q));
}

function skDetectGates(q) {
    const sub = String(q.sub_topic || '');
    for (const rule of SK_GATE_MAP) if (rule.test.test(sub)) return rule.gates.slice();
    return null;
}

function skBuildChallenge(q) {
    const answer = String(q.answer || '').trim();
    if (!answer) return null;
    let gates = skDetectGates(q);
    if (!gates) return null;

    const lower = answer.toLocaleLowerCase('vi');
    const sorted = [...gates].sort((a, b) => b.length - a.length);
    let correct = sorted.find(g => lower.startsWith(g));

    // Một số câu trả lời có tiền tố lựa chọn A./B. đã được normalize ở app.js, nhưng vẫn phòng hờ.
    if (!correct) {
        const firstWord = lower.split(/\s+/)[0];
        correct = sorted.find(g => firstWord.startsWith(g));
    }
    if (!correct) return null;

    // Riêng nhóm luật chính tả, chỉ đưa ra đúng "họ" cổng liên quan để gameplay gọn và hợp lý.
    if (gates.length > 3) {
        if (['c', 'k'].includes(correct)) gates = ['c', 'k'];
        else if (['g', 'gh'].includes(correct)) gates = ['g', 'gh'];
        else if (['ng', 'ngh'].includes(correct)) gates = ['ng', 'ngh'];
        else return null;
    }

    const blank = answer.slice(correct.length);
    if (!blank.trim()) return null;
    return { q, answer, correct, gates, blank };
}

function skRenderModeMenu() {
    skStopRoundTimer();
    const box = document.getElementById('game-play-container');
    const all = skGetAllSourceQuestions();
    const countFor = mode => {
        if (!mode.subs) return all.length;
        return all.filter(q => mode.subs.includes(String(q.sub_topic))).length;
    };
    box.innerHTML = `
        <div class="bg-gradient-to-b from-sky-50 via-white to-emerald-50 rounded-[28px] border-2 border-teal-200 shadow-sm p-4 md:p-5 overflow-hidden relative">
            <div class="absolute -top-4 -left-4 text-7xl opacity-20">🏰</div>
            <div class="absolute -bottom-5 -right-3 text-8xl opacity-15">🐉</div>
            <div class="text-center mb-4 relative z-10">
                <div class="text-6xl mb-1 sk-knight-idle">🛡️⚔️</div>
                <h3 class="text-xl md:text-2xl font-black text-rose-600">Hiệp sĩ Chính tả: Vượt Cổng Thành</h3>
                <p class="text-sm font-bold text-slate-500 mt-1">Nhìn mảnh từ trên cuộn giấy, chọn đúng cổng chữ để hiệp sĩ lao qua!</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 relative z-10">
                ${SK_MODES.map((m, i) => `
                    <button onclick="skStartMode('${m.id}')" class="pastel-btn min-h-[100px] rounded-2xl border-2 ${i % 2 ? 'border-purple-200 bg-purple-50/80 text-purple-700' : 'border-rose-200 bg-rose-50/80 text-rose-700'} p-3 flex flex-col items-center justify-center text-center">
                        <span class="text-3xl mb-1">${m.icon}</span>
                        <span class="font-black text-sm md:text-base">${m.label}</span>
                        <span class="text-[11px] font-bold opacity-70 mt-1">${countFor(m)} cổng khả dụng</span>
                    </button>`).join('')}
            </div>
            <div class="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] md:text-xs font-black relative z-10">
                <div class="rounded-xl bg-white/80 border border-emerald-200 p-2">⚡ 12 giây / cổng</div>
                <div class="rounded-xl bg-white/80 border border-amber-200 p-2">🔥 Combo tăng điểm</div>
                <div class="rounded-xl bg-white/80 border border-pink-200 p-2">🛡️ 3 khiên sinh lực</div>
            </div>
        </div>`;
}

function skStartMode(modeId) {
    const mode = SK_MODES.find(m => m.id === modeId) || SK_MODES[0];
    skMode = mode.id;
    let source = skGetAllSourceQuestions();
    if (mode.subs) source = source.filter(q => mode.subs.includes(String(q.sub_topic)));

    const challenges = shuffleArray(source.map(skBuildChallenge).filter(Boolean));
    if (!challenges.length) {
        showAccessGate({ title: 'Chưa đủ học liệu', icon: '📚', showAuth: false, message: 'Nhóm này chưa có đủ câu phù hợp với gameplay Vượt Cổng Thành.', note: 'Con có thể chọn Trộn thử thách để chơi ngay nhé!' });
        return;
    }

    skPool = challenges.slice(0, Math.min(skRoundSize, challenges.length));
    skIndex = 0;
    skScore = 0;
    skLives = 3;
    skStreak = 0;
    skBestStreak = 0;
    skAnswered = false;
    skRenderRound();
}

function skRenderRound() {
    skStopRoundTimer();
    if (skIndex >= skPool.length || skLives <= 0) return skFinish();
    skCurrentChallenge = skPool[skIndex];
    const c = skCurrentChallenge;
    skAnswered = false;
    skTimeLeft = 12;
    const modeLabel = SK_MODES.find(m => m.id === skMode)?.label || 'Trộn thử thách';
    const progress = Math.round((skIndex / skPool.length) * 100);
    const gates = shuffleArray(c.gates.slice());
    const box = document.getElementById('game-play-container');

    box.innerHTML = `
        <div id="sk-scene" class="sk-road relative rounded-[28px] border-2 border-teal-200 shadow-sm overflow-hidden min-h-[500px]">
            <div class="sk-cloud top-6 left-[8%] text-5xl">☁️</div>
            <div class="sk-cloud top-10 right-[10%] text-4xl">☁️</div>
            <div class="absolute top-[84px] left-0 right-0 text-center text-6xl opacity-30">🏰</div>

            <div class="relative z-10 px-3 md:px-5 pt-3">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center gap-1.5 text-xs md:text-sm font-black">
                        <span class="px-3 py-1 rounded-full bg-white/90 text-rose-700 border border-rose-200">⚔️ ${escapeHtml(modeLabel)}</span>
                        <span id="sk-streak" class="px-3 py-1 rounded-full bg-white/90 text-amber-700 border border-amber-200">🔥 ${skStreak}</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-xs md:text-sm font-black">
                        <span id="sk-score" class="px-3 py-1 rounded-full bg-white/90 text-emerald-700 border border-emerald-200">⭐ ${skScore}</span>
                        <span id="sk-lives" class="px-3 py-1 rounded-full bg-white/90 text-pink-700 border border-pink-200">${'🛡️'.repeat(skLives)}${'▫️'.repeat(Math.max(0, 3-skLives))}</span>
                    </div>
                </div>
                <div class="mt-2 h-2 bg-white/70 rounded-full overflow-hidden border border-white"><div class="h-full bg-gradient-to-r from-teal-400 to-emerald-500" style="width:${progress}%"></div></div>
            </div>

            <div class="relative z-10 mx-auto mt-5 max-w-2xl px-3">
                <div class="flex items-center justify-center gap-3">
                    <div id="sk-knight" class="text-6xl md:text-7xl sk-knight-idle transition-all duration-500 select-none">🧙‍♂️⚔️</div>
                    <div class="relative bg-amber-50 border-2 border-amber-300 rounded-2xl px-4 py-3 shadow-md min-w-0 flex-1 max-w-xl">
                        <div class="text-[10px] md:text-xs font-black uppercase tracking-wide text-amber-700 mb-1">📜 Cổng ${skIndex + 1}/${skPool.length} · điền phụ âm đầu</div>
                        <div class="flex items-baseline justify-center gap-1 flex-wrap">
                            <span class="text-3xl md:text-5xl font-black text-rose-500">_</span>
                            <span class="text-2xl md:text-4xl font-black text-slate-800">${escapeHtml(c.blank)}</span>
                        </div>
                        <div class="mt-1 text-center text-[11px] md:text-xs font-bold text-slate-500">Chọn cổng để tạo thành từ/cụm từ đúng chính tả</div>
                    </div>
                </div>
            </div>

            <div class="relative z-10 px-3 md:px-6 mt-5">
                <div class="flex items-center justify-between mb-2 text-xs font-black">
                    <span class="bg-white/90 border border-sky-200 text-sky-700 rounded-full px-3 py-1">⏱️ <span id="sk-time">12</span>s</span>
                    <span id="sk-feedback" class="text-slate-600 bg-white/80 rounded-full px-3 py-1 min-h-[26px]">Chọn nhanh một cổng!</span>
                </div>
                <div id="sk-timer-track" class="h-2 bg-white/80 rounded-full overflow-hidden border border-sky-100 mb-3"><div id="sk-timer-bar" class="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500 transition-all duration-200" style="width:100%"></div></div>

                <div id="sk-gates" class="grid ${gates.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-3 md:gap-4 items-end">
                    ${gates.map((g, i) => `
                        <button data-gate="${escapeHtml(g)}" onclick="skChooseGate(${JSON.stringify(g)}, ${i})" class="sk-gate-btn sk-gate-live relative min-h-[150px] md:min-h-[175px] rounded-t-[34px] rounded-b-2xl border-4 border-indigo-300 bg-gradient-to-b from-indigo-100 via-white to-slate-100 shadow-lg overflow-hidden group">
                            <div class="absolute inset-x-0 top-0 h-8 bg-indigo-300/70"></div>
                            <div class="absolute top-5 left-1/2 -translate-x-1/2 text-5xl md:text-6xl group-hover:scale-110 transition-transform">🏰</div>
                            <div class="absolute inset-x-0 bottom-4 flex flex-col items-center">
                                <span class="text-[10px] font-black uppercase tracking-widest text-indigo-400">Cổng ${i + 1}</span>
                                <span class="text-3xl md:text-4xl font-black text-indigo-700 uppercase">${escapeHtml(g)}</span>
                            </div>
                        </button>`).join('')}
                </div>
            </div>

            <div class="relative z-10 mt-3 pb-3 text-center">
                <button onclick="speakVietnamese(${JSON.stringify(c.answer)}, 0.96)" class="px-3 py-1.5 rounded-xl bg-white/90 border border-pink-200 text-pink-600 font-black text-xs pastel-btn"><i class="fa-solid fa-volume-high mr-1"></i> Nghe từ cần tìm</button>
            </div>
            <div id="sk-effect" class="pointer-events-none absolute inset-0 z-20 flex items-center justify-center text-8xl"></div>
        </div>`;

    skStartRoundTimer();
}

function skStartRoundTimer() {
    skStopRoundTimer();
    skRoundTimer = setInterval(() => {
        if (skAnswered) return skStopRoundTimer();
        skTimeLeft--;
        const t = document.getElementById('sk-time');
        const bar = document.getElementById('sk-timer-bar');
        if (t) t.textContent = Math.max(0, skTimeLeft);
        if (bar) bar.style.width = `${Math.max(0, skTimeLeft) / 12 * 100}%`;
        if (skTimeLeft <= 0) skHandleTimeout();
    }, 1000);
}

function skStopRoundTimer() {
    if (skRoundTimer) clearInterval(skRoundTimer);
    skRoundTimer = null;
}

function skHandleTimeout() {
    if (skAnswered) return;
    skAnswered = true;
    skStopRoundTimer();
    skLives--;
    skStreak = 0;
    skPaintResult(null, false, true);
    playAudio('wrong');
    setTimeout(() => { skIndex++; skRenderRound(); }, 1400);
}

function skChooseGate(gate, gateIndex) {
    if (skAnswered || !skCurrentChallenge) return;
    skAnswered = true;
    skStopRoundTimer();
    const c = skCurrentChallenge;
    const correct = String(gate).toLocaleLowerCase('vi') === String(c.correct).toLocaleLowerCase('vi');

    if (correct) {
        skStreak++;
        skBestStreak = Math.max(skBestStreak, skStreak);
        const speedBonus = Math.max(0, skTimeLeft);
        const comboBonus = Math.min(12, Math.max(0, skStreak - 1) * 2);
        skScore += 10 + speedBonus + comboBonus;
        skPaintResult(gate, true, false, gateIndex);
        playAudio('correct');
        confetti({ particleCount: 38, spread: 62, origin: { y: 0.68 } });
        setTimeout(() => speakVietnamese(c.answer, 0.96), 180);
    } else {
        skLives--;
        skStreak = 0;
        skPaintResult(gate, false, false, gateIndex);
        playAudio('wrong');
    }

    setTimeout(() => { skIndex++; skRenderRound(); }, 1400);
}

function skPaintResult(chosenGate, correct, timeout, gateIndex = 0) {
    const c = skCurrentChallenge;
    const scene = document.getElementById('sk-scene');
    const knight = document.getElementById('sk-knight');
    const effect = document.getElementById('sk-effect');
    const fb = document.getElementById('sk-feedback');

    document.querySelectorAll('.sk-gate-btn').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('sk-gate-live');
        const g = btn.getAttribute('data-gate');
        if (String(g).toLocaleLowerCase('vi') === String(c.correct).toLocaleLowerCase('vi')) {
            btn.classList.remove('border-indigo-300');
            btn.classList.add('border-emerald-500', 'ring-4', 'ring-emerald-200');
        } else if (chosenGate && String(g).toLocaleLowerCase('vi') === String(chosenGate).toLocaleLowerCase('vi')) {
            btn.classList.remove('border-indigo-300');
            btn.classList.add('border-rose-500', 'ring-4', 'ring-rose-200');
        } else {
            btn.classList.add('opacity-55');
        }
    });

    if (correct) {
        if (fb) {
            fb.className = 'text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 min-h-[26px] font-black text-xs sk-pop';
            fb.textContent = `✨ ${c.correct.toUpperCase()} + ${c.blank} = ${c.answer}`;
        }
        if (knight) {
            knight.classList.remove('sk-knight-idle');
            knight.style.transform = `translateX(${gateIndex === 0 ? '110px' : gateIndex === 1 ? '250px' : '360px'}) scale(1.15)`;
        }
        if (effect) effect.innerHTML = '<span class="sk-slash">⚡⚔️✨</span>';
    } else {
        if (scene) scene.classList.add('sk-scene-shake');
        if (fb) {
            fb.className = 'text-rose-700 bg-rose-50 border border-rose-200 rounded-full px-3 py-1 min-h-[26px] font-black text-xs sk-pop';
            fb.textContent = timeout ? `⏰ Hết giờ! Cổng đúng là ${c.correct.toUpperCase()} → ${c.answer}` : `💥 Sai cổng! Đúng là ${c.correct.toUpperCase()} → ${c.answer}`;
        }
        if (effect) effect.innerHTML = '<span class="sk-pop">💥🛡️</span>';
    }

    const scoreEl = document.getElementById('sk-score');
    const streakEl = document.getElementById('sk-streak');
    const livesEl = document.getElementById('sk-lives');
    if (scoreEl) scoreEl.textContent = `⭐ ${skScore}`;
    if (streakEl) streakEl.textContent = `🔥 ${skStreak}`;
    if (livesEl) livesEl.textContent = `${'🛡️'.repeat(skLives)}${'▫️'.repeat(Math.max(0, 3-skLives))}`;
}

function skFinish() {
    skStopRoundTimer();
    const box = document.getElementById('game-play-container');
    const cleared = skIndex >= skPool.length && skLives > 0;
    if (cleared) {
        playAudio('win');
        confetti({ particleCount: 120, spread: 85, origin: { y: 0.62 } });
    }
    const done = Math.min(skIndex, skPool.length);
    const medal = cleared ? (skLives === 3 ? '👑' : skLives === 2 ? '🥇' : '🥈') : '🛡️';
    box.innerHTML = `
        <div class="bg-gradient-to-b from-amber-50 via-white to-emerald-50 rounded-[28px] border-2 ${cleared ? 'border-emerald-300' : 'border-rose-300'} shadow-sm p-5 md:p-7 text-center relative overflow-hidden">
            <div class="absolute left-4 bottom-2 text-8xl opacity-15">🏰</div>
            <div class="absolute right-4 bottom-2 text-8xl opacity-15">🐉</div>
            <div class="relative z-10">
                <div class="text-7xl mb-2">${medal}</div>
                <h3 class="text-xl md:text-2xl font-black ${cleared ? 'text-emerald-600' : 'text-rose-600'}">${cleared ? 'Phá đảo cổng thành!' : 'Hiệp sĩ tạm nghỉ!'}</h3>
                <p class="mt-2 text-sm md:text-base font-bold text-slate-600">Vượt <strong>${done}/${skPool.length}</strong> cổng · <strong>${skScore} điểm</strong> · combo tốt nhất <strong>${skBestStreak}</strong>.</p>
                <div class="mt-4 flex justify-center gap-2 text-2xl">${'🛡️'.repeat(skLives)}${'💔'.repeat(Math.max(0, 3-skLives))}</div>
                <div class="grid grid-cols-2 gap-2.5 max-w-md mx-auto mt-5">
                    <button onclick="skStartMode('${skMode}')" class="pastel-btn py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black text-sm">⚔️ Chơi lại</button>
                    <button onclick="skRenderModeMenu()" class="pastel-btn py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-700 font-black text-sm">🗺️ Chọn thử thách</button>
                </div>
            </div>
        </div>`;
}
