// ==========================================
// MINI GAME TV2: HIỆP SĨ CHÍNH TẢ
// Dùng trực tiếp kho câu hỏi của Chuyên đề 2 & 3; không tạo database riêng.
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

const SK_MODES = [
    { id: 'mixed', label: 'Trộn thử thách', icon: '⚔️', subs: null },
    { id: 'chtr', label: 'ch / tr', icon: '🛡️', subs: ['Phân biệt ch / tr'] },
    { id: 'sx', label: 's / x', icon: '🌟', subs: ['Phân biệt s / x'] },
    { id: 'ln', label: 'l / n', icon: '🍀', subs: ['Phân biệt l / n'] },
    { id: 'rdgi', label: 'r / d / gi', icon: '🔥', subs: ['Phân biệt r / d / gi'] },
    { id: 'rules', label: 'c/k · g/gh · ng/ngh', icon: '🏰', subs: ['Luật chính tả c/k, g/gh, ng/ngh'] }
];

async function startSpellingKnightGame() {
    clearInterval(window.skTimerInterval);
    const box = document.getElementById('game-play-container');
    if (box) box.innerHTML = '<div class="py-10 text-center text-rose-500 font-black"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Đang tập hợp thử thách chính tả...</div>';
    try {
        await fetchAllQuestionsFlat();
        skRenderModeMenu();
    } catch (e) {
        if (box) box.innerHTML = `<div class="py-10 text-center text-rose-500 font-black">😿 Không tải được học liệu: ${escapeHtml(e.message || String(e))}</div>`;
    }
}

function skGetAllSourceQuestions() {
    const flat = Array.isArray(allQuestionsFlatCache) ? allQuestionsFlatCache : [];
    return flat.filter(q => [2, 3].includes(Number(q.source_topic_id)) && Array.isArray(q.options) && q.options.length >= 2 && q.answer);
}

function skRenderModeMenu() {
    const box = document.getElementById('game-play-container');
    const all = skGetAllSourceQuestions();
    const countFor = mode => {
        if (!mode.subs) return all.length;
        return all.filter(q => mode.subs.includes(String(q.sub_topic))).length;
    };
    box.innerHTML = `
        <div class="bg-white rounded-[28px] border-2 border-rose-200 shadow-sm p-4 md:p-5">
            <div class="text-center mb-4">
                <div class="text-5xl mb-2">⚔️</div>
                <h3 class="text-xl font-black text-rose-600">Hiệp sĩ Chính tả</h3>
                <p class="text-sm font-bold text-slate-500 mt-1">Chọn vùng luyện tập rồi vượt 10 cổng thành. Sai 3 lần là hết khiên nhé!</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                ${SK_MODES.map((m, i) => `
                    <button onclick="skStartMode('${m.id}')" class="pastel-btn min-h-[96px] rounded-2xl border-2 ${i % 2 ? 'border-purple-200 bg-purple-50/70 text-purple-700' : 'border-rose-200 bg-rose-50/70 text-rose-700'} p-3 flex flex-col items-center justify-center text-center">
                        <span class="text-3xl mb-1">${m.icon}</span>
                        <span class="font-black text-sm md:text-base">${m.label}</span>
                        <span class="text-[11px] font-bold opacity-70 mt-1">${countFor(m)} thử thách</span>
                    </button>`).join('')}
            </div>
            <div class="mt-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-3 text-xs md:text-sm font-bold text-amber-900 leading-relaxed">
                💡 Mỗi cổng lấy trực tiếp từ kho học liệu Tiếng Việt 2. Chọn đúng để hiệp sĩ tiến lên, giữ chuỗi liên tiếp để nhận thêm điểm.
            </div>
        </div>`;
}

function skStartMode(modeId) {
    const mode = SK_MODES.find(m => m.id === modeId) || SK_MODES[0];
    skMode = mode.id;
    let pool = skGetAllSourceQuestions();
    if (mode.subs) pool = pool.filter(q => mode.subs.includes(String(q.sub_topic)));
    pool = shuffleArray(pool);
    if (!pool.length) {
        showAccessGate({ title: 'Chưa đủ học liệu', icon: '📚', showAuth: false, message: 'Nhóm này đang được bổ sung thêm câu hỏi.', note: 'Con có thể chọn Trộn thử thách để chơi ngay nhé!' });
        return;
    }
    skPool = pool.slice(0, Math.min(skRoundSize, pool.length));
    skIndex = 0; skScore = 0; skLives = 3; skStreak = 0; skBestStreak = 0; skAnswered = false;
    skRenderRound();
}

function skRenderRound() {
    if (skIndex >= skPool.length || skLives <= 0) return skFinish();
    const q = skPool[skIndex];
    skAnswered = false;
    const modeLabel = SK_MODES.find(m => m.id === skMode)?.label || 'Trộn thử thách';
    const progress = Math.round((skIndex / skPool.length) * 100);
    const choices = shuffleArray([...new Set(q.options)]);
    const box = document.getElementById('game-play-container');
    box.innerHTML = `
        <div class="bg-gradient-to-b from-sky-50 via-white to-emerald-50 rounded-[28px] border-2 border-teal-200 shadow-sm overflow-hidden">
            <div class="px-4 pt-4">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 text-xs md:text-sm font-black">
                        <span class="px-3 py-1 rounded-full bg-rose-100 text-rose-700 border border-rose-200">⚔️ ${escapeHtml(modeLabel)}</span>
                        <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">🔥 Chuỗi ${skStreak}</span>
                    </div>
                    <div class="flex items-center gap-2 text-xs md:text-sm font-black">
                        <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">⭐ ${skScore}</span>
                        <span class="px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200">${'🛡️'.repeat(skLives)}${'▫️'.repeat(Math.max(0,3-skLives))}</span>
                    </div>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden mb-3"><div class="h-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all" style="width:${progress}%"></div></div>
            </div>

            <div class="relative px-4 md:px-7 pb-5">
                <div class="flex items-end justify-center gap-4 mb-3 min-h-[105px]">
                    <div class="text-6xl md:text-7xl select-none ${skAnswered ? '' : 'animate-bounce'}">🛡️</div>
                    <div class="relative bg-white border-2 border-rose-200 rounded-2xl px-4 py-3 shadow-sm max-w-xl flex-1">
                        <div class="absolute -left-2 bottom-5 w-4 h-4 bg-white border-l-2 border-b-2 border-rose-200 rotate-45"></div>
                        <div class="text-[11px] font-black text-rose-400 uppercase tracking-wide mb-1">Cổng ${skIndex + 1}/${skPool.length} · ${escapeHtml(q.sub_topic || '')}</div>
                        <div class="text-base md:text-xl font-black text-slate-800 leading-snug">${escapeHtml(q.question_text)}</div>
                        <button onclick="speakVietnamese(${JSON.stringify(q.audio_text || q.question_text)})" class="mt-2 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-200 text-pink-600 font-black text-xs pastel-btn"><i class="fa-solid fa-volume-high mr-1"></i> Nghe câu hỏi</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5" id="sk-gates">
                    ${choices.map((opt, i) => `
                        <button data-choice="${escapeHtml(opt)}" onclick="skChoose(${JSON.stringify(opt)})" class="sk-gate pastel-btn group relative min-h-[82px] rounded-2xl border-2 border-indigo-200 bg-white hover:bg-indigo-50 hover:border-indigo-400 p-3 text-left font-black text-slate-700 transition-all">
                            <span class="absolute top-2 left-2 w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">${String.fromCharCode(65+i)}</span>
                            <span class="block pl-9 text-base md:text-lg leading-snug">${escapeHtml(opt)}</span>
                            <span class="absolute right-3 bottom-2 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">🏰</span>
                        </button>`).join('')}
                </div>
                <div id="sk-feedback" class="min-h-[38px] mt-3 text-center font-black text-sm md:text-base"></div>
            </div>
        </div>`;
}

function skChoose(choice) {
    if (skAnswered) return;
    skAnswered = true;
    const q = skPool[skIndex];
    const correct = choice === q.answer;
    document.querySelectorAll('.sk-gate').forEach(btn => {
        btn.disabled = true;
        const val = btn.getAttribute('data-choice');
        if (val === q.answer) {
            btn.classList.remove('border-indigo-200','bg-white');
            btn.classList.add('border-emerald-400','bg-emerald-100','text-emerald-800');
        } else if (val === choice && !correct) {
            btn.classList.remove('border-indigo-200','bg-white');
            btn.classList.add('border-rose-400','bg-rose-100','text-rose-800');
        } else btn.classList.add('opacity-50');
    });

    const fb = document.getElementById('sk-feedback');
    if (correct) {
        skStreak++; skBestStreak = Math.max(skBestStreak, skStreak);
        const bonus = Math.min(5, Math.floor(skStreak / 3));
        skScore += 10 + bonus;
        if (fb) { fb.className = 'min-h-[38px] mt-3 text-center font-black text-sm md:text-base text-emerald-600'; fb.textContent = `✨ Chính xác! +${10+bonus} điểm · Hiệp sĩ vượt cổng!`; }
        playAudio('correct');
        confetti({ particleCount: 28, spread: 50, origin: { y: 0.75 } });
        setTimeout(() => speakVietnamese(q.answer, 0.96), 180);
    } else {
        skLives--; skStreak = 0;
        if (fb) { fb.className = 'min-h-[38px] mt-3 text-center font-black text-sm md:text-base text-rose-600'; fb.textContent = `🛡️ Mất 1 khiên! Đáp án đúng: ${q.answer}`; }
        playAudio('wrong');
    }
    setTimeout(() => { skIndex++; skRenderRound(); }, 1150);
}

function skFinish() {
    const box = document.getElementById('game-play-container');
    const cleared = skIndex >= skPool.length && skLives > 0;
    if (cleared) { playAudio('win'); confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } }); }
    const done = Math.min(skIndex, skPool.length);
    box.innerHTML = `
        <div class="bg-white rounded-[28px] border-2 ${cleared ? 'border-emerald-200' : 'border-rose-200'} shadow-sm p-5 md:p-7 text-center">
            <div class="text-6xl mb-2">${cleared ? '🏆' : '🛡️'}</div>
            <h3 class="text-xl md:text-2xl font-black ${cleared ? 'text-emerald-600' : 'text-rose-600'}">${cleared ? 'Vượt thành công!' : 'Hết khiên rồi!'}</h3>
            <p class="mt-2 text-sm md:text-base font-bold text-slate-600">Con đã vượt <strong>${done}/${skPool.length}</strong> cổng · đạt <strong>${skScore} điểm</strong> · chuỗi tốt nhất <strong>${skBestStreak}</strong>.</p>
            <div class="grid grid-cols-2 gap-2.5 max-w-md mx-auto mt-5">
                <button onclick="skStartMode('${skMode}')" class="pastel-btn py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-black text-sm">🔄 Chơi lại</button>
                <button onclick="skRenderModeMenu()" class="pastel-btn py-3 rounded-2xl bg-purple-50 border-2 border-purple-200 text-purple-700 font-black text-sm">🗺️ Chọn thử thách</button>
            </div>
        </div>`;
}
