"use client"
import { useState, useMemo, useEffect } from "react"

// --- CẤU HÌNH GAME ---
const GRID_SIZE = 5
const INITIAL_RESOURCES = 1200
const INITIAL_TURNS = 10
const COST_PER_BUILD = 100
const POINTS_PER_BUILD = 50
const SPECIALIZATION_BONUS = 75
const UNITY_BONUS = 150

const INSTR_KEY = "unityInstructionsSeen"

// --- CÁC LOẠI CÔNG TRÌNH ---
const BUILDING_TYPES = {
  ECONOMY: { name: "Kinh tế", color: "bg-green-500", icon: "📈" },
  CULTURE: { name: "Văn hóa", color: "bg-purple-500", icon: "🎭" },
  SOCIETY: { name: "Xã hội", color: "bg-blue-500", icon: "🏫" },
}

const BUILDINGS = [
  { id: "b1", name: "Nhà Rông", type: "CULTURE", ethnicity: "Ba Na, Gia Rai", points: 20 },
  { id: "b2", name: "Ruộng bậc thang", type: "ECONOMY", ethnicity: "H'Mông, Dao", points: 30 },
  { id: "b3", name: "Chợ nổi", type: "ECONOMY", ethnicity: "Kinh, Khmer", points: 30 },
  { id: "b4", name: "Trường Dân tộc Nội trú", type: "SOCIETY", ethnicity: "Nhiều dân tộc", points: 25 },
  { id: "b5", name: "Tháp Chăm Pa", type: "CULTURE", ethnicity: "Chăm", points: 20 },
  { id: "b6", name: "Làng dệt thổ cẩm", type: "CULTURE", ethnicity: "Thái, Mường", points: 20 },
  { id: "b7", name: "Trạm y tế xã", type: "SOCIETY", ethnicity: "Nhiều dân tộc", points: 25 },
  { id: "b8", name: "Vườn cà phê", type: "ECONOMY", ethnicity: "Ê Đê, M'nông", points: 35 },
];

// --- NGÂN HÀNG CÂU HỎI ĐẦY ĐỦ ---
const FULL_QUESTION_BANK = [
    { q: "Theo Mác - Lênin, nguyên tắc nào giữ vai trò chủ đạo trong Cương lĩnh dân tộc?", options: [{ t: "Liên hiệp công nhân tất cả các dân tộc", correct: true }, { t: "Các dân tộc hoàn toàn bình đẳng", correct: false }, { t: "Các dân tộc có quyền tự quyết", correct: false }] },
    { q: "Chính sách nhất quán của Đảng và Nhà nước Việt Nam về vấn đề dân tộc là gì?", options: [{ t: "Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển", correct: true }, { t: "Đồng hóa văn hóa để tạo sự thống nhất", correct: false }, { t: "Để các dân tộc tự phát triển mà không can thiệp", correct: false }] },
    { q: "Sự chênh lệch phát triển giữa các vùng ở Việt Nam chủ yếu là do đâu?", options: [{ t: "Hệ quả khách quan của điều kiện lịch sử, địa lý", correct: true }, { t: "Chủ trương của nhà nước", correct: false }, { t: "Do người dân không muốn phát triển", correct: false }] },
    { q: "Cơ quan nào của Quốc hội Việt Nam có vai trò chính trong việc thẩm tra các chính sách liên quan đến dân tộc?", options: [{ t: "Hội đồng Dân tộc", correct: true }, { t: "Ủy ban Kinh tế", correct: false }, { t: "Ủy ban Pháp luật", correct: false }] },
    { q: "Việc có kênh truyền hình VTV5 phát sóng bằng nhiều thứ tiếng dân tộc thể hiện điều gì?", options: [{ t: "Sự tôn trọng và nỗ lực bảo tồn bản sắc văn hóa", correct: true }, { t: "Sự lãng phí không cần thiết", correct: false }, { t: "Đây là kênh dành riêng cho người nước ngoài", correct: false }] },
    { q: "Đặc điểm nào là cơ sở vững chắc nhất cho khối đại đoàn kết dân tộc ở Việt Nam?", options: [{ t: "Truyền thống đoàn kết lâu đời trong lịch sử", correct: true }, { t: "Sự tương đồng tuyệt đối về kinh tế", correct: false }, { t: "Tất cả các dân tộc đều sống ở đồng bằng", correct: false }] },
    { q: "Theo Chủ nghĩa Mác - Lênin, nguồn gốc sâu xa của tôn giáo là gì?", options: [{ t: "Sự bần cùng, áp bức và bóc lột", correct: true }, { t: "Sự phát triển của khoa học", correct: false }, { t: "Nhu cầu giải trí của con người", correct: false }] },
    { q: "Nguyên tắc nào sau đây KHÔNG phải là nguyên tắc giải quyết vấn đề tôn giáo của CNXH khoa học?", options: [{ t: "Dùng mệnh lệnh hành chính để cấm đoán tôn giáo", correct: true }, { t: "Tôn trọng quyền tự do tín ngưỡng, không tín ngưỡng", correct: false }, { t: "Phân biệt mặt chính trị và tư tưởng của tôn giáo", correct: false }] },
    { q: "Chính sách 'cử tuyển' của Nhà nước Việt Nam nhằm mục đích chính là gì?", options: [{ t: "Đào tạo nguồn nhân lực chất lượng cao là người dân tộc thiểu số", correct: true }, { t: "Khuyến khích học sinh đi du học", correct: false }, { t: "Giảm số lượng sinh viên đại học", correct: false }] },
    { q: "Đặc điểm cư trú nào của các dân tộc ở Việt Nam tạo điều kiện cho sự giao lưu nhưng cũng tiềm ẩn thách thức về đoàn kết?", options: [{ t: "Cư trú đan xen", correct: true }, { t: "Cư trú biệt lập", correct: false }, { t: "Chỉ sống ở thành phố", correct: false }] },
    { q: "Hành vi nào sau đây bị pháp luật Việt Nam nghiêm cấm trong lĩnh vực tôn giáo?", options: [{ t: "Lợi dụng tôn giáo để chia rẽ dân tộc, chống phá Nhà nước", correct: true }, { t: "Xây dựng cơ sở thờ tự mới", correct: false }, { t: "Thực hành nghi lễ tôn giáo tại nhà", correct: false }] },
];

// --- CÁC TYPE & HÀM KHỞI TẠO ---
type Building = typeof BUILDINGS[0]
type Cell = { row: number; col: number; buildingId: string | null }

function buildInitialGrid(): Cell[] {
  const cells: Cell[] = []
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      cells.push({ row: r, col: c, buildingId: null })
    }
  }
  return cells
}

// --- COMPONENT GAME CHÍNH ---
export default function UnityVillageGame() {
  const [grid, setGrid] = useState<Cell[]>(() => buildInitialGrid())
  const [resources, setResources] = useState(INITIAL_RESOURCES)
  const [turns, setTurns] = useState(INITIAL_TURNS)
  const [score, setScore] = useState(0)
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(BUILDINGS[0])
  const [message, setMessage] = useState("Chào mừng! Hãy xem hướng dẫn và bắt đầu xây dựng.")
  const [showQuestion, setShowQuestion] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof FULL_QUESTION_BANK>([]);
  const [showInstructions, setShowInstructions] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false)
  const [answerMessage, setAnswerMessage] = useState("")

  useEffect(() => {
    setShuffledQuestions([...FULL_QUESTION_BANK].sort(() => Math.random() - 0.5));
    try {
      const seenLocal = localStorage.getItem(INSTR_KEY)
      const seenSession = sessionStorage.getItem(INSTR_KEY)
      // debug (one-time console):
      if (!seenLocal && !seenSession) console.info("[UnityJourney] show instructions (no stored flag)")
      if (seenLocal === "1" || seenSession === "1") {
        setShowInstructions(false)
      } else {
        setShowInstructions(true)
      }
    } catch {}
  }, []);

  const question = useMemo(() => {
    if (shuffledQuestions.length === 0) return null;
    return shuffledQuestions[questionIndex % shuffledQuestions.length];
  }, [questionIndex, shuffledQuestions]);

  // Kiểm tra xem tất cả ô đã được xây dựng chưa
  const isGridFull = useMemo(() => {
    return grid.every(cell => cell.buildingId !== null);
  }, [grid]);

  const getCell = (r: number, c: number) => grid.find(cell => cell.row === r && cell.col === c);

  const markInstructionsSeen = () => {
    try {
      localStorage.setItem(INSTR_KEY, "1")
      sessionStorage.setItem(INSTR_KEY, "1")
    } catch {}
  }

  const handleBuild = (cell: Cell) => {
    // bất kỳ thao tác chơi nào cũng coi như đã xem hướng dẫn
    if (showInstructions) {
      setShowInstructions(false)
      markInstructionsSeen()
    }

    if (cell.buildingId || !selectedBuilding || gameEnded) return;
    if (turns <= 0) {
      setMessage("⚠️ Đã hết lượt! Hãy trả lời câu hỏi để có thêm lượt.");
      setShowQuestion(true);
      return;
    }
    if (resources < COST_PER_BUILD) {
      setMessage("⚠️ Không đủ vốn để xây dựng!");
      return;
    }

    let bonus = 0;
    let bonusMessage = "";

    const neighbors = [
        getCell(cell.row - 1, cell.col), getCell(cell.row + 1, cell.col),
        getCell(cell.row, cell.col - 1), getCell(cell.row, cell.col + 1),
    ].filter((n): n is Cell => n !== undefined && n.buildingId !== null);

    const newBuildingInfo = BUILDINGS.find(b => b.id === selectedBuilding.id);
    if(newBuildingInfo) {
        for(const neighbor of neighbors) {
            const neighborBuildingInfo = BUILDINGS.find(b => b.id === neighbor.buildingId);
            if(neighborBuildingInfo) {
                if(neighborBuildingInfo.type === newBuildingInfo.type) {
                    bonus += SPECIALIZATION_BONUS;
                    bonusMessage += `🤝 +${SPECIALIZATION_BONUS}đ Chuyên môn hóa! `;
                }
                if(neighborBuildingInfo.type !== newBuildingInfo.type && neighborBuildingInfo.ethnicity !== newBuildingInfo.ethnicity) {
                    bonus += UNITY_BONUS;
                    bonusMessage += `💖 +${UNITY_BONUS}đ Đại Đoàn Kết! `;
                }
            }
        }
    }
    
    setGrid(prev => prev.map(c => (c.row === cell.row && c.col === cell.col ? { ...c, buildingId: selectedBuilding.id } : c)))
    setTurns(t => t - 1)
    setResources(r => r - COST_PER_BUILD)
    setScore(s => s + POINTS_PER_BUILD + (newBuildingInfo?.points || 0) + bonus)
    setMessage(`Xây dựng ${selectedBuilding.name} thành công! ${bonusMessage || ""}`);
    
    // Kiểm tra xem đã xây đầy bản đồ chưa
    const updatedGrid = grid.map(c => (c.row === cell.row && c.col === cell.col ? { ...c, buildingId: selectedBuilding.id } : c))
    const isFull = updatedGrid.every(cell => cell.buildingId !== null);
    
    if (isFull && !gameEnded) {
      setGameEnded(true);
      setMessage(`🎉 CHIẾN THẮNG! Bạn đã xây dựng hoàn thành ngôi làng với ${score + POINTS_PER_BUILD + (newBuildingInfo?.points || 0) + bonus} điểm!`);
    }
    
    if((INITIAL_TURNS - turns - 1) % 3 === 2 && turns > 0 && !isFull) {
        setShowQuestion(true);
    }
  }
  
  const answerQuestion = (isCorrect: boolean) => {
    setShowQuestion(false);
    
    if(isCorrect) {
        setTurns(t => t + 2);
        setResources(r => r + 200);
        setAnswerMessage("✅ Chính xác! Bạn nhận được +2 lượt và +200 vốn!");
        setShowAnswerFeedback(true);
        setTimeout(() => {
          setShowAnswerFeedback(false);
        }, 3000);
    } else {
        setAnswerMessage("❌ Chưa đúng rồi. Cố gắng ở câu hỏi sau nhé!");
        setShowAnswerFeedback(true);
        setTimeout(() => {
          setShowAnswerFeedback(false);
        }, 3000);
    }
    setQuestionIndex(i => i + 1);
  }

  const dismissInstructions = () => {
    setShowInstructions(false)
    markInstructionsSeen()
  }

  const resetGame = () => {
    setGrid(buildInitialGrid())
    setResources(INITIAL_RESOURCES)
    setTurns(INITIAL_TURNS)
    setScore(0)
    setSelectedBuilding(BUILDINGS[0])
    setMessage("Chào mừng! Hãy xem hướng dẫn và bắt đầu xây dựng.")
    setQuestionIndex(0)
    setGameEnded(false)
    setShowAnswerFeedback(false)
    setAnswerMessage("")
    setShuffledQuestions([...FULL_QUESTION_BANK].sort(() => Math.random() - 0.5))
  }
  
  if (!question) return <div>Đang tải game...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto font-sans bg-gray-50 rounded-lg shadow-lg">
        {/* --- HƯỚNG DẪN CHƠI --- */}
        {showInstructions && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={dismissInstructions}>
                <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg animate-fade-in" onClick={e => e.stopPropagation()}>
                    <h2 className="text-2xl font-bold mb-3 text-center">📜 Hướng Dẫn Chơi</h2>
                    <div className="text-sm space-y-3 text-gray-700">
                        <p><strong>🎯 Mục tiêu:</strong> Đạt điểm cao nhất bằng cách xây dựng một ngôi làng hài hòa và thịnh vượng.</p>
                        <div>
                            <strong>🕹️ Cách chơi:</strong>
                            <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                                <li><strong>Chọn công trình</strong> ở cột bên trái.</li>
                                <li><strong>Nhấp vào ô đất trống</strong> (+) trên bản đồ để xây.</li>
                                <li>Mỗi lần xây tốn <strong>100 Vốn</strong> và <strong>1 Lượt</strong>.</li>
                                <li>Hết lượt, hãy trả lời câu hỏi để có thêm.</li>
                            </ul>
                        </div>
                        <div>
                            <strong>🏆 Quy luật tính điểm:</strong>
                             <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                                <li><strong>Điểm cơ bản:</strong> +50 điểm cho mỗi lần xây.</li>
                                <li><strong>🤝 Điểm Chuyên môn hóa (+75đ):</strong> Xây cạnh công trình khác <strong>cùng lĩnh vực</strong> (cùng màu).</li>
                                <li><strong className="text-blue-600">💖 Điểm ĐẠI ĐOÀN KẾT (+150đ):</strong> Xây cạnh công trình khác <strong>khác lĩnh vực VÀ khác bản sắc dân tộc</strong>. Đây là chìa khóa để đạt điểm cao nhất!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                         <button onClick={dismissInstructions} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">Bắt đầu chơi!</button>
                    </div>
                </div>
            </div>
        )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">🏡 Ngôi Làng Đại Đoàn Kết</h2>
        <div className="flex gap-2">
          <button onClick={() => setShowInstructions(true)} className="px-3 py-1.5 text-xs bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300">? Hướng dẫn</button>
          {gameEnded && (
            <button onClick={resetGame} className="px-3 py-1.5 text-xs bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">🔄 Chơi lại</button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 bg-white p-3 rounded-lg mb-4 text-center text-sm shadow">
        <div>🏆 Điểm: <span className="font-bold text-lg text-blue-600">{score}</span></div>
        <div>💰 Vốn: <span className="font-bold text-lg text-green-600">{resources}</span></div>
        <div>⚡ Lượt: <span className={`font-bold text-lg ${turns <= 2 ? "text-red-600 animate-pulse" : "text-yellow-600"}`}>{turns}</span></div>
      </div>
      
      {message && (
        <div className={`text-center mb-4 p-3 rounded-md text-sm border ${
          gameEnded 
            ? "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 border-orange-300 shadow-lg" 
            : "bg-blue-100 text-blue-800 border-blue-200"
        }`}>
          {message}
        </div>
      )}

      {/* Thông báo khi trả lời câu hỏi */}
      {showAnswerFeedback && (
        <div className="fixed top-4 right-4 bg-white p-4 rounded-xl shadow-2xl border-2 border-green-300 z-40 animate-fade-in">
          <p className="text-center font-semibold text-gray-800">{answerMessage}</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
            <h3 className="font-bold mb-2 text-gray-700">Danh sách công trình:</h3>
            <div className="grid gap-2">
                {BUILDINGS.map(b => {
                    const typeInfo = BUILDING_TYPES[b.type as keyof typeof BUILDING_TYPES];
                    return (
                        <button key={b.id} onClick={() => setSelectedBuilding(b)}
                            className={`p-2 rounded-lg border-2 text-left transition-all w-full ${selectedBuilding?.id === b.id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-transparent hover:bg-gray-100'}`}>
                            <div className="flex items-center gap-3">
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-lg ${typeInfo.color}`}>{typeInfo.icon}</span>
                                <div>
                                    <div className="font-semibold text-sm">{b.name}</div>
                                    <div className="text-xs text-gray-500">{b.ethnicity}</div>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="md:w-2/3">
            <div className="grid gap-1 bg-green-100 p-2 rounded-lg aspect-square" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}>
            {grid.map((cell) => {
                const building = BUILDINGS.find(b => b.id === cell.buildingId);
                const typeInfo = building ? BUILDING_TYPES[building.type as keyof typeof BUILDING_TYPES] : null;
                return (
                <button
                    key={`${cell.row}-${cell.col}`}
                    onClick={() => handleBuild(cell)}
                    disabled={gameEnded}
                    className={`aspect-square rounded-md flex items-center justify-center transition-all duration-300 transform ${
                        gameEnded 
                            ? "cursor-not-allowed opacity-75" 
                            : "hover:scale-105"
                    } ${
                        building
                        ? `${typeInfo?.color} text-white text-3xl shadow-lg`
                        : gameEnded 
                            ? "bg-gray-200" 
                            : "bg-green-50 hover:bg-green-200"
                    }`}
                    title={building ? `${building.name} (${building.ethnicity})` : gameEnded ? "Game đã kết thúc" : `Xây dựng (Chi phí: ${COST_PER_BUILD} vốn)`}
                >
                    {building ? typeInfo?.icon : gameEnded ? "✓" : <span className="text-gray-400 text-xl">+</span>}
                </button>
                )
            })}
            </div>
        </div>
      </div>
      
      {/* Modal câu hỏi */}
      {showQuestion && !gameEnded && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-fade-in p-4">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-800">💡 Thử thách kiến thức!</h3>
                <p className="mb-5 text-gray-700">{question.q}</p>
                <div className="grid gap-3">
                    {question.options.map((opt, idx) => (
                        <button 
                            key={idx}
                            onClick={() => answerQuestion(opt.correct)}
                            className="w-full text-left p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-blue-100 hover:border-blue-300 transition-all"
                        >
                           <span className="font-semibold">{String.fromCharCode(65 + idx)}.</span> {opt.t}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      )}

      {/* Modal chiến thắng */}
      {gameEnded && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fade-in p-4" onClick={resetGame}>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center border-4 border-yellow-400" onClick={e => e.stopPropagation()}>
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">CHIẾN THẮNG!</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Chúc mừng! Bạn đã xây dựng hoàn thành ngôi làng đại đoàn kết với <span className="font-bold text-orange-600">{score} điểm</span>!
                </p>
                <div className="bg-white/50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600 mb-2">📊 Thống kê:</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Tổng điểm: <span className="font-bold text-blue-600">{score}</span></div>
                        <div>Công trình: <span className="font-bold text-green-600">25</span></div>
                        <div>Vốn còn lại: <span className="font-bold text-purple-600">{resources}</span></div>
                        <div>Lượt còn: <span className="font-bold text-orange-600">{turns}</span></div>
                    </div>
                </div>
                <button 
                    onClick={resetGame}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                    🎮 Chơi lại
                </button>
            </div>
        </div>
      )}
    </div>
  )
}