// ==========================================
// CẤU HÌNH 11 CHUYÊN ĐỀ KHO HỌC LIỆU & MA TRẬN NĂNG LỰC TV_C1-C6 (TIẾNG VIỆT LỚP 2)
// ==========================================
const TOPICS_CONFIG = [
    { id: 1, title: "1. Ngôi nhà chữ Việt", desc: "Bảng chữ cái Việt Nam và quy ước viết hoa đầu câu, tên người, địa danh", icon: "🏠", color: "pink" },
    { id: 2, title: "2. Hiệp sĩ âm đầu", desc: "ch/tr, s/x, l/n, r/d/gi và quy tắc c/k, g/gh, ng/ngh", icon: "⚔️", color: "rose" },
    { id: 3, title: "3. Vương quốc vần & dấu", desc: "Âm cuối dễ lẫn, vần phức hợp và dấu hỏi/ngã", icon: "🔮", color: "purple" },
    { id: 4, title: "4. Kho báu từ vựng", desc: "Vốn từ và nghĩa từ theo các chủ điểm gần gũi", icon: "💰", color: "amber" },
    { id: 5, title: "5. Khu vườn từ loại", desc: "Từ chỉ sự vật, hoạt động/trạng thái và đặc điểm", icon: "🌳", color: "emerald" },
    { id: 6, title: "6. Kỹ sư ghép câu", desc: "Dấu câu, tạo câu và sắp xếp đoạn ngắn hợp lí", icon: "🖊️", color: "cyan" },
    { id: 7, title: "7. Thế giới câu hay", desc: "Câu giới thiệu, câu nêu hoạt động và câu nêu đặc điểm", icon: "💬", color: "indigo" },
    { id: 8, title: "8. Đại sứ giao tiếp", desc: "Lời nói/lời đáp, tin nhắn, thư ngắn, bưu thiếp và bảng biểu", icon: "🤝", color: "sky" },
    { id: 9, title: "9. Nhà thông thái nhỏ", desc: "Đọc hiểu thơ, truyện, văn bản thông tin và suy luận", icon: "📖", color: "fuchsia" },
    { id: 10, title: "10. PHẦN THÊM: Trí tuệ Trạng Nguyên", desc: "Câu đố, suy luận bằng lời và trò chơi ngôn ngữ tăng hứng thú", icon: "🧩", color: "yellow" },
    { id: 11, title: "11. Ôn tập tổng hợp", desc: "Ôn tích lũy Học kỳ I, Học kỳ II và cả năm", icon: "📚", color: "violet" }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Lộ trình 24 tuần (Tỷ lệ Vàng 30/60) — mapping tới đúng tiểu mục con (tên "sub" đầy đủ, không phải mã X.Y)
// Tuần 12 = Đấu trường thi Học kỳ I | Tuần 24 = Đấu trường thi Học kỳ II + Học sinh giỏi
const roadmapConfig = {
    1: { name: "Tuần 1: Ngôi nhà chữ Việt I - Bảng chữ cái & viết hoa đầu câu", focusSubIds: ["TV_2_M1_1", "TV_2_M1_2"], reviewSubIds: [], desc: "Bảng chữ cái Việt Nam, viết hoa đầu câu và đầu dòng thơ.", icon: "🔤" },
    2: { name: "Tuần 2: Ngôi nhà chữ Việt II - Tên người & địa danh", focusSubIds: ["TV_2_M1_3", "TV_2_M1_4"], reviewSubIds: ["TV_2_M1_1", "TV_2_M1_2"], desc: "Luyện viết hoa tên người, địa danh và ôn nền tảng chữ cái.", icon: "✍️" },
    3: { name: "Tuần 3: Hiệp sĩ âm đầu I - ch/tr & s/x", focusSubIds: ["TV_2_M2_1"], reviewTopicIds: [1], desc: "Phân biệt ch/tr và s/x trong từ, câu tự nhiên.", icon: "⚔️" },
    4: { name: "Tuần 4: Hiệp sĩ âm đầu II - l/n & r/d/gi", focusSubIds: ["TV_2_M2_2"], reviewSubIds: ["TV_2_M2_1"], reviewTopicIds: [1], desc: "Phân biệt l/n và r/d/gi, đồng thời ôn âm đầu đã học.", icon: "⚔️" },
    5: { name: "Tuần 5: Hiệp sĩ âm đầu III - c/k, g/gh, ng/ngh", focusSubIds: ["TV_2_M2_3", "TV_2_M2_4"], reviewSubIds: ["TV_2_M2_1", "TV_2_M2_2"], reviewTopicIds: [1], desc: "Luyện các quy tắc chính tả c/k, g/gh, ng/ngh.", icon: "⚔️" },
    6: { name: "Tuần 6: Vương quốc vần & dấu - Âm cuối, vần phức hợp & hỏi/ngã", focusSubIds: ["TV_2_M3_1", "TV_2_M3_2", "TV_2_M3_3", "TV_2_M3_4", "TV_2_M3_5"], reviewTopicIds: [1, 2], desc: "Luyện c/t, n/ng, ch/nh, vần phức hợp và dấu hỏi/ngã.", icon: "🔮" },
    7: { name: "Tuần 7: Ôn tập C1 - Chữ, âm đầu, vần & dấu", focusTopicIds: [1, 2, 3], desc: "Ôn đủ ba tầng: chữ/viết hoa → âm đầu → vần/dấu.", icon: "🎯" },
    8: { name: "Tuần 8: Kho báu từ vựng - Gia đình, Trường học & Thiên nhiên", focusSubIds: ["TV_2_M4_1", "TV_2_M4_2", "TV_2_M4_3", "TV_2_M4_4"], reviewSubIds: [], desc: "Mở rộng vốn từ và nghĩa từ theo các chủ điểm gần gũi.", icon: "💰" },
    9: { name: "Tuần 9: Từ chỉ sự vật & từ chỉ hoạt động", focusSubIds: ["TV_2_M5_1", "TV_2_M5_2"], reviewTopicIds: [4], desc: "Nhận diện và sử dụng từ chỉ sự vật, hoạt động/trạng thái.", icon: "🌳" },
    10: { name: "Tuần 10: Từ chỉ đặc điểm & quan hệ nghĩa đơn giản", focusSubIds: ["TV_2_M5_3", "TV_2_M4_1", "TV_2_M4_2", "TV_2_M4_3", "TV_2_M4_4"], reviewSubIds: ["TV_2_M5_1", "TV_2_M5_2"], desc: "Luyện từ chỉ đặc điểm và nghĩa từ trong ngữ cảnh.", icon: "🌳" },
    11: { name: "Tuần 11: Dấu câu, tạo câu & đoạn ngắn", focusSubIds: ["TV_2_M6_1", "TV_2_M6_2", "TV_2_M6_3"], reviewTopicIds: [5], desc: "Dùng dấu câu, sắp xếp từ thành câu và câu thành đoạn ngắn.", icon: "🖊️" },
    12: { name: "Tuần 12: Đấu trường đánh giá số hóa HKI", isExam: true, desc: "13 câu - 40 phút - theo ma trận V6.1.", icon: "🏆" },
    13: { name: "Tuần 13: Câu giới thiệu & câu nêu hoạt động", focusSubIds: ["TV_2_M7_1", "TV_2_M7_2"], reviewTopicIds: [5, 6], desc: "Nhận diện và tạo câu giới thiệu, câu nêu hoạt động.", icon: "💬" },
    14: { name: "Tuần 14: Câu nêu đặc điểm & mở rộng câu", focusSubIds: ["TV_2_M7_3"], reviewSubIds: ["TV_2_M7_1", "TV_2_M7_2", "TV_2_M5_3"], desc: "Luyện câu nêu đặc điểm và ôn các kiểu câu đã học.", icon: "💬" },
    15: { name: "Tuần 15: Đại sứ giao tiếp - Chào hỏi & nói lời phù hợp", focusSubIds: ["TV_2_M8_1"], reviewTopicIds: [6, 7], desc: "Luyện chào hỏi, cảm ơn, xin lỗi, mời, đề nghị và chúc mừng.", icon: "🤝" },
    16: { name: "Tuần 16: Tin nhắn, thư/bưu thiếp & bảng biểu", focusSubIds: ["TV_2_M8_2", "TV_2_M8_3", "TV_2_M8_4"], reviewTopicIds: [6, 7], desc: "Luyện văn bản giao tiếp ngắn và đọc thông tin trực tiếp.", icon: "🤝" },
    17: { name: "Tuần 17: Ôn tập giữa giai đoạn HKII", focusTopicIds: [7, 8], reviewTopicIds: [4, 5, 6], desc: "Trọng tâm câu và giao tiếp; nhắc lại từ vựng, từ ngữ và dấu câu.", icon: "🎯" },
    18: { name: "Tuần 18: Đọc hiểu chuyên sâu - Thơ", focusSubIds: ["TV_2_M9_1"], reviewSubIds: [], desc: "Đọc thơ, tìm chi tiết, hình ảnh, cảm xúc và thông tin trực tiếp.", icon: "📖" },
    19: { name: "Tuần 19: Đọc hiểu chuyên sâu - Truyện/văn xuôi & bài học", focusSubIds: ["TV_2_M9_2", "TV_2_M9_3"], reviewSubIds: ["TV_2_M9_1"], desc: "Đọc truyện/văn xuôi, suy luận và phản hồi văn bản.", icon: "📖" },
    20: { name: "Tuần 20: PHẦN THÊM - Trí tuệ ngôn ngữ: Động vật & muông thú", focusSubIds: ["TV_2_M10_1", "TV_2_M10_2"], reviewSubIds: ["TV_2_M4_3", "TV_2_M5_1", "TV_2_M5_3"], desc: "Giải câu đố và suy luận bằng manh mối ngôn ngữ về động vật.", icon: "🧩" },
    21: { name: "Tuần 21: PHẦN THÊM - Đồ dùng, cây trái & hoa", focusSubIds: ["TV_2_M10_3", "TV_2_M10_4"], reviewTopicIds: [4, 5], desc: "Suy luận qua mô tả đặc điểm, công dụng, cây trái và đồ dùng.", icon: "🧩" },
    22: { name: "Tuần 22: PHẦN THÊM - IQ ngôn ngữ, đố chữ & bối cảnh ATGT", focusSubIds: ["TV_2_M10_5", "TV_2_M10_6"], reviewTopicIds: [1, 2, 3], desc: "Đố chữ, từ lạc nhóm và suy luận bằng lời; ATGT chỉ là bối cảnh.", icon: "🧩" },
    23: { name: "Tuần 23: Ôn tập tổng hợp cuối năm", focusTopicIds: [1,2,3,4,5,6,7,8,9,10], desc: "Ôn toàn bộ TV_C1-TV_C6, bảo đảm độ phủ hợp lí.", icon: "🎓" },
    24: { name: "Tuần 24: Đấu trường đánh giá số hóa cuối năm", isExam: true, desc: "13 câu - 40 phút - HKII/HSG theo ma trận V6.1.", icon: "🏆" }
};


const TOTAL_ROADMAP_WEEKS = 24;


function getRoadmapCoord(weekNum) {
    const cols = 6;
    const colWidth = 140, rowHeight = 105;
    const startX = 90, startY = 65;
    const idx = weekNum - 1;
    const row = Math.floor(idx / cols);
    const posInRow = idx % cols;
    const col = (row % 2 === 0) ? posInRow : (cols - 1 - posInRow);
    return { x: startX + col * colWidth, y: startY + row * rowHeight };
}

function buildRoadmapPathD(totalWeeks) {
    const pts = [];
    for (let w = 1; w <= totalWeeks; w++) pts.push(getRoadmapCoord(w));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        const dx = p1.x - p0.x, dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        // Sóng uốn lượn xuống-lên LIÊN TỤC xuyên suốt toàn bộ đường đi (kể cả đoạn chuyển hàng),
        // không để đoạn nào thẳng đơ xen giữa — giống hệt kiểu bản đồ lộ trình game (Duolingo-style).
        const bend = (i % 2 === 0 ? 1 : -1) * 45;
        const cx = midX + nx * bend, cy = midY + ny * bend;
        d += ` Q ${cx},${cy} ${p1.x},${p1.y}`;
    }
    return d;
}

const examFileMap = {
    hocky1: { file: 'de_thi_tieng_viet_2.json', idPrefix: 'TV_2_M12_1', sheet: 'LichSuBaiThiHK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: 'de_thi_tieng_viet_2.json', idPrefix: 'TV_2_M12_2', sheet: 'LichSuBaiThiHK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: 'de_thi_tieng_viet_2.json', idPrefix: 'TV_2_M12_3', sheet: 'LichSuBaiThiHSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực Tiếng Việt lớp 2 (TV_C1 - TV_C6) - chuẩn V6.1
const SKILL_TAXONOMY = {
    C1: { code: 'C1', sheetCol: 'TV_C1_Dung', totalCol: 'TV_C1_Tong', name: 'Chính tả & Âm - Vần', advice: 'Ôn theo ba tầng: chữ/viết hoa → âm đầu → vần, âm cuối và dấu thanh.' },
    C2: { code: 'C2', sheetCol: 'TV_C2_Dung', totalCol: 'TV_C2_Tong', name: 'Từ vựng & Giao tiếp / Nói - nghe', advice: 'Mở rộng vốn từ theo chủ điểm và luyện lời nói, lời đáp, tin nhắn, thư/bưu thiếp, bảng biểu đơn giản.' },
    C3: { code: 'C3', sheetCol: 'TV_C3_Dung', totalCol: 'TV_C3_Tong', name: 'Từ chỉ sự vật - hoạt động - đặc điểm', advice: 'Luyện nhận diện và sử dụng từ chỉ sự vật, hoạt động/trạng thái và đặc điểm theo ngôn ngữ lớp 2.' },
    C4: { code: 'C4', sheetCol: 'TV_C4_Dung', totalCol: 'TV_C4_Tong', name: 'Câu, Dấu câu & Tạo lập văn bản ngắn', advice: 'Luyện dấu câu, câu giới thiệu/câu nêu hoạt động/câu nêu đặc điểm và sắp xếp câu thành đoạn ngắn.' },
    C5: { code: 'C5', sheetCol: 'TV_C5_Dung', totalCol: 'TV_C5_Tong', name: 'Đọc hiểu & Phản hồi văn bản', advice: 'Luyện tìm chi tiết, hiểu nội dung, trình tự, nghĩa từ trong ngữ cảnh và suy luận đơn giản từ văn bản.' },
    C6: { code: 'C6', sheetCol: 'TV_C6_Dung', totalCol: 'TV_C6_Tong', name: 'Tư duy ngôn ngữ - Phần thêm', advice: 'Phần thêm tăng hứng thú: câu đố, từ lạc nhóm, đố chữ và suy luận bằng manh mối ngôn ngữ.' }
};

// Chủ đề mẹ dùng làm fallback nếu câu chưa có skill_tag; dữ liệu V6.1 đã tự mang skill_tag ở từng câu.
const TOPIC_TO_SKILL = { 1: 'C1', 2: 'C1', 3: 'C1', 4: 'C2', 5: 'C3', 6: 'C4', 7: 'C4', 8: 'C2', 9: 'C5', 10: 'C6', 11: 'C1' };

// Mẫu số điểm năng lực phụ thuộc loại đề V6.1; HKI/HKII không chấm C6, HSG có C6.
const EXAM_SKILL_MAX_SCORE_BY_SHEET = {
    LichSuBaiThiHK1: { C1: 1.5, C2: 1.5, C3: 1.5, C4: 2.5, C5: 3.0, C6: 0.0 },
    LichSuBaiThiHK2: { C1: 1.5, C2: 1.5, C3: 1.5, C4: 2.5, C5: 3.0, C6: 0.0 },
    LichSuBaiThiHSG: { C1: 1.5, C2: 1.5, C3: 1.5, C4: 1.5, C5: 2.0, C6: 2.0 }
};
function getExamSkillMaxScoreForSheet(sheetName, skillKey) {
    return Number(EXAM_SKILL_MAX_SCORE_BY_SHEET[sheetName]?.[skillKey] ?? 0);
}

const GREETINGS_STUDENT = [
    "Chào {name}, cô Thỏ Ngọc đố con hôm nay mình đọc và viết đúng chính tả đến đâu nhé!",
    "Chào mừng {name} quay lại! Cùng cô Thỏ Ngọc khám phá thêm thật nhiều từ ngữ hay nào!",
    "Cô Thỏ Ngọc chào {name}! Sách đã mở, bút đã cầm, giờ là lúc chinh phục điểm 10 Tiếng Việt!",
    "Chào con yêu {name}, hôm nay chúng mình cùng tìm xem câu chuyện nào đang chờ được khám phá nhé!",
    "Chào mừng {name} đến với giờ học Tiếng Việt! Cô Thỏ Ngọc tin con sẽ đọc thật hay và viết thật đúng!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Thỏ Ngọc rất vui được cùng con luyện Tiếng Việt hôm nay!",
    "Chào mừng bé đến với lớp Tiếng Việt của cô Thỏ Ngọc! Mình cùng thử sức xem sao nhé!",
    "Cô Thỏ Ngọc chào bé! Mở sách ra là con chữ lên hạng liền, cùng bắt đầu nào!",
    "Chào thiên tài nhí! Cô Thỏ Ngọc đang chờ xem con đọc và viết giỏi cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Tiếng Việt! Chúc con thật minh mẫn và vui vẻ!"
];



// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwp-5sYrvTkyKq3-x_egCGGwEwtFmsy8q1alWfwNLh0nFGT8ChoFe66SIoE9l00Wyim/exec";
let allTopicsDataCache = null;
let allQuestionsFlatCache = null;
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('tvl2_autoSpeechEnabled') !== 'false';
const examsCache = {};

// ==========================================
// GIÁO ÁN - mô phỏng tiết học theo SGK Kết nối tri thức
// ==========================================
const GIAO_AN_DATA_FILE = 'assets/data/giao_an_tieng_viet_2.json';
let giaoAnDataCache = null;
let inGiaoAnFlow = false;
let activeGiaoAnContext = { semester: 1, week: null, unitId: null };

let currentUser = { name: 'Khách (Guest)', isGuest: true, tuanHienTai: 1, hoTen: 'Bé Khách', lop: '', maHS: 'KHACH', vaiTro: 'guest', loaiTaiKhoan: 'guest' };
let currentSessionPin = '';
const PERSISTENT_SESSION_KEY = 'tv2_persistent_session_v1';
let adminAccountsCache = [];
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let inMiniGameFlow = false;
let activeMiniGameId = null;
let appViewEpoch = 0;
const activeStandaloneAudios = new Set();
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function stripOptionPrefix_(s) {
    // Dữ liệu đôi khi tự nhúng sẵn "A. ", "B) ", "C. "... ngay trong nội dung đáp án — bóc bỏ để
    // sau khi xáo trộn thứ tự, chữ cái hiển thị (A/B/C/D) luôn khớp đúng với vị trí thật trên màn hình.
    return String(s ?? '').replace(/^\s*[A-Da-d]\s*[\.\)]\s*/, '').trim();
}

function normalizeQuestion(q) {
    if (!q) return null;
    const rawOptions = Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []);
    const cleanedOptions = rawOptions.map(stripOptionPrefix_);
    const cleanedAnswer = stripOptionPrefix_(q.a ?? q.answer ?? '');
    // Xáo trộn ngẫu nhiên thứ tự 4 đáp án — tránh tình trạng đáp án đúng luôn cố định ở vị trí A
    // (dù sau này nguồn dữ liệu gốc có tự xáo trộn lại thì 2 lớp xáo trộn chồng nhau vẫn cho kết quả ngẫu nhiên).
    const shuffledOptions = shuffleArray(cleanedOptions);
    return {
        // Kho học liệu dùng "id"; đề thi dùng "id" + "q_num" (số thứ tự câu trong đề).
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        question_number_in_exam: q.q_num ?? null,
        // Kho học liệu V6.1 có cả sub_id và tên sub; Roadmap dùng sub_id để tránh lệch do đổi tên hiển thị.
        sub_id: String(q.sub_id ?? q.subId ?? '').trim(),
        sub_topic: String(q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        sub_topic_label: String(q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        difficulty: String(q.difficulty ?? q.level ?? 'medium').toLowerCase(),
        week: q.week ?? q.w ?? null,
        question_text: q.q ?? q.question_text ?? '',
        options: shuffledOptions,
        answer: cleanedAnswer,
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        // Đề thi tự mang "tag" (TV_C1..TV_C6) cho từng câu. Kho học liệu KHÔNG có tag riêng từng câu
        // — sẽ được gán bổ sung theo chủ đề gốc (TOPIC_TO_SKILL) ngay sau bước normalize (xem fetchAllQuestionsFlat).
        skill_tag: q.skill_tag ?? q.tag ?? null,
        secondary_tags: Array.isArray(q.secondary_tags) ? q.secondary_tags : [],
        source_topic_id: q.source_topic_id ?? null,
        // Đề thi dùng field "points"; kho học liệu hằng ngày không có điểm riêng từng câu (mặc định 0.5).
        diem: Number(q.diem ?? q.points ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
    };

}

function normalizeTopic(t) {
    if (!t) return null;
    const topicId = Number(t.id ?? t.topic_id);
    const skillTag = TOPIC_TO_SKILL[topicId] || 'C1';
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: topicId,
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean).map(q => ({
            ...q,
            source_topic_id: topicId,
            skill_tag: q.skill_tag || skillTag
        }))
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

function takeUniqueRandom_(pool, count, usedIds) {
    const usable = shuffleArray((pool || []).filter(q => !usedIds.has(String(q.question_id))));
    const picked = usable.slice(0, Math.max(0, count));
    picked.forEach(q => usedIds.add(String(q.question_id)));
    return picked;
}

function getRoadmapScopedPool_(config, kind) {
    if (!allQuestionsFlatCache) return [];
    const subIds = config[`${kind}SubIds`] || [];
    const topicIds = config[`${kind}TopicIds`] || [];
    return allQuestionsFlatCache.filter(q =>
        (subIds.length && subIds.includes(q.sub_id)) ||
        (topicIds.length && topicIds.includes(Number(q.source_topic_id)))
    );
}

function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !allQuestionsFlatCache) return [];

    const focusPool = getRoadmapScopedPool_(config, 'focus');
    const reviewPool = getRoadmapScopedPool_(config, 'review');
    const allScoped = [...focusPool, ...reviewPool];
    if (!allScoped.length) return [];

    const difficultyTargets = { easy: 9, medium: 12, hard: 9 };
    const focusTargets = { easy: 6, medium: 8, hard: 6 }; // 20/30 ≈ 67% trọng tâm
    const used = new Set();
    const selected = [];

    for (const difficulty of ['easy', 'medium', 'hard']) {
        const totalNeed = difficultyTargets[difficulty];
        const focusNeed = reviewPool.length ? focusTargets[difficulty] : totalNeed;
        const focusDiff = focusPool.filter(q => q.difficulty === difficulty);
        const reviewDiff = reviewPool.filter(q => q.difficulty === difficulty);

        let picked = takeUniqueRandom_(focusDiff, focusNeed, used);
        selected.push(...picked);

        let remain = totalNeed - picked.length;
        if (remain > 0) {
            picked = takeUniqueRandom_(reviewDiff, remain, used);
            selected.push(...picked);
            remain -= picked.length;
        }
        if (remain > 0) {
            const fallbackSameDifficulty = allScoped.filter(q => q.difficulty === difficulty);
            picked = takeUniqueRandom_(fallbackSameDifficulty, remain, used);
            selected.push(...picked);
            remain -= picked.length;
        }
    }

    // Nếu một mức khó tạm thiếu dữ liệu, bù từ pool hợp lệ nhưng không lặp câu.
    if (selected.length < 30) {
        selected.push(...takeUniqueRandom_(allScoped, 30 - selected.length, used));
    }

    return shuffleArray(selected.slice(0, 30));
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_tieng_viet_2_part1.json',
    'assets/data/kho_hoc_tieng_viet_2_part2.json'
];

// Kho học liệu Tiếng Việt lớp 2 đã BỌC SẴN theo từng Chuyên đề ({ topics: [{ id, name, desc, qs: [...] }] }),
// nên dùng thẳng fetchAllTopicsData() làm nguồn chính rồi gộp phẳng ra từ đó — không cần tự suy luận
// số Chuyên đề từ chuỗi "sub" (vì "sub" ở đây là TÊN đầy đủ tiểu mục, không phải mã "X.Y").
async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;
    const topics = await fetchAllTopicsData();
    allQuestionsFlatCache = topics.flatMap(t => t.questions);
    return allQuestionsFlatCache;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    const rawTopics = results.flatMap(data => (data && Array.isArray(data.topics)) ? data.topics : []);
    const normalized = rawTopics.map(normalizeTopic).filter(Boolean);

    // Đảm bảo đủ 11 Chuyên đề theo đúng thứ tự TOPICS_CONFIG (kể cả khi 1 Chuyên đề tạm thời chưa có dữ liệu).
    allTopicsDataCache = TOPICS_CONFIG.map(t => {
        const found = normalized.find(item => Number(item.topic_id) === Number(t.id));
        return found || {
            topic_id: t.id, topic_name: t.title, description: t.desc,
            lecture_title: '', lecture_content: '', lecture_audio_text: '', questions: []
        };
    });

    // Điền LUÔN cache phẳng ở đây — tránh phụ thuộc thứ tự gọi hàm (có nơi gọi fetchAllTopicsData()
    // trước, có nơi gọi fetchAllQuestionsFlat() trước; cả 2 phải luôn ra cùng 1 kết quả nhất quán).
    allQuestionsFlatCache = allTopicsDataCache.flatMap(t => t.questions);

    return allTopicsDataCache;
}

// Kho đề thi Tiếng Việt lớp 2 lồng 2 cấp: { exams: [ { sub_id, sub_name, exam_list: [{ exam_id, exam_name, time_limit, questions }] } ] }
// — cần làm phẳng thành 1 mảng đề thi duy nhất, gắn "exam_id" = "<sub_id>.<exam_id gốc>" để examFileMap.idPrefix lọc đúng hạng mục.
async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const raw = await res.json();

    const flatExams = [];
    if (raw && Array.isArray(raw.exams)) {
        raw.exams.forEach(cat => {
            const list = cat.exam_list || cat.exams || [];
            list.forEach(ex => {
                flatExams.push({
                    // exam_id gốc trong dữ liệu đã tự mang tiền tố sub_id đầy đủ (VD "TV_2_M12_1_EX1") — dùng thẳng.
                    exam_id: String(ex.exam_id ?? `${cat.sub_id}_EX?`),
                    exam_title: ex.exam_name || ex.exam_title || `${cat.sub_name} - Đề số ${ex.exam_id}`,
                    time_limit: ex.time_limit,
                    exam_category: ex.exam_category || null,
                    matrix_version: ex.matrix_version || null,
                    skill_max_score: ex.skill_max_score || null,
                    questions: (ex.questions || ex.qs || []).map(normalizeQuestion).filter(Boolean)
                });
            });
        });
    }

    const data = { exams: flatExams };
    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
async function renderDashboardGrid() {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    
    let topicsData = [];
    try { topicsData = await fetchAllTopicsData(); } catch (e) {}

    let html = '';
    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = totalCount > 0 ? `${totalCount} câu` : 'Đang cập nhật';

        const iconHtml = t.isCustomTextIcon 
            ? `<div class="w-8 h-8 bg-rose-100 rounded-xl flex items-center justify-center text-[11px] font-black text-rose-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        const premiumLocked = t.id === 11 && !hasPremiumAccess();
        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px] relative">
                ${premiumLocked ? '<span class="absolute top-2 right-2 text-slate-400 text-xs"><i class="fa-solid fa-lock"></i></span>' : ''}
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-pink-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>
        `;
    });

    let totalExamsCount = 3;
    try {
        const examData = await loadExamDataFile('de_thi_tieng_viet_2.json');
        if (examData && examData.exams) totalExamsCount = examData.exams.length;
    } catch (e) {}

    html += `
        <div onclick="openExamHub()" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[92px] relative">
            ${!hasPremiumAccess() ? '<span class="absolute top-2 right-2 text-slate-400 text-xs"><i class="fa-solid fa-lock"></i></span>' : ''}
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight">12. Đấu trường đề thi</h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-amber-100 text-[11px] font-bold text-gray-500">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${totalExamsCount} đề thi</span>
            </div>
        </div>
    `;
    container.innerHTML = html;
}


const GIAO_AN_LESSON_TYPE = {
    reading: { label: 'Đọc', icon: '📖', cls: 'pink' },
    handwriting: { label: 'Tập viết', icon: '✍️', cls: 'sky' },
    speaking_listening: { label: 'Nói & nghe', icon: '🎙️', cls: 'emerald' },
    spelling: { label: 'Chính tả', icon: '📝', cls: 'rose' },
    vocabulary_sentence: { label: 'Luyện từ & câu', icon: '💬', cls: 'indigo' },
    writing: { label: 'Luyện viết đoạn', icon: '🖊️', cls: 'amber' },
    review: { label: 'Ôn tập', icon: '🎯', cls: 'violet' }
};

async function loadGiaoAnData() {
    if (giaoAnDataCache) return giaoAnDataCache;
    const res = await fetch(GIAO_AN_DATA_FILE);
    if (!res.ok) throw new Error('Không thể tải dữ liệu Giáo án');
    giaoAnDataCache = await res.json();
    return giaoAnDataCache;
}

function getGiaoAnSemester_(data, semesterNumber) {
    return (data?.semesters || []).find(s => Number(s.semester) === Number(semesterNumber)) || null;
}

function findGiaoAnWeek_(data, semesterNumber, weekNumber) {
    const sem = getGiaoAnSemester_(data, semesterNumber);
    return (sem?.weeks || []).find(w => Number(w.week) === Number(weekNumber)) || null;
}

function findGiaoAnUnit_(data, unitId) {
    for (const sem of (data?.semesters || [])) {
        for (const week of (sem.weeks || [])) {
            const unit = (week.units || []).find(u => String(u.unit_id) === String(unitId));
            if (unit) return { sem, week, unit };
        }
    }
    return null;
}

function getGiaoAnProgressKey_() {
    const id = currentUser?.maHS || 'KHACH';
    return `tv2_giao_an_completed_${String(id).toUpperCase()}`;
}

function getGiaoAnCompletedSet_() {
    try {
        const raw = JSON.parse(localStorage.getItem(getGiaoAnProgressKey_()) || '[]');
        return new Set(Array.isArray(raw) ? raw : []);
    } catch (e) { return new Set(); }
}

function saveGiaoAnCompletedSet_(setObj) {
    localStorage.setItem(getGiaoAnProgressKey_(), JSON.stringify([...setObj]));
}

async function openGiaoAnHub(semesterNumber = 1) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    // Giáo án là nội dung Premium giống Tiến trình tuần và Mini Game:
    // chỉ Admin / Trial / VIP được truy cập.
    if (!hasPremiumAccess()) {
        showPremiumGate('Giáo án', '📘');
        return;
    }
    inGiaoAnFlow = true;
    inMiniGameFlow = false;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    activeGiaoAnContext = { semester: Number(semesterNumber) || 1, week: null, unitId: null };
    updateNavTabs('Giáo án', '📘', null);
    switchAppView('view-giao-an-hub');
    showLoadingOverlay('Đang mở Giáo án Tiếng Việt 2...');
    try {
        const data = await loadGiaoAnData();
        renderGiaoAnHub_(data, activeGiaoAnContext.semester);
    } catch (err) {
        alert(`Không thể mở Giáo án: ${err.message}`);
    } finally {
        hideLoadingOverlay();
    }
}

function renderGiaoAnHub_(data, semesterNumber) {
    const tabs = document.getElementById('giao-an-semester-tabs');
    const grid = document.getElementById('giao-an-week-grid');
    const subtitle = document.getElementById('giao-an-hub-subtitle');
    if (!tabs || !grid) return;

    tabs.innerHTML = (data.semesters || []).map(sem => {
        const active = Number(sem.semester) === Number(semesterNumber);
        return `<button onclick="openGiaoAnHub(${sem.semester})" class="px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold border transition-all ${active ? 'bg-sky-500 text-white border-sky-500 shadow-md' : 'bg-white text-sky-700 border-sky-200 hover:bg-sky-50'}">Học kỳ ${sem.semester}</button>`;
    }).join('');

    const sem = getGiaoAnSemester_(data, semesterNumber);
    if (!sem) { grid.innerHTML = '<p class="text-slate-400 font-bold">Chưa có dữ liệu học kỳ này.</p>'; return; }
    if (subtitle) subtitle.textContent = `Học kỳ ${sem.semester} · Tuần ${sem.week_from}-${sem.week_to} · mô phỏng các tiết học theo Kết nối tri thức`;

    const completed = getGiaoAnCompletedSet_();
    grid.innerHTML = (sem.weeks || []).map(w => {
        const units = w.units || [];
        const done = units.filter(u => completed.has(u.unit_id)).length;
        const pct = units.length ? Math.round(done * 100 / units.length) : 0;
        return `<button onclick="openGiaoAnWeek(${sem.semester}, ${w.week})" class="text-left pastel-card p-3.5 border-2 border-sky-100 hover:border-sky-300 transition-all group min-h-[118px]">
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2"><span class="text-2xl group-hover:scale-110 transition-transform">📅</span><span class="font-black text-sky-700">Tuần ${w.week}</span></div>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">${units.length} bài/tiết</span>
            </div>
            <p class="text-xs text-slate-500 font-bold mt-2">${done}/${units.length} đã hoàn thành</p>
            <div class="w-full h-2 bg-sky-100 rounded-full mt-2 overflow-hidden"><div class="h-full bg-sky-400 rounded-full" style="width:${pct}%"></div></div>
        </button>`;
    }).join('');
}

async function openGiaoAnWeek(semesterNumber, weekNumber) {
    stopSpeaking();
    inGiaoAnFlow = true;
    activeGiaoAnContext = { semester: Number(semesterNumber), week: Number(weekNumber), unitId: null };
    updateNavTabs('Giáo án', '📘', `Tuần ${weekNumber}`);
    switchAppView('view-giao-an-week');
    showLoadingOverlay(`Đang mở Giáo án Tuần ${weekNumber}...`);
    try {
        const data = await loadGiaoAnData();
        const week = findGiaoAnWeek_(data, semesterNumber, weekNumber);
        renderGiaoAnWeek_(week);
    } catch (err) {
        alert(`Không thể mở tuần học: ${err.message}`);
    } finally { hideLoadingOverlay(); }
}

function renderGiaoAnWeek_(week) {
    const title = document.getElementById('giao-an-week-title');
    const list = document.getElementById('giao-an-unit-list');
    if (!week || !list) return;
    if (title) title.textContent = `Tuần ${week.week}`;
    const completed = getGiaoAnCompletedSet_();
    list.innerHTML = (week.units || []).map((u, idx) => {
        const meta = GIAO_AN_LESSON_TYPE[u.lesson_type] || { label: u.lesson_type || 'Bài học', icon: '📘', cls: 'sky' };
        const span = Array.isArray(u.period_span) ? u.period_span : [];
        const periodText = span.length > 1 && span[0] !== span[span.length - 1] ? `Tiết ${span[0]}-${span[span.length - 1]}` : `Tiết ${span[0] || idx + 1}`;
        const done = completed.has(u.unit_id);
        const firstObj = (u.objectives || [])[0] || 'Học theo tiến trình giáo án.';
        return `<button onclick="openGiaoAnUnit('${u.unit_id}')" class="w-full text-left bg-white border-2 ${done ? 'border-emerald-200' : 'border-sky-100'} hover:border-sky-300 rounded-2xl p-3.5 shadow-sm transition-all group">
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-${meta.cls}-50 border border-${meta.cls}-100 flex items-center justify-center text-xl shrink-0">${meta.icon}</div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-1.5"><span class="font-black text-slate-800 text-sm md:text-base">${escapeHtml(u.title)}</span><span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200">${periodText}</span></div>
                        <div class="text-[11px] font-extrabold text-${meta.cls}-600 mt-0.5">${meta.label}</div>
                        <p class="text-xs text-slate-500 font-semibold mt-1 line-clamp-2">${escapeHtml(firstObj)}</p>
                    </div>
                </div>
                <span class="shrink-0 text-sm">${done ? '✅' : '›'}</span>
            </div>
        </button>`;
    }).join('');
}

async function openGiaoAnUnit(unitId) {
    stopSpeaking();
    inGiaoAnFlow = true;
    showLoadingOverlay('Đang mở tiết học...');
    try {
        const data = await loadGiaoAnData();
        const found = findGiaoAnUnit_(data, unitId);
        if (!found) throw new Error('Không tìm thấy bài học');
        activeGiaoAnContext = { semester: Number(found.sem.semester), week: Number(found.week.week), unitId: String(unitId) };
        updateNavTabs('Giáo án', '📘', `Tuần ${found.week.week}`, found.unit.title);
        renderGiaoAnLesson_(found.unit, found.week.week);
        switchAppView('view-giao-an-lesson');
    } catch (err) {
        alert(`Không thể mở bài học: ${err.message}`);
    } finally { hideLoadingOverlay(); }
}

function renderGiaoAnLesson_(unit, weekNumber) {
    const meta = GIAO_AN_LESSON_TYPE[unit.lesson_type] || { label: 'Bài học', icon: '📘', cls: 'sky' };
    const title = document.getElementById('giao-an-lesson-title');
    const metaEl = document.getElementById('giao-an-lesson-meta');
    const objectives = document.getElementById('giao-an-objectives');
    const sections = document.getElementById('giao-an-sections');
    const practiceBtn = document.getElementById('giao-an-extra-practice-btn');
    if (!sections) return;

    const displayTitle = unit.display_title || unit.title;
    if (title) title.textContent = displayTitle;
    if (metaEl) metaEl.innerHTML = `${meta.icon} ${meta.label} · Tuần ${weekNumber} · ${formatPeriodSpan_(unit.period_span)}`;

    // Child-facing opening: keep curriculum objectives in JSON, but do not show teacher-style wording here.
    if (objectives) {
        const intro = unit.lesson_intro || {};
        const today = Array.isArray(intro.today) && intro.today.length ? intro.today : (unit.objectives || []).slice(0, 4);
        objectives.innerHTML = today.map(x => `<li>${escapeHtml(x)}</li>`).join('');
        const objectiveBox = objectives.closest('div');
        if (objectiveBox) {
            const heading = objectiveBox.querySelector('h3, h4, p.font-black, p.font-extrabold');
            if (heading) heading.textContent = '🎯 Hôm nay con sẽ';
        }
    }

    const introHtml = renderGiaoAnIntro_(unit);
    const materialHtml = renderGiaoAnLearningMaterial_(unit);
    const flowHtml = (unit.sections || []).map((s, idx) => renderGiaoAnSection_(unit, s, idx)).join('');
    sections.innerHTML = `${introHtml}${materialHtml}${flowHtml}`;

    if (practiceBtn) {
        const canPractice = unit.extra_practice && Array.isArray(unit.extra_practice.sub_ids) && unit.extra_practice.sub_ids.length;
        practiceBtn.classList.toggle('hidden', !canPractice);
        if (canPractice) practiceBtn.textContent = `🧩 ${unit.extra_practice.label || 'Luyện thêm'}`;
    }
    updateGiaoAnCompleteButton_(unit.unit_id);
}

function renderGiaoAnIntro_(unit) {
    const intro = unit.lesson_intro || {};
    if (!intro.hook && !intro.remember) return '';
    const remember = intro.remember ? `<div class="mt-3 rounded-xl bg-amber-50 border border-amber-100 px-3 py-2 text-sm font-bold text-amber-900">${escapeHtml(intro.remember)}</div>` : '';
    return `<section class="rounded-3xl border-2 border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4 md:p-5 shadow-sm mb-4">
        <div class="flex items-start gap-3">
            <div class="text-3xl shrink-0">🐰</div>
            <div class="min-w-0">
                <p class="font-black text-slate-800 text-base md:text-lg leading-relaxed">${escapeHtml(intro.hook || 'Cùng Cô Thỏ Ngọc bắt đầu bài học nhé!')}</p>
                ${remember}
            </div>
        </div>
    </section>`;
}

function getGiaoAnLearningAudioText_(unit) {
    const m = unit && unit.learning_material ? unit.learning_material : {};
    if (m.audio_text) return String(m.audio_text);
    if (m.text) return String(m.text);
    if (Array.isArray(m.paragraphs)) return m.paragraphs.join(' ');
    if (Array.isArray(m.lines)) return m.lines.join(' ');
    if (m.model) return String(m.model);
    if (m.intro) return String(m.intro);
    if (Array.isArray(m.sentences)) return m.sentences.join(' ');
    return unit?.display_title || unit?.title || '';
}

function renderGiaoAnLearningMaterial_(unit) {
    const m = unit.learning_material || null;
    if (!m) return '';
    const kind = m.kind || 'text';
    const listenBtn = `<button onclick="speakVietnamese(getGiaoAnLearningAudioText_(window.__gaCurrentUnit || {}), 0.94)" class="px-3 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 font-extrabold text-xs">🔊 Cô đọc</button>`;
    window.__gaCurrentUnit = unit;

    let body = '';
    if (kind === 'story') {
        body = (m.paragraphs || []).map(p => `<p class="text-[15px] md:text-base leading-7 text-slate-700 font-semibold">${escapeHtml(p)}</p>`).join('');
    } else if (kind === 'poem') {
        body = `<div class="text-center space-y-1.5 py-1">${(m.lines || []).map(x => `<p class="text-[15px] md:text-base leading-7 text-slate-700 font-bold">${escapeHtml(x)}</p>`).join('')}</div>`;
    } else if (kind === 'table') {
        body = `<div class="overflow-x-auto"><table class="w-full text-sm"><tbody>${(m.rows || []).map(r => `<tr class="border-b border-sky-50"><td class="py-2 pr-3 font-black text-sky-700">${escapeHtml(r[0])}</td><td class="py-2 text-slate-700 font-semibold">${escapeHtml(r[1])}</td></tr>`).join('')}</tbody></table></div>`;
    } else if (kind === 'handwriting') {
        body = `<div class="text-center"><div class="text-7xl md:text-8xl font-black text-sky-700 leading-none">${escapeHtml(m.letter || '')}</div><div class="flex flex-wrap justify-center gap-2 mt-4">${(m.examples || []).map(x=>`<span class="px-3 py-1.5 rounded-xl bg-white border border-sky-100 font-black text-slate-700">${escapeHtml(x)}</span>`).join('')}</div>${m.application_sentence ? `<p class="mt-4 text-base font-bold text-slate-700">${escapeHtml(m.application_sentence)}</p>`:''}</div>`;
    } else if (kind === 'dictation') {
        body = `<div class="rounded-2xl bg-amber-50 border border-amber-100 p-3"><p class="text-sm font-bold text-slate-700">👂 Nghe trước, chưa cần nhìn đáp án. Khi soát bài con mới mở phần từ cần chú ý.</p><div class="flex flex-wrap gap-2 mt-3">${(m.focus_words || []).map(x=>`<button onclick="speakVietnamese('${escapeJsString_(x)}',0.9)" class="px-3 py-1.5 rounded-full bg-white border border-amber-200 text-amber-800 font-extrabold text-xs">🔊 ${escapeHtml(x)}</button>`).join('')}</div></div>`;
    } else if (kind === 'examples') {
        const cards=[];
        if (m.things?.length) cards.push(['🎒 Sự vật',m.things]);
        if (m.actions?.length) cards.push(['⚽ Hoạt động',m.actions]);
        if (m.descriptions?.length) cards.push(['🌈 Đặc điểm',m.descriptions]);
        if (m.sentences?.length) cards.push(['💬 Câu mẫu',m.sentences]);
        body = `<div class="grid md:grid-cols-2 gap-3">${cards.map(([h,arr])=>`<div class="rounded-2xl bg-white border border-sky-100 p-3"><p class="font-black text-slate-800 mb-2">${h}</p><div class="flex flex-wrap gap-2">${arr.map(x=>`<button onclick="speakVietnamese('${escapeJsString_(x)}',0.92)" class="px-2.5 py-1.5 rounded-full bg-sky-50 text-sky-800 font-bold text-xs">🔊 ${escapeHtml(x)}</button>`).join('')}</div></div>`).join('')}</div>`;
    } else if (kind === 'speaking') {
        body = `<div class="space-y-3"><p class="text-sm font-bold text-slate-700">${escapeHtml(m.scenario || '')}</p><div class="flex flex-wrap gap-2">${(m.guides || []).map(x=>`<span class="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 font-bold text-xs">${escapeHtml(x)}</span>`).join('')}</div>${m.model?`<div class="rounded-xl bg-white border border-emerald-100 p-3 text-sm font-semibold text-slate-700">🐰 Ví dụ: ${escapeHtml(m.model)}</div>`:''}</div>`;
    } else if (kind === 'writing_model') {
        body = `<div class="space-y-3"><div class="grid gap-2">${(m.prompts || []).map((x,i)=>`<div class="rounded-xl bg-white border border-amber-100 px-3 py-2 text-sm font-bold text-slate-700">${i+1}. ${escapeHtml(x)}</div>`).join('')}</div>${m.model?`<div class="rounded-xl bg-amber-50 border border-amber-100 p-3"><p class="text-xs font-black text-amber-800 mb-1">✏️ Cô viết mẫu</p><p class="text-sm font-semibold text-slate-700 leading-relaxed">${escapeHtml(m.model)}</p></div>`:''}</div>`;
    } else if (kind === 'review') {
        body = `<div class="grid gap-2">${(m.prompts || []).map((x,i)=>`<div class="rounded-xl bg-white border border-indigo-100 px-3 py-2 text-sm font-bold text-slate-700">${i+1}. ${escapeHtml(x)}</div>`).join('')}</div>`;
    } else {
        body = `<p class="text-sm font-semibold text-slate-700">${escapeHtml(m.text || m.model || '')}</p>`;
    }

    const title = escapeHtml(m.title || unit.display_title || unit.title || 'Học liệu của Cô Thỏ Ngọc');
    const showListen = ['story','poem','table','speaking','writing_model'].includes(kind);
    return `<section class="bg-white border-2 border-sky-100 rounded-3xl p-4 md:p-5 shadow-sm space-y-4 mb-4">
        <div class="flex items-center justify-between gap-3">
            <div><p class="text-[11px] font-black uppercase tracking-wide text-sky-500">📖 Học liệu Cô Thỏ Ngọc</p><h3 class="font-black text-slate-800 text-lg mt-0.5">${title}</h3></div>
            ${showListen ? listenBtn : ''}
        </div>
        ${body}
    </section>`;
}

function formatPeriodSpan_(span) {
    const arr = Array.isArray(span) ? span : [];
    if (!arr.length) return 'Tiết học';
    return arr.length > 1 && arr[0] !== arr[arr.length - 1] ? `Tiết ${arr[0]}-${arr[arr.length - 1]}` : `Tiết ${arr[0]}`;
}

function renderGiaoAnSection_(unit, section, index) {
    const icons = { warmup:'🌟', discovery:'🔎', teacher_guidance:'👩‍🏫', guided_practice:'🤝', independent_practice:'✏️', application:'🌱', summary:'💡' };
    const icon = icons[section.type] || '📘';
    const teacher = section.teacher_text ? `<div class="bg-sky-50/70 border border-sky-100 rounded-xl p-3 text-sm text-slate-700 font-semibold leading-relaxed">${escapeHtml(section.teacher_text)}</div>` : '';
    const activities = (section.activities || []).map(a => renderGiaoAnActivity_(unit, a)).join('');
    return `<section class="bg-white border border-sky-100 rounded-2xl p-3.5 md:p-4 shadow-sm space-y-3">
        <div class="flex items-center gap-2"><span class="text-xl">${icon}</span><h3 class="font-black text-slate-800 text-sm md:text-base">${index + 1}. ${escapeHtml(section.title || 'Hoạt động')}</h3></div>
        ${teacher}
        <div class="space-y-2.5">${activities}</div>
    </section>`;
}


function normalizeGiaoAnImagePath_(src) {
    const s = String(src || '');
    const m = s.match(/^assets\/giao-an\/hk\d+\/w(\d+)\/TV2_GA_HK\d+_W\d+_P([0-9_]+)_IMG(\d+)\.webp$/i);
    if (!m) return s;
    return `images/giao-an/GA_W${m[1]}_P${m[2]}_${m[3]}.webp`;
}

function renderGiaoAnActivity_(unit, a) {
    const type = a.activity_type || 'activity';
    const prompt = escapeHtml(a.prompt || '');
    const base = 'rounded-xl border p-3';
    if (type === 'tap_word') {
        const chips = (a.items || []).map(item => `<button type="button" onclick="this.classList.toggle('bg-pink-500');this.classList.toggle('text-white');this.classList.toggle('border-pink-500')" class="px-3 py-1.5 rounded-full bg-white border border-pink-200 text-pink-700 font-extrabold text-xs transition-all">${escapeHtml(item)}</button>`).join('');
        return `<div class="${base} bg-pink-50/50 border-pink-100"><p class="font-bold text-sm text-slate-700">👆 ${prompt}</p><div class="flex flex-wrap gap-2 mt-2">${chips}</div></div>`;
    }
    if (type === 'single_choice') {
        const opts = (a.options || []).map((op, idx) => `<button onclick="handleGiaoAnChoice('${unit.unit_id}','${a.activity_id}',${idx})" class="ga-choice w-full text-left px-3 py-2 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-sm font-bold">${String.fromCharCode(65+idx)}. ${escapeHtml(op)}</button>`).join('');
        return `<div id="ga-act-${safeDomId_(unit.unit_id)}-${safeDomId_(a.activity_id)}" class="${base} bg-sky-50/50 border-sky-100"><p class="font-bold text-sm text-slate-700">❓ ${prompt}</p><div class="grid gap-2 mt-2">${opts}</div><div class="ga-feedback hidden mt-2 text-xs font-extrabold"></div></div>`;
    }
    if (type === 'self_check') {
        const checks = (a.checks || []).map(x => `<label class="flex items-start gap-2 text-xs font-bold text-slate-600"><input type="checkbox" class="mt-0.5 accent-emerald-500"> <span>${escapeHtml(x)}</span></label>`).join('');
        return `<div class="${base} bg-emerald-50/50 border-emerald-100"><p class="font-bold text-sm text-slate-700">✅ ${prompt}</p><div class="grid gap-1.5 mt-2">${checks}</div></div>`;
    }
    if (type === 'listen') {
        const src = a.media?.audio || '';
        const fallback = getGiaoAnLearningAudioText_(unit) || a.prompt || '';
        return `<div class="${base} bg-purple-50/50 border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"><p class="font-bold text-sm text-slate-700">🎧 ${prompt}</p><button onclick="playGiaoAnAudio('${escapeJsString_(src)}','${escapeJsString_(fallback)}')" class="px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-xl font-extrabold text-xs shrink-0">🔊 Nghe cô đọc</button></div>`;
    }
    if (type === 'observe') {
        const src = normalizeGiaoAnImagePath_(a.media?.image || '');
        const img = src ? `<div class="mt-2 rounded-xl overflow-hidden bg-white border border-sky-100"><img src="${escapeHtml(src)}" alt="Minh họa" class="w-full max-w-[820px] mx-auto max-h-[300px] md:max-h-[500px] object-contain" onerror="this.parentElement.classList.add('hidden')"></div>` : '';
        return `<div class="${base} bg-sky-50/40 border-sky-100"><p class="font-bold text-sm text-slate-700">🖼️ ${prompt}</p>${img}</div>`;
    }
    if (type === 'summary_card') return `<div class="${base} bg-amber-50 border-amber-200"><p class="font-black text-sm text-amber-900">💡 ${prompt}</p></div>`;
    if (type === 'write_offline') return `<div class="${base} bg-amber-50/50 border-amber-100"><p class="font-bold text-sm text-slate-700">✍️ ${prompt}</p><p class="text-[11px] text-amber-700 font-bold mt-1">Con thực hành vào vở/bảng như một tiết học trên lớp nhé.</p></div>`;
    if (type === 'read_aloud') return `<div class="${base} bg-rose-50/50 border-rose-100"><p class="font-bold text-sm text-slate-700">📣 ${prompt}</p></div>`;
    if (type === 'speak') return `<div class="${base} bg-emerald-50/50 border-emerald-100"><p class="font-bold text-sm text-slate-700">🎙️ ${prompt}</p></div>`;
    if (type === 'sequence') {
        const items = (a.items || []).map((x,i) => `<span class="px-2.5 py-1 rounded-lg bg-white border border-indigo-100 text-xs font-extrabold text-indigo-700">${String(x).startsWith('IMG_') ? `Tranh ${i+1}` : escapeHtml(x)}</span>`).join('');
        return `<div class="${base} bg-indigo-50/50 border-indigo-100"><p class="font-bold text-sm text-slate-700">🔢 ${prompt}</p><div class="flex flex-wrap gap-2 mt-2">${items}</div></div>`;
    }
    if (type === 'match') {
        const groups = [...new Set((a.pairs || []).map(p => p.group))];
        const rows = (a.pairs || []).map((p,i) => `<div class="flex items-center gap-2"><span class="flex-1 text-xs font-bold text-slate-700">${escapeHtml(p.item)}</span><select data-correct="${escapeHtml(p.group)}" class="ga-match-select px-2 py-1.5 rounded-lg border border-indigo-200 bg-white text-xs font-bold"><option value="">Chọn nhóm</option>${groups.map(g=>`<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join('')}</select></div>`).join('');
        return `<div id="ga-act-${safeDomId_(unit.unit_id)}-${safeDomId_(a.activity_id)}" class="${base} bg-indigo-50/50 border-indigo-100"><p class="font-bold text-sm text-slate-700">🔗 ${prompt}</p><div class="grid gap-2 mt-2">${rows}</div><button onclick="checkGiaoAnMatch('${unit.unit_id}','${a.activity_id}')" class="mt-2 px-3 py-1.5 bg-indigo-500 text-white rounded-lg text-xs font-extrabold">Kiểm tra</button><div class="ga-feedback hidden mt-2 text-xs font-extrabold"></div></div>`;
    }
    return `<div class="${base} bg-slate-50 border-slate-200"><p class="font-bold text-sm text-slate-700">📘 ${prompt}</p></div>`;
}

function safeDomId_(s) { return String(s || '').replace(/[^a-zA-Z0-9_-]/g, '_'); }
function escapeJsString_(s) { return String(s || '').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\r?\n/g,' '); }

async function playGiaoAnAudio(src, fallbackText) {
    stopAllAudio();
    const epoch = appViewEpoch;
    const lessonStillOpen = () => epoch === appViewEpoch && isViewActive('view-giao-an-lesson');
    if (!src) {
        if (lessonStillOpen()) speakVietnamese(fallbackText || '', 0.94);
        return;
    }
    const audio = new Audio(src);
    activeStandaloneAudios.add(audio);
    const cleanup = () => activeStandaloneAudios.delete(audio);
    audio.onended = cleanup;
    audio.onerror = () => {
        cleanup();
        if (lessonStillOpen()) speakVietnamese(fallbackText || '', 0.94);
    };
    try {
        await audio.play();
    } catch (e) {
        cleanup();
        if (lessonStillOpen()) speakVietnamese(fallbackText || '', 0.94);
    }
}

async function handleGiaoAnChoice(unitId, activityId, selectedIndex) {
    const data = await loadGiaoAnData();
    const found = findGiaoAnUnit_(data, unitId);
    if (!found) return;
    const activity = (found.unit.sections || []).flatMap(s => s.activities || []).find(a => String(a.activity_id) === String(activityId));
    if (!activity) return;
    const box = document.getElementById(`ga-act-${safeDomId_(unitId)}-${safeDomId_(activityId)}`);
    if (!box) return;
    const buttons = [...box.querySelectorAll('.ga-choice')];
    buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === Number(activity.answer)) b.classList.add('bg-emerald-100','border-emerald-400','text-emerald-800');
        else if (i === Number(selectedIndex)) b.classList.add('bg-rose-100','border-rose-400','text-rose-800');
    });
    const ok = Number(selectedIndex) === Number(activity.answer);
    const fb = box.querySelector('.ga-feedback');
    if (fb) {
        fb.textContent = ok ? (activity.feedback?.correct || 'Đúng rồi!') : (activity.feedback?.retry || 'Con xem lại gợi ý rồi thử nhớ nhé.');
        fb.className = `ga-feedback mt-2 text-xs font-extrabold ${ok ? 'text-emerald-700' : 'text-rose-700'}`;
    }
}

function checkGiaoAnMatch(unitId, activityId) {
    const box = document.getElementById(`ga-act-${safeDomId_(unitId)}-${safeDomId_(activityId)}`);
    if (!box) return;
    const selects = [...box.querySelectorAll('.ga-match-select')];
    const ok = selects.length && selects.every(s => s.value && s.value === s.dataset.correct);
    const fb = box.querySelector('.ga-feedback');
    selects.forEach(s => s.classList.toggle('border-emerald-400', s.value === s.dataset.correct));
    if (fb) {
        fb.textContent = ok ? 'Đúng rồi! Các từ đã được nối đúng nhóm.' : 'Con kiểm tra lại những từ chưa đúng nhóm nhé.';
        fb.className = `ga-feedback mt-2 text-xs font-extrabold ${ok ? 'text-emerald-700' : 'text-rose-700'}`;
    }
}

function markCurrentGiaoAnComplete() {
    const unitId = activeGiaoAnContext.unitId;
    if (!unitId) return;
    const completed = getGiaoAnCompletedSet_();
    completed.add(unitId);
    saveGiaoAnCompletedSet_(completed);
    updateGiaoAnCompleteButton_(unitId);
    const el = document.getElementById('giao-an-complete-note');
    if (el) { el.textContent = 'Đã hoàn thành tiết học trên thiết bị này ✅'; el.classList.remove('hidden'); }
}

function updateGiaoAnCompleteButton_(unitId) {
    const btn = document.getElementById('giao-an-complete-btn');
    if (!btn) return;
    const done = getGiaoAnCompletedSet_().has(unitId);
    btn.textContent = done ? '✅ Đã hoàn thành tiết học' : '✓ Hoàn thành tiết học';
    btn.classList.toggle('bg-emerald-500', done);
    btn.classList.toggle('bg-sky-500', !done);
}

async function startGiaoAnExtraPractice() {
    const data = await loadGiaoAnData();
    const found = findGiaoAnUnit_(data, activeGiaoAnContext.unitId);
    if (!found || !found.unit.extra_practice) return;
    await fetchAllTopicsData();
    const subIds = found.unit.extra_practice.sub_ids || [];
    const count = Number(found.unit.extra_practice.suggested_count || 5);
    const pool = (allQuestionsFlatCache || []).filter(q => subIds.includes(q.sub_id));
    if (!pool.length) return alert('Kho luyện thêm cho bài này đang được bổ sung.');
    const qs = shuffleArray(pool).slice(0, Math.min(count, pool.length));
    activeExamContext = null;
    activeRoadmapContext = null;
    pendingTopicQuiz = null;
    practiceCycleRawPool = [...pool];
    updateNavTabs('Giáo án', '📘', `Tuần ${found.week.week}`, `${found.unit.title} · Luyện thêm`);
    startTopicQuiz(0, `${found.unit.title} - Luyện thêm`, qs, null);
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    // Dữ liệu đề thi Tiếng Việt 2 không có field "exam_category" dạng chữ — phân loại HK1/HK2/HSG
    // dựa đúng theo TIỀN TỐ của "exam_id" (12.1.x = HK1, 12.2.x = HK2, 12.3.x = HSG),
    // khớp với ma trận exam_id đã chuẩn hoá trong file dữ liệu.
    const idPrefix = examFileMap[categoryKey]?.idPrefix || '';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile('de_thi_tieng_viet_2.json');
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData.exams)) ? examData.exams : [];
        let candidates = pool.filter(e => String(e.exam_id || '').startsWith(idPrefix));
        if (!candidates.length) return alert('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const exam = candidates[Math.floor(Math.random() * candidates.length)];
        const examIndex = pool.indexOf(exam);
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || exam.name || exam.title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = {
            categoryKey,
            examIndex,
            examTitle,
            examCategory: exam.exam_category || categoryKey,
            matrixVersion: exam.matrix_version || 'TV2_V6_1',
            skillMaxScore: exam.skill_max_score || null
        };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? [...exam.questions] : [];
        if (!questions.length) return alert('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');
        questions.sort((a, b) => Number(a.question_number_in_exam || 999) - Number(b.question_number_in_exam || 999));

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, questions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            alert('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    stopSpeaking();
    inMiniGameFlow = false;
    inGiaoAnFlow = false;
    if (!hasPremiumAccess()) {
        showPremiumGate('Đấu trường đề thi', '🏆');
        return;
    }
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile('de_thi_tieng_viet_2.json'); } catch (e) {}

    const getCountForPrefix = (idPrefix) => {
        if (!examData || !examData.exams) return 3;
        return examData.exams.filter(e => String(e.exam_id || '').startsWith(idPrefix)).length || 0;
    };

    const countHK1 = getCountForPrefix(examFileMap.hocky1.idPrefix);
    const countHK2 = getCountForPrefix(examFileMap.hocky2.idPrefix);
    const countHSG = getCountForPrefix(examFileMap.hsg.idPrefix);

    let html = `
        <div class="bg-pink-50/70 p-5 rounded-3xl border-2 border-pink-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🔢</div>
                <h3 class="font-extrabold text-pink-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK1')" class="w-full py-2 bg-white text-pink-700 border border-pink-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-pink-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-purple-50/70 p-5 rounded-3xl border-2 border-purple-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">⭐</div>
                <h3 class="font-extrabold text-purple-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK2')" class="w-full py-2 bg-white text-purple-700 border border-purple-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-purple-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">🏆</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao IQ</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function ensureGiaoAnBreadcrumbNavigation_() {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');

    if (tab2 && !tab2.dataset.giaoAnBreadcrumbBound) {
        tab2.dataset.giaoAnBreadcrumbBound = '1';
        tab2.addEventListener('click', (event) => {
            if (!inGiaoAnFlow) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            openGiaoAnHub(activeGiaoAnContext?.semester || 1);
        }, true);
    }

    if (tab3 && !tab3.dataset.giaoAnBreadcrumbBound) {
        tab3.dataset.giaoAnBreadcrumbBound = '1';
        tab3.addEventListener('click', (event) => {
            if (!inGiaoAnFlow || !activeGiaoAnContext?.week) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            openGiaoAnWeek(activeGiaoAnContext.semester || 1, activeGiaoAnContext.week);
        }, true);
    }
}

function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    ensureGiaoAnBreadcrumbNavigation_();

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🔢';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
    } else {
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (inGiaoAnFlow) {
        openGiaoAnHub(activeGiaoAnContext.semester || 1);
    } else if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        updateNavTabs(pendingTopicQuiz.topicName, TOPICS_CONFIG.find(t => t.id === pendingTopicQuiz.topicNum)?.icon, null);
        switchAppView('view-lecture');
    } else if (inMiniGameFlow) {
        openMiniGameHub();
    }
}

function switchAppView(viewId) {
    appViewEpoch++;
    stopAllAudio();
    if (viewId !== 'view-game-play') activeMiniGameId = null;
    ['view-dashboard-grid', 'view-giao-an-hub', 'view-giao-an-week', 'view-giao-an-lesson', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-minigame-hub', 'view-game-play', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inMiniGameFlow = false;
    inGiaoAnFlow = false;
    updateNavTabs(null, null, null);
    switchAppView('view-dashboard-grid');
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

function updateMaHSPreview() {
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const stt = document.getElementById('reg-stt').value.trim();
    document.getElementById('mahs-preview').textContent = (lop && stt) ? `${lop}-${stt.padStart(2, '0')}` : '--';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

function savePersistentSession_() {
    if (!currentUser || currentUser.isGuest || !currentUser.token) return;
    const student = { ...currentUser };
    delete student.isGuest;
    try {
        localStorage.setItem(PERSISTENT_SESSION_KEY, JSON.stringify({
            token: currentUser.token,
            maHS: currentUser.maHS,
            student
        }));
    } catch (e) {
        console.warn('Không thể lưu phiên đăng nhập:', e);
    }
}

function clearPersistentSession_() {
    try { localStorage.removeItem(PERSISTENT_SESSION_KEY); } catch (e) {}
}

function readPersistentSession_() {
    try {
        const raw = localStorage.getItem(PERSISTENT_SESSION_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || !data.token || !data.maHS) return null;
        return data;
    } catch (e) {
        clearPersistentSession_();
        return null;
    }
}

async function doLogin() {
    hideAuthError();
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 6 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
            showAuthError(errMsg);
            alert(errMsg);
            return;
        }
        currentUser = { ...result.student, isGuest: false, token: result.token };
        currentSessionPin = maPin;
        savePersistentSession_();
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 6 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            alert(result.error);
            return;
        }
        if (result.wasAutoAdjusted) {
            alert(`Mã ID ${result.baseMaHS} đã có người sử dụng. Hệ thống đã tự tạo mã ID mới cho bé là: ${result.student.maHS}\n\nBé hãy ghi nhớ mã ID này để đăng nhập nhé!`);
        } else {
            alert(`Đăng ký thành công! Tài khoản ${result.student.maHS} đã được tạo ở hạng Regular và có thể đăng nhập ngay.`);
        }
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    const saved = readPersistentSession_();
    if (!saved) return false;

    // Khôi phục ngay từ dữ liệu đã lưu để tránh cảm giác bị "văng" về Khách khi trang/PWA reload.
    if (saved.student) {
        currentUser = { ...saved.student, maHS: saved.maHS, isGuest: false, token: saved.token };
        currentSessionPin = '';
        enterDashboard(true);
    }

    // Sau đó xác thực lại với máy chủ và lấy thông tin tài khoản mới nhất.
    try {
        const result = await callAppsScript('restoreSession', { token: saved.token });
        if (!result || !result.ok) {
            clearPersistentSession_();
            currentUser = { name: 'Khách (Guest)', isGuest: true, tuanHienTai: 1, hoTen: 'Bé Khách', lop: '', maHS: 'KHACH', vaiTro: 'guest', loaiTaiKhoan: 'guest' };
            currentSessionPin = '';
            enterDashboard(true);
            return false;
        }
        currentUser = { ...result.student, isGuest: false, token: result.token || saved.token };
        currentSessionPin = '';
        savePersistentSession_();
        enterDashboard(true);
        return true;
    } catch (err) {
        // Mất mạng tạm thời không làm bé bị đăng xuất. Phiên đã lưu vẫn được giữ lại.
        console.warn('Chưa xác thực lại được phiên đăng nhập; tiếp tục dùng phiên đã lưu.', err);
        return !!saved.student;
    }
}

function showAuthScreen(tab = 'login') {
    stopSpeaking();
    document.getElementById('screen-dashboard')?.classList.add('hidden');
    document.getElementById('screen-login')?.classList.remove('hidden');
    switchAuthTab(tab);
    setTimeout(() => {
        if (tab === 'login') document.getElementById('login-mahs')?.focus();
        else document.getElementById('reg-hoten')?.focus();
    }, 50);
}

function logout() {
    const tokenToRevoke = currentUser?.token || '';
    clearPersistentSession_();
    currentSessionPin = '';
    currentUser = { name: 'Khách (Guest)', isGuest: true, tuanHienTai: 1, hoTen: 'Bé Khách', lop: '', maHS: 'KHACH', vaiTro: 'guest', loaiTaiKhoan: 'guest' };
    const mahsInput = document.getElementById('login-mahs');
    const mapinInput = document.getElementById('login-mapin');
    if (mahsInput) mahsInput.value = '';
    if (mapinInput) mapinInput.value = '';
    hideAuthError();
    enterDashboard(true);
    if (tokenToRevoke) callAppsScript('logout', { token: tokenToRevoke }).catch(() => {});
}

function handleGuestMode() {
    currentSessionPin = '';
    currentUser = { name: 'Khách (Guest)', isGuest: true, tuanHienTai: 1, hoTen: 'Bé Khách', lop: '', maHS: 'KHACH', vaiTro: 'guest', loaiTaiKhoan: 'guest' };
    enterDashboard(true);
}

function enterDashboard(isSilent = false) {
    document.getElementById('screen-login')?.classList.add('hidden');
    document.getElementById('screen-dashboard')?.classList.remove('hidden');
    updateUserInfoBox();
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();

    if (!isSilent && currentUser && !currentUser.isGuest) {
        setTimeout(() => {
            const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
            const msg = template.replace('{name}', currentUser.hoTen);
            speakVietnamese(msg, 0.96);
        }, 450);
    }
}

function hasPremiumAccess() {
    if (!currentUser || currentUser.isGuest) return false;
    if (String(currentUser.vaiTro || '').toLowerCase() === 'admin') return true;
    const tier = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
    return tier === 'trial' || tier === 'vip';
}

function getTierLabel_() {
    if (!currentUser || currentUser.isGuest) return 'Khách';
    if (String(currentUser.vaiTro || '').toLowerCase() === 'admin') return 'Admin';
    const tier = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
    if (tier === 'vip') return 'VIP';
    if (tier === 'trial') return 'Trial';
    return 'Regular';
}


function showAccessGate(options = {}) {
    const modal = document.getElementById('modal-access-gate');
    if (!modal) return;

    const title = options.title || 'Tính năng dành cho tài khoản';
    const message = options.message || 'Con vui lòng đăng nhập để sử dụng tính năng này nhé!';
    const icon = options.icon || '🐰';
    const showAuth = options.showAuth !== false;
    const note = options.note || '🌸 Các chuyên đề cơ bản vẫn học miễn phí bình thường nhé!';

    const titleEl = document.getElementById('access-gate-title');
    const msgEl = document.getElementById('access-gate-message');
    const iconEl = document.getElementById('access-gate-icon');
    const noteEl = document.getElementById('access-gate-note');
    const authActions = document.getElementById('access-gate-auth-actions');

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.innerHTML = message;
    if (iconEl) iconEl.textContent = icon;
    if (noteEl) noteEl.textContent = note;
    if (authActions) authActions.classList.toggle('hidden', !showAuth);

    modal.classList.remove('hidden');
}

function closeAccessGate() {
    document.getElementById('modal-access-gate')?.classList.add('hidden');
}

function openAuthFromAccessGate(tab) {
    closeAccessGate();
    showAuthScreen(tab || 'login');
}

function showLoginRequiredGate(featureName = 'Tính năng này', icon = '🐰') {
    showAccessGate({
        title: featureName,
        icon,
        showAuth: true,
        message: `${escapeHtml(featureName)} dành cho học sinh đã đăng nhập.<br>Con có thể <strong>Sign in</strong> nếu đã có tài khoản hoặc <strong>Sign up</strong> để đăng ký nhé!`
    });
}

function showPremiumGate(featureName = 'Nội dung Premium', icon = '🔒') {
    const isGuest = !currentUser || currentUser.isGuest;
    const safeFeatureName = escapeHtml(featureName);
    showAccessGate({
        title: featureName,
        icon,
        showAuth: isGuest,
        message: isGuest
            ? `Đây là <strong>${safeFeatureName}</strong> dành cho tài khoản <strong>Trial hoặc VIP</strong>.<br>Con có thể <strong>Sign in</strong> nếu đã có tài khoản hoặc <strong>Sign up</strong> để đăng ký nhé!<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`
            : `Đây là <strong>${safeFeatureName}</strong> dành cho tài khoản <strong>Trial hoặc VIP</strong>.<br>Tài khoản hiện tại của con đang là <strong>Regular</strong>.<br>Các chuyên đề cơ bản vẫn học miễn phí bình thường.`
    });
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;

    // Khóa các nội dung Premium chỉ hiện với Khách / Regular;
    // ẩn khi Admin / Trial / VIP đã có quyền Premium.
    const giaoAnLock = document.getElementById('giao-an-lock-icon');
    if (giaoAnLock) giaoAnLock.classList.toggle('hidden', hasPremiumAccess());
    const roadmapLock = document.getElementById('roadmap-lock-icon');
    if (roadmapLock) roadmapLock.classList.toggle('hidden', hasPremiumAccess());
    const minigameLock = document.getElementById('minigame-lock-icon');
    if (minigameLock) minigameLock.classList.toggle('hidden', hasPremiumAccess());

    if (!currentUser || currentUser.isGuest) {
        box.innerHTML = `
            <div class="flex items-center gap-1.5">
                <span class="text-amber-600 font-extrabold text-xs px-1.5">Khách</span>
                <button onclick="showAuthScreen('login')" class="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-extrabold text-xs pastel-btn whitespace-nowrap">Sign in/up</button>
            </div>`;
        return;
    }

    const isAdmin = String(currentUser.vaiTro || '').toLowerCase() === 'admin';
    const tier = getTierLabel_();
    const tierClass = isAdmin ? 'text-amber-600' : (tier === 'VIP' ? 'text-amber-600' : (tier === 'Trial' ? 'text-purple-600' : 'text-slate-500'));
    box.innerHTML = `
        <div class="flex items-center space-x-2">
            <div class="text-right">
                <div class="${isAdmin ? 'text-amber-600' : 'text-pink-600'} font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen)}</div>
                <div class="${tierClass} font-semibold text-[10px]">${escapeHtml(tier)} · ID ${escapeHtml(currentUser.maHS)}</div>
            </div>
            ${isAdmin ? '<button onclick="openAdminAccounts()" title="Quản lý tài khoản" class="h-9 px-3 flex items-center justify-center bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl border border-amber-200 text-xs font-extrabold pastel-btn"><i class="fa-solid fa-users-gear mr-1"></i>Quản lý</button>' : ''}
            <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-rose-100 hover:bg-rose-200 text-rose-500 rounded-xl border border-rose-200 text-xs transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(244,63,94,0.55)]"><i class="fa-solid fa-right-from-bracket"></i></button>
        </div>`;
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickProgressOrExam(type) {
    // Bản đồ tuần là nội dung Premium giống TA3: chỉ Admin / Trial / VIP được vào.
    // Khách và Regular đều dùng chung popup Premium để thông báo nhất quán.
    if (type === 'progress') {
        if (!hasPremiumAccess()) {
            showPremiumGate('Bản đồ tuần', '🗺️');
            return;
        }
        openRoadmap();
        return;
    }

    if (!currentUser || currentUser.isGuest) {
        showLoginRequiredGate('Tính năng này', '🐰');
        return;
    }
    if (type === 'exam') openExamHub();
}

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    stopSpeaking();
    inMiniGameFlow = false;
    inGiaoAnFlow = false;
    if (Number(topicNum) === 11 && !hasPremiumAccess()) {
        showPremiumGate('11. Ôn tập tổng hợp', '🎮');
        return;
    }
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🐰', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        updateNavTabs(null, null, null);
        alert(`Không thể tải chủ đề: ${err.message}`);
    });
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl';
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || topicName;
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '';

    const groups = [], groupMap = {}, groupLabels = {};
    topicObj.questions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); groupLabels[k] = q.sub_topic_label || k; }
        groupMap[k].push(q);
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(groupLabels[subName]);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    setSubtopicGridColumns(groups.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;
    const subLabel = idx !== null ? groups[idx] : null;
    const pool = idx !== null ? groupMap[subLabel] : questions;
    const displayLabel = subLabel ? beautifySubtopicName(groupLabels[subLabel]) : null;
    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;

    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    stopSpeaking();
    inMiniGameFlow = false;
    inGiaoAnFlow = false;
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= TOTAL_ROADMAP_WEEKS; w++) {
        const item = roadmapConfig[w];
        const coord = getRoadmapCoord(w);
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#ec4899" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f43f5e" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="16" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 40}" text-anchor="middle" font-size="12" font-weight="900" fill="#ec4899">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 38}" text-anchor="middle" font-size="14" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <circle cx="${coord.x}" cy="${coord.y}" r="40" fill="#ffffff" stroke="${strokeColor}" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="34" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 4}" text-anchor="middle" font-size="24">${item.icon || '🔢'}</text>
                <text x="${coord.x}" y="${coord.y + 18}" text-anchor="middle" font-size="13" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const pathD = buildRoadmapPathD(TOTAL_ROADMAP_WEEKS);
    const svgHtml = `
        <svg viewBox="0 0 900 460" class="w-full max-h-[74vh] select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" fill="none" stroke="#fbcfe8" stroke-width="12" stroke-dasharray="14,14" stroke-linecap="round"/>
            <path d="${pathD}" fill="none" stroke="#f472b6" stroke-width="4" stroke-dasharray="14,14" stroke-linecap="round"/>
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return alert(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: (config.focusSubIds && config.focusSubIds[0]) || `W${weekNum}`, chuDe: config.name };
    pendingTopicQuiz = null; activeExamContext = null;
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    showLoadingOverlay(`Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchAllTopicsData();
        hideLoadingOverlay();

        const weekQuestions = getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return alert('Tuần này đang chuẩn bị thêm câu hỏi, bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if (q.image_url && !activeExamContext) {
        mediaHtml = `<img src="${q.image_url}" alt="minh họa" class="w-14 h-14 md:w-16 md:h-16 object-contain mb-1 floating" onerror="this.remove()">`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-pink-50/70 border-2 border-pink-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-pink-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-pink-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-pink-200 bg-pink-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-rose-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-pink-50 border border-pink-200 rounded-full px-3.5 py-1.5">
                    <span>🐰</span>
                    <span class="text-xs md:text-sm font-extrabold text-rose-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}</span>
                    </div>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-pink-50/40 hover:bg-pink-100/70 border-2 border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-pink-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}</span>
                    <span class="option-icon text-pink-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-pink-50/30 border-2 border-pink-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-pink-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-pink-50/50 border border-pink-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => { if (isViewActive('view-quiz')) speakVietnamese(`${q.answer}`); }, 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            if (b.getAttribute('data-opt') === q.answer) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
        });

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
        setTimeout(() => { if (isViewActive('view-quiz')) speakVietnamese(`${q.answer}`); }, 180);
    } else {
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            wrongAttemptsByQ[currentQIndex].push(selectedOpt);
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-pink-50/40', 'border-pink-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });

        playAudio('wrong');
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            alert(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô giáo Thỏ Ngọc sẽ xáo trộn ngẫu nhiên để con bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    if (confirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`)) {
        showResultScreen();
    }
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Tiến trình tuần: điểm tính riêng theo công thức 10/tổng số câu (không dùng điểm từng câu để tránh lệch)
    const displayScore = activeRoadmapContext
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại tiến trình tuần' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThiHK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let rawTag = String(q.skill_tag || 'TV_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const hasData = isRoadmap ? data.total > 0 : data.maxScore > 0;
        if (!hasData) {
            html += `
                <div class="bg-slate-50/80 border border-slate-200 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                    <div class="flex items-center justify-between gap-2">
                        <span class="font-black text-slate-700 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-500 border border-slate-200">Chưa đủ dữ liệu</span>
                    </div>
                    <div class="text-xs font-bold text-slate-400">Bài này chưa có câu hỏi đo nhóm năng lực này.</div>
                    <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden"></div>
                </div>`;
            return;
        }

        const pct = isRoadmap
            ? Math.round((data.correct / data.total) * 100)
            : Math.round((data.earnedScore / data.maxScore) * 100);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-rose-50 text-rose-700 border border-rose-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-pink-400 to-rose-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-pink-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-pink-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-pink-50/40 border border-pink-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-pink-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-rose-50/40 border border-rose-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-rose-100 text-rose-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-rose-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    
    const skillScores = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        let tag = m ? 'C' + m[1] : 'C1';

        if (item.isCorrect && skillScores[tag] !== undefined) {
            skillScores[tag] += (item.diem || 0.5);
        }
    });

    const payload = {
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThiHK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        diemC1: skillScores.C1.toFixed(1),
        diemC2: skillScores.C2.toFixed(1),
        diemC3: skillScores.C3.toFixed(1),
        diemC4: skillScores.C4.toFixed(1),
        diemC5: skillScores.C5.toFixed(1),
        diemC6: skillScores.C6.toFixed(1),
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột khai báo trong SKILL_TAXONOMY (C1_NhanBiet, C2_PhepTinh...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillScores[k].toFixed(1);
    });
    try {
        const res = await callAppsScript('saveExamResult', payload);
        if (!res || res.ok !== true) {
            console.error('[Lưu điểm đề thi THẤT BẠI]', res?.error || res);
        }
    } catch (e) {
        console.error('[Lưu điểm đề thi LỖI KẾT NỐI]', e);
    }
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (TV_C1-C6) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const skillTotal = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    quizAnsweredLog.forEach(item => {
        let rawTag = String(item.skill_tag || 'TV_C1').toUpperCase();
        let m = rawTag.match(/C([1-6])/);
        const tag = m ? 'C' + m[1] : 'C1';
        if (skillTotal[tag] === undefined) return;
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        token: currentUser.token, // bắt buộc để server xác nhận đúng chủ tài khoản mới cho ghi điểm
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        const res = await callAppsScript('saveWeeklyProgress', payload);
        if (!res || res.ok !== true) {
            console.error('[Lưu tiến trình tuần THẤT BẠI]', res?.error || res);
        }
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= TOTAL_ROADMAP_WEEKS) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {
        console.error('[Lưu tiến trình tuần LỖI KẾT NỐI]', e);
    }
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        showLoginRequiredGate('Lịch sử tiến trình', '📊');
        return;
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = formatDDMMYY_(currentUser.ngaySinh) || '05-09-2019';
    document.getElementById('hist-report-date').textContent = formatDDMMYY_(new Date());

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình 24 tuần học tập",
        LichSuBaiThiHK1: "Báo cáo kết quả — Học kỳ 1",
        LichSuBaiThiHK2: "Báo cáo kết quả — Học kỳ 2",
        LichSuBaiThiHSG: "Báo cáo kết quả — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName, token: currentUser.token });
        hideLoadingOverlay();
        if (res && res.ok === false) {
            // Token hết hạn/không hợp lệ hoặc không đúng chủ - đóng modal, báo rõ thay vì âm thầm
            // hiện báo cáo trống (dễ gây hiểu lầm là bé chưa học gì).
            closeHistoryModal();
            alert(res.error || 'Không thể tải lịch sử - bé đăng nhập lại nhé!');
            return;
        }
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

// Định dạng DD-MM-YY, bỏ hoàn toàn phần giờ/phút/giây (dùng cho Ngày sinh & Ngày báo cáo trên báo cáo in PDF).
function formatDDMMYY_(value) {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(-2);
    return `${dd}-${mm}-${yy}`;
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(254, 226, 226, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
    // Mặc định LUÔN là 0 cho mọi trường hợp — KHÔNG dùng số liệu mẫu/giả định nào cả (đúng quy tắc chống lỗi
    // Mục 8.2: nhóm nào bé chưa làm câu nào thì phải coi là "chưa đủ dữ liệu", không tự vẽ % bất kỳ).
    const skillAverages = { C1: 0, C2: 0, C3: 0, C4: 0, C5: 0, C6: 0 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        // Đề thi: % = tổng điểm đạt được / tổng điểm TỐI ĐA CÓ THỂ của nhóm đó qua các đề đã làm
        // (mỗi nhóm năng lực có mẫu số khác nhau theo đúng Ma trận đề thi V6.1 — xem EXAM_SKILL_MAX_SCORE_BY_SHEET).
        skillKeys.forEach((k) => {
            const colName = SKILL_TAXONOMY[k].sheetCol;
            let sumEarned = 0, examCount = 0;
            rows.forEach(r => {
                const val = r[`diem${k}`] ?? r[colName] ?? r[`diem_${k.toLowerCase()}`] ?? r[k];
                if (val !== undefined && val !== null && val !== '--' && val !== '') {
                    sumEarned += Number(val) || 0;
                    examCount++;
                }
            });
            const maxPerExam = getExamSkillMaxScoreForSheet(sheetName, k);
            if (examCount > 0 && maxPerExam > 0) {
                const maxPossible = examCount * maxPerExam;
                skillAverages[k] = Math.min(100, Math.round((sumEarned / maxPossible) * 100));
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    const palette = ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'];
    const barColors = skillKeys.map((k, i) => touchedSkills.includes(k) ? palette[i] : '#cbd5e1'); // xám nếu chưa đủ dữ liệu

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: barColors,
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(251, 207, 232, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => touchedSkills.includes(skillKeys[ctx.dataIndex]) ? ` Độ thành thạo: ${ctx.raw}%` : ' Chưa đủ dữ liệu'
                    }
                }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = touchedSkills.includes(skillKeys[i]) ? '#1e293b' : '#94a3b8';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    const label = touchedSkills.includes(skillKeys[i]) ? `${val}%` : 'Chưa đủ dữ liệu';
                    ctx.fillText(label, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-pink-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
                <span class="text-rose-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-purple-200">
            <span class="text-purple-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại các phép tính, đặt câu hỏi gợi mở và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích môn Tiếng Việt nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

    const getScoreVal = (r, num, colName) => {
        const val = r[`diemC${num}`] ?? r[colName] ?? r[`diem_c${num}`] ?? r[`C${num}`];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, i + 1, SKILL_TAXONOMY[k].sheetCol)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-pink-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-rose-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-rose-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ADMIN - QUAN LY TAI KHOAN
// ==========================================
function formatAccountDate_(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString('vi-VN');
}

function adminAuthPayload_() {
    return { adminMaHS: currentUser?.maHS || '', adminPin: currentSessionPin || '', token: currentUser?.token || '' };
}

async function openAdminAccounts() {
    if (!currentUser || String(currentUser.vaiTro || '').toLowerCase() !== 'admin') return;
    document.getElementById('modal-admin-accounts')?.classList.remove('hidden');
    await loadAdminAccounts();
}

function closeAdminAccounts() {
    document.getElementById('modal-admin-accounts')?.classList.add('hidden');
}

async function loadAdminAccounts() {
    const body = document.getElementById('admin-accounts-body');
    if (body) body.innerHTML = '<tr><td colspan="8" class="p-6 text-center text-slate-400 font-bold"><i class="fa-solid fa-spinner fa-spin mr-2"></i>Đang tải...</td></tr>';
    try {
        const res = await callAppsScript('getAccounts', adminAuthPayload_());
        if (!res?.ok) throw new Error(res?.error || 'Không tải được danh sách tài khoản');
        adminAccountsCache = Array.isArray(res.accounts) ? res.accounts : [];
        renderAdminAccountsTable();
    } catch (err) {
        if (body) body.innerHTML = `<tr><td colspan="8" class="p-6 text-center text-rose-500 font-bold">${escapeHtml(err.message)}</td></tr>`;
    }
}

function renderAdminAccountsTable() {
    const body = document.getElementById('admin-accounts-body');
    if (!body) return;
    const q = (document.getElementById('admin-account-search')?.value || '').trim().toLowerCase();
    // Giao diện quản lý tập trung vào tài khoản học sinh; admin vẫn được giữ nguyên trong dữ liệu/backend.
    const studentAccounts = adminAccountsCache.filter(a => String(a.vaiTro || 'student').toLowerCase() !== 'admin');
    const rows = studentAccounts.filter(a => !q || [a.maHS, a.hoTen, a.lop, a.loaiTaiKhoan].some(v => String(v || '').toLowerCase().includes(q)));
    const countEl = document.getElementById('admin-account-count');
    if (countEl) countEl.textContent = `${studentAccounts.length} tài khoản`;
    if (!rows.length) {
        body.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-slate-400 font-bold">Không có tài khoản phù hợp</td></tr>';
        return;
    }
    body.innerHTML = rows.map(a => {
        const tier = String(a.loaiTaiKhoan || 'regular').toLowerCase();
        const tierStyle = tier === 'vip'
            ? 'border-purple-300 text-purple-700 bg-purple-50'
            : (tier === 'trial' ? 'border-amber-300 text-amber-700 bg-amber-50' : 'border-slate-300 text-slate-600 bg-white');
        return `<tr class="hover:bg-fuchsia-50/30 transition-colors">
            <td class="p-3 font-black text-sm text-slate-700">${escapeHtml(a.maHS || '')}</td>
            <td class="p-3 font-bold text-sm text-slate-700">${escapeHtml(a.hoTen || '')}</td>
            <td class="p-3 text-center font-bold text-sm text-slate-600">${escapeHtml(a.lop || '--')}</td>
            <td class="p-3 text-center">
                <select onchange="adminSetTier('${String(a.maHS).replace(/'/g, "\\'")}', this.value)" class="min-w-[96px] px-3 py-1.5 rounded-xl border font-extrabold text-sm outline-none ${tierStyle}">
                    <option value="regular" ${tier === 'regular' ? 'selected' : ''}>Regular</option>
                    <option value="trial" ${tier === 'trial' ? 'selected' : ''}>Trial</option>
                    <option value="vip" ${tier === 'vip' ? 'selected' : ''}>VIP</option>
                </select>
            </td>
            <td class="p-3 text-center font-bold text-sm text-slate-500">${formatAccountDate_(a.hanDungThu)}</td>
            <td class="p-3 text-center font-black text-sm text-purple-600">${formatAccountDate_(a.hanVIP)}</td>
        </tr>`;
    }).join('');
}

async function adminSetTier(targetMaHS, loaiTaiKhoan) {
    try {
        const res = await callAppsScript('setAccountTier', { ...adminAuthPayload_(), targetMaHS, loaiTaiKhoan });
        if (!res?.ok) throw new Error(res?.error || 'Không cập nhật được hạng tài khoản');
        await loadAdminAccounts();
    } catch (err) {
        alert(err.message);
        await loadAdminAccounts();
    }
}

async function adminResetPin(targetMaHS) {
    const newPin = prompt(`Nhập PIN mới 6 chữ số cho tài khoản ${targetMaHS}:`);
    if (newPin === null) return;
    if (!/^\d{6}$/.test(newPin)) return alert('PIN mới phải gồm đúng 6 chữ số!');
    try {
        const res = await callAppsScript('resetAccountPin', { ...adminAuthPayload_(), targetMaHS, newPin });
        if (!res?.ok) throw new Error(res?.error || 'Không đặt lại được PIN');
        alert(`Đã đặt lại PIN cho ${targetMaHS}.`);
        if (targetMaHS.toLowerCase() === String(currentUser.maHS || '').toLowerCase()) currentSessionPin = newPin;
    } catch (err) {
        alert(err.message);
    }
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}


function stopAllAudio() {
    stopSpeaking();

    // Dung ngay cac file audio HTML5 dang phat (vi du audio Giao an).
    try {
        activeStandaloneAudios.forEach(audio => {
            try {
                audio.pause();
                audio.currentTime = 0;
                audio.onended = null;
                audio.onerror = null;
            } catch (e) {}
        });
        activeStandaloneAudios.clear();
    } catch (e) {}

    // Dung ngay cac am thanh hieu ung WebAudio dang phat.
    try {
        if (audioCtx) {
            const ctx = audioCtx;
            audioCtx = null;
            if (ctx.state !== 'closed') ctx.close().catch(() => {});
        }
    } catch (e) {
        audioCtx = null;
    }
}

function isViewActive(viewId) {
    const el = document.getElementById(viewId);
    return !!el && !el.classList.contains('hidden');
}

function isMiniGameActive(gameId) {
    return !!gameId && activeMiniGameId === gameId && inMiniGameFlow && isViewActive('view-game-play');
}

function speakMiniGameTextSafe(text, rate = 0.94, gameId = '') {
    if (!isMiniGameActive(gameId)) return;
    speakVietnamese(text, rate);
}

window.isMiniGameActive = isMiniGameActive;
window.speakMiniGameTextSafe = speakMiniGameTextSafe;

function speakPedagogicalEvaluation() {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;
    const text = box.innerText || box.textContent || '';
    if (!text.trim()) return;
    speakVietnamese(text);
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;
    const textToRead = q.audio_text || q.reading_passage || q.question_text;
    speakVietnamese(textToRead, 0.96);
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            const ctx = audioCtx;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    if (!ctx || audioCtx !== ctx || ctx.state === 'closed') return;
                    const o = ctx.createOscillator(), g = ctx.createGain();
                    o.connect(g); g.connect(ctx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, ctx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    o.start(); o.stop(ctx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-pink-400 border-pink-200 hover:bg-pink-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-pink-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('tvl2_autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-pink-50', 'text-pink-600', 'border-pink-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-pink-50', 'text-pink-600', 'border-pink-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}


// ==========================================
// TRUNG TÂM MINI GAME - TIẾNG VIỆT 2
// Kiến trúc giống TA2: Hub -> lazy-load file JS riêng -> game tự quản lý state.
// ==========================================
const MINIGAME_TOPIC_PALETTES = SUBTOPIC_PALETTES;

function miniGameHash(text = '') {
    return [...String(text)].reduce((acc, ch) => ((acc * 31) + ch.charCodeAt(0)) >>> 0, 7);
}

function getMiniGamePaletteOrder(seed = 'tv2-minigame') {
    const order = MINIGAME_TOPIC_PALETTES.map((_, i) => i);
    let state = miniGameHash(seed) || 1;
    for (let i = order.length - 1; i > 0; i--) {
        state = (state * 1664525 + 1013904223) >>> 0;
        const j = state % (i + 1);
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order.map(i => MINIGAME_TOPIC_PALETTES[i]);
}

function ensureMiniGameThemeStyles() {
    if (document.getElementById('tv2-minigame-theme-v1')) return;
    const style = document.createElement('style');
    style.id = 'tv2-minigame-theme-v1';
    style.textContent = `
        #view-game-play > div { max-width: 56rem !important; }
        #game-play-title { font-size: 1.2rem !important; }
        #game-play-container { font-size: 16px; }
        @media (max-width: 640px) {
            #view-game-play > div { max-width: 100% !important; }
            #game-play-title { font-size: 1.05rem !important; }
        }
    `;
    document.head.appendChild(style);
}


// Loa nghe lai cau hoi dung chung cho TOAN BO mini game.
// Quy uoc khuyen nghi cho file game: gan data-minigame-question vao phan tu chua cau hoi
// hoac goi setMiniGameQuestionAudio(text) moi khi doi cau.
let miniGameReplayText = '';
let miniGameReplayRate = 0.94;

function setMiniGameQuestionAudio(text, rate = 0.94) {
    miniGameReplayText = String(text || '').replace(/\s+/g, ' ').trim();
    miniGameReplayRate = Number.isFinite(Number(rate)) ? Number(rate) : 0.94;
}

function detectMiniGameQuestionText() {
    const box = document.getElementById('game-play-container');
    if (!box) return '';

    const directSelectors = [
        '[data-minigame-question]',
        '#game-question', '#game-current-question', '#sk-question', '#fa-question',
        '.game-question', '.mg-question', '.question-text'
    ];
    for (const selector of directSelectors) {
        const el = box.querySelector(selector);
        const text = String(el?.innerText || el?.textContent || '').replace(/\s+/g, ' ').trim();
        if (text) return text;
    }

    // Fallback cho cac game cu chua gan marker: tim dong co dang cau hoi/nhiem vu.
    const candidates = [...box.querySelectorAll('div,p,h2,h3,h4,span')]
        .map(el => String(el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim())
        .filter(text => text.length >= 12 && text.length <= 260)
        .filter(text => !/^(⭐|🔥|🏆|Lượt\s*\d+|Chính xác|Chưa đúng|Điểm|Sắp ra mắt)/i.test(text));

    const questionLike = candidates.find(text =>
        /[?？]$/.test(text) ||
        /^(Vì sao|Tại sao|Nếu |Câu nào|Từ nào|Tiếng nào|Chọn |Tìm |Điền |Ghép |Sắp xếp |Bé |Em |Hãy )/i.test(text)
    );
    return questionLike || candidates[0] || '';
}

function speakMiniGameQuestion() {
    const liveText = detectMiniGameQuestionText();
    const text = liveText || miniGameReplayText;
    if (!text) return;
    setMiniGameQuestionAudio(text, miniGameReplayRate);
    if (typeof speakVietnamese === 'function') speakVietnamese(text, miniGameReplayRate);
}

function ensureMiniGameReplayButton() {
    const title = document.getElementById('game-play-title');
    const header = title?.parentElement;
    if (!header || document.getElementById('btn-minigame-replay')) return;

    const backBtn = header.querySelector('button');
    const btn = document.createElement('button');
    btn.id = 'btn-minigame-replay';
    btn.type = 'button';
    btn.title = 'Nghe lại câu hỏi';
    btn.setAttribute('aria-label', 'Nghe lại câu hỏi');
    btn.onclick = speakMiniGameQuestion;
    btn.className = 'w-9 h-9 md:w-10 md:h-10 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600 border-2 border-sky-200 shadow-sm pastel-btn shrink-0 flex items-center justify-center';
    btn.innerHTML = '<i class="fa-solid fa-volume-high text-sm md:text-base"></i>';

    if (backBtn) header.insertBefore(btn, backBtn);
    else header.appendChild(btn);
}

window.setMiniGameQuestionAudio = setMiniGameQuestionAudio;
window.speakMiniGameQuestion = speakMiniGameQuestion;

const MINIGAME_LIST = [
    { id: 'family-activity', title: '1. Hoạt động gia đình', desc: 'Quan sát tranh - đọc hiểu - suy luận tình huống gia đình', icon: '🏡', ready: true },
    { id: 'why-family', title: '2. Vì sao thế nhỉ?', desc: 'Suy luận nguyên nhân - kết quả - nếu thì - xử lí logic', icon: '🤔', ready: true },
    { id: 'use-it-right', title: '3. Dùng sao cho đúng?', desc: 'Công năng - chất liệu - cách dùng - an toàn với đồ vật quanh nhà', icon: '🧰', ready: true },
    { id: 'say-it-nicely', title: '4. Nói sao cho hay?', desc: 'Chào hỏi - cảm ơn - xin lỗi - nhờ giúp - đáp lời thật phù hợp', icon: '🗣️', ready: true },
    { id: 'traffic-safe', title: '5. Đi sao cho đúng?', desc: 'Chọn hành động đúng luật và an toàn trong từng tình huống giao thông', icon: '🚦', ready: true },
    { id: 'traffic-why', title: '6. Vì sao phải thế?', desc: 'Tìm nguyên nhân - hậu quả phía sau các quy tắc an toàn giao thông', icon: '🧠', ready: true },
    { id: 'traffic-vehicle', title: '7. Chọn phương tiện nào?', desc: 'Cân nhắc quãng đường - số người - mục đích để chọn cách di chuyển phù hợp', icon: '🚌', ready: true },
    { id: 'traffic-handle', title: '8. Xử lý thế nào?', desc: 'Phản xạ với tình huống bất ngờ: nếu - thì - việc nào nên làm trước', icon: '⚡', ready: true },
    { id: 'mall-where', title: '9. Đi đâu – mua gì?', desc: 'Nhận nhiệm vụ - đọc không gian - tìm đúng khu vực trong trung tâm thương mại', icon: '🗺️', ready: true },
    { id: 'mall-choice', title: '10. Chọn sao cho hợp lý?', desc: 'Cân nhắc nhu cầu - công dụng - an toàn - tránh lãng phí khi mua sắm', icon: '🛒', ready: true },
    { id: 'mall-talk', title: '11. Nói sao ở nơi công cộng?', desc: 'Hỏi đường - nhờ giúp - xếp hàng - giao tiếp lịch sự với nhân viên và mọi người', icon: '💬', ready: true },
    { id: 'mall-handle', title: '12. Bé xử lý thế nào?', desc: 'Phản xạ với tình huống bị lạc - sàn ướt - thang cuốn - lối thoát hiểm và an toàn nơi công cộng', icon: '🚨', ready: true }
];

function openMiniGameHub() {
    activeMiniGameId = null;
    stopAllAudio();
    inGiaoAnFlow = false;
    if (!hasPremiumAccess()) {
        showPremiumGate('Mini Game', '🎮');
        return;
    }
    inMiniGameFlow = true;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs('Mini Game', '🎮', null);
    ensureMiniGameThemeStyles();

    const grid = document.getElementById('minigame-grid');
    if (!grid) return;
    const palettes = getMiniGamePaletteOrder('tv2-hub');
    grid.innerHTML = MINIGAME_LIST.map((g, idx) => {
        const style = palettes[idx % palettes.length];
        return `
        <div onclick="openGamePlay('${g.id}')" class="p-3.5 md:p-4 flex flex-col items-center text-center cursor-pointer transition-all group ${style.card} border-2 rounded-[26px] min-h-[132px] justify-between relative shadow-sm pastel-btn">
            ${!g.ready ? `<span class="absolute top-2 right-2 bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-200">Sắp ra mắt</span>` : ''}
            <div class="text-4xl group-hover:scale-110 transition-transform mt-1">${g.icon}</div>
            <div class="w-full">
                <h3 class="font-extrabold ${style.num} text-base leading-tight">${g.title}</h3>
                <p class="text-sm text-gray-700 font-bold mt-1 w-full leading-snug">${g.desc}</p>
            </div>
        </div>`;
    }).join('');
    switchAppView('view-minigame-hub');
}

const GAME_SCRIPT_MAP = {
    'family-activity': 'assets/js/games/hoat-dong-gia-dinh.js?v=tv2mg1c',
    'why-family': 'assets/js/games/vi-sao-the-nhi.js?v=tv2mg2c',
    'use-it-right': 'assets/js/games/dung-sao-cho-dung.js?v=tv2mg3c',
    'say-it-nicely': 'assets/js/games/noi-sao-cho-hay.js?v=tv2mg4c',
    'traffic-safe': 'assets/js/games/di-sao-cho-dung.js?v=tv2mg5c',
    'traffic-why': 'assets/js/games/vi-sao-phai-the.js?v=tv2mg6c',
    'traffic-vehicle': 'assets/js/games/chon-phuong-tien-nao.js?v=tv2mg7c',
    'traffic-handle': 'assets/js/games/xu-ly-the-nao.js?v=tv2mg8c',
    'mall-where': 'assets/js/games/di-dau-mua-gi.js?v=tv2mg9c',
    'mall-choice': 'assets/js/games/chon-sao-cho-hop-ly.js?v=tv2mg10c',
    'mall-talk': 'assets/js/games/noi-sao-noi-cong-cong.js?v=tv2mg11c',
    'mall-handle': 'assets/js/games/be-xu-ly-the-nao.js?v=tv2mg12c'
};
const loadedGameScripts = {};

function loadGameScript(src) {
    if (loadedGameScripts[src]) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { loadedGameScripts[src] = true; resolve(); };
        script.onerror = () => reject(new Error(`Không tải được file game: ${src}`));
        document.body.appendChild(script);
    });
}

async function openGamePlay(gameId) {
    stopAllAudio();
    ensureMiniGameThemeStyles();
    inMiniGameFlow = true;
    const game = MINIGAME_LIST.find(g => g.id === gameId);
    if (!game) return;

    if (!game.ready) {
        showAccessGate({
            title: 'Sắp ra mắt',
            icon: game.icon,
            showAuth: false,
            message: `<strong>${escapeHtml(game.title)}</strong> đang được cô Thỏ Ngọc chuẩn bị.<br>Con quay lại sau nhé!`,
            note: '🎮 Cả 12 Mini Game đã sẵn sàng!'
        });
        return;
    }

    const title = document.getElementById('game-play-title');
    if (title) title.innerHTML = `<span>${game.icon}</span><span>${game.title}</span>`;
    updateNavTabs('Mini Game', '🎮', game.title);
    activeMiniGameId = gameId;
    switchAppView('view-game-play');
    miniGameReplayText = '';
    miniGameReplayRate = 0.94;
    ensureMiniGameReplayButton();

    const scriptSrc = GAME_SCRIPT_MAP[gameId];
    if (scriptSrc) {
        const box = document.getElementById('game-play-container');
        if (box) box.innerHTML = '<p class="text-center text-gray-400 font-bold py-8">Đang mở cổng thành...</p>';
        try {
            await loadGameScript(scriptSrc);
        } catch (e) {
            if (box) box.innerHTML = '<p class="text-center text-rose-500 font-bold py-8">Không tải được game. Bé thử lại nhé!</p>';
            return;
        }
    }

    if (!isMiniGameActive(gameId)) return;

    if (gameId === 'family-activity' && typeof startFamilyActivityGame === 'function') {
        startFamilyActivityGame();
    } else if (gameId === 'why-family' && typeof startWhyFamilyGame === 'function') {
        startWhyFamilyGame();
    } else if (gameId === 'use-it-right' && typeof startUseItRightGame === 'function') {
        startUseItRightGame();
    } else if (gameId === 'say-it-nicely' && typeof startSayItNicelyGame === 'function') {
        startSayItNicelyGame();
    } else if (gameId === 'traffic-safe' && typeof startTrafficSafeGame === 'function') {
        startTrafficSafeGame();
    } else if (gameId === 'traffic-why' && typeof startTrafficWhyGame === 'function') {
        startTrafficWhyGame();
    } else if (gameId === 'traffic-vehicle' && typeof startTrafficVehicleGame === 'function') {
        startTrafficVehicleGame();
    } else if (gameId === 'traffic-handle' && typeof startTrafficHandleGame === 'function') {
        startTrafficHandleGame();
    } else if (gameId === 'mall-where' && typeof startMallWhereGame === 'function') {
        startMallWhereGame();
    } else if (gameId === 'mall-choice' && typeof startMallChoiceGame === 'function') {
        startMallChoiceGame();
    } else if (gameId === 'mall-talk' && typeof startMallTalkGame === 'function') {
        startMallTalkGame();
    } else if (gameId === 'mall-handle' && typeof startMallHandleGame === 'function') {
        startMallHandleGame();
    }

}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAllAudio();
});
window.addEventListener('pagehide', stopAllAudio);

document.addEventListener('DOMContentLoaded', () => {
    updateUserInfoBox();
    renderDashboardGrid();
    goHome();
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
    tryAutoLogin();
});