"use client"
import UnityJourney from "@/components/UnityJourney"

export default function Page() {
    return (
        <div className="max-w-6xl mx-auto px-4 grid gap-8">
            {/* Hero Section */}
            <div className="text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-teal-600/10 rounded-3xl blur-3xl"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>🎮</span>
                        <span>Phần 6: Trò chơi tương tác</span>
                    </div>
                    <h1 className="h1">
                        Unity Journey
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Khám phá hành trình đoàn kết dân tộc thông qua trò chơi tương tác
                    </p>
                </div>
            </div>

            {/* Game Section */}
            <div className="card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h2 className="h2">Hành trình đoàn kết</h2>
                    </div>
                    <UnityJourney />
                </div>
            </div>
        </div>
    )
}