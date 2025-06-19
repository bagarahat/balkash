"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function IDPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-3 sticky top-0 z-50 border-b border-gray-200">
        <button onClick={() => router.back()} className="p-1">
          <ArrowLeft className="w-6 h-6 text-red-500" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Удостоверение личности</h1>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white px-4">
        <div className="flex">
          <button className="flex-1 py-3 px-4 bg-red-500 text-white text-sm font-medium rounded-tl-lg">Документ</button>
          <button className="flex-1 py-3 px-4 bg-white text-red-500 border border-red-500 border-l-0 text-sm font-medium rounded-tr-lg">
            Реквизиты
          </button>
        </div>
      </div>

      {/* ID Document */}
      <div className="p-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <img src="/id-document.jpeg" alt="Удостоверение личности" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 space-y-3 pb-20">
        <button className="w-full bg-blue-500 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
          Предъявить документ
        </button>

        <button className="w-full bg-white border border-blue-500 text-blue-500 py-4 rounded-xl font-medium flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
          </svg>
          Отправить документ
        </button>
      </div>
    </div>
  )
}
