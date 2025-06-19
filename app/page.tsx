"use client"

import { Search, ShoppingCart, Home, QrCode, MessageCircle, Menu, Banknote, Database } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function KaspiInterface() {
  const handleGosuslugiClick = () => {
    // Redirect to ID as requested
    window.location.href = "/ID"
  }

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-3 sticky top-0 z-50">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Поиск по Kaspi.kz"
            className="pl-9 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm h-9"
          />
        </div>
        <ShoppingCart className="w-6 h-6 text-gray-600" />
      </div>

      {/* Promotional Banners */}
      <div className="px-4 py-3">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {/* Kaspi Жума Banner */}
          <div className="min-w-[180px] h-[100px] bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-3 text-white relative overflow-hidden flex-shrink-0">
            <div className="relative z-10 flex justify-between items-start h-full">
              <div>
                <h2 className="text-2xl font-bold leading-none">KASPI</h2>
                <h2 className="text-2xl font-bold leading-none mb-1">ЖҰМА</h2>
                <p className="text-xs opacity-90">20-22 июня</p>
              </div>
              <div className="flex flex-col items-end gap-1 pt-1">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">до 15% Б</span>
                <span className="bg-white text-red-500 px-3 py-1 rounded-full text-xs font-bold">до -70%</span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>

          {/* Air Conditioning Banner */}
          <div className=" min-w-[180px] h-[100px]  bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-3 relative overflow-hidden flex-shrink-0">
            <div className="relative z-10">
              <h3 className="text-gray-800 font-semibold mb-1 text-sm">Пора включить</h3>
              <h3 className="text-gray-800 font-semibold mb-3 text-sm">кондиционер!</h3>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">до -40%</span>
            </div>
            <div className="absolute bottom-2 right-2">
              <div className="flex gap-1">
                <div className="w-2 h-6 bg-green-400/50 rounded-full transform rotate-12"></div>
                <div className="w-2 h-4 bg-green-400/30 rounded-full transform rotate-12"></div>
                <div className="w-1 h-3 bg-green-400/20 rounded-full transform rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Third Banner */}
          <div className="min-w-[260px] bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl p-3 relative overflow-hidden flex-shrink-0">
            <div className="relative z-10">
              <h3 className="text-gray-800 font-semibold mb-1 text-sm">Новые</h3>
              <h3 className="text-gray-800 font-semibold mb-3 text-sm">предложения</h3>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">до 50%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Icons Grid */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2">
              <ShoppingCart className="w-7 h-7 text-red-500" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Магазин</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/copy-icon.jpeg" alt="Мой Банк" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Мой Банк</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/receipt-icon.jpeg" alt="Платежи" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Платежи</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/transfer-icon.jpeg" alt="Переводы" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Переводы</span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/magnum-icon.jpeg" alt="Magnum" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Magnum</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/travel-icon.jpeg" alt="Travel" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Travel</span>
          </div>

          <button onClick={handleGosuslugiClick} className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/government-icon.jpeg" alt="Госуслуги" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Госуслуги</span>
          </button>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-2 overflow-hidden">
              <img src="/icons/presentation-icon.jpeg" alt="Объявления" className="w-9 h-9 object-contain" />
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">Объявления</span>
          </div>
        </div>
      </div>

      {/* Financial Services */}
      <div className="py-3">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          <div className="min-w-[200px] rounded-2xl p-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-[80px] h-[50px] bg-yellow-400 rounded-[5px] flex items-center justify-center">
              <Database className="w-[30px] h-[30px] text-white" />
            </div>
            <div>
              <p className="text-gray-800 font-medium text-[18px]">Накопительный</p>
              <p className="text-gray-800 font-medium text-[18px]">Депозит до 18%</p>
            </div>
          </div>

          <div className="min-w-[120px] rounded-2xl p-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-[80px] h-[50px] bg-yellow-400 rounded-[5px] flex items-center justify-center">
            <p className="text-white font-medium text-[32px]">₸$</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium text-[18px]">Накопительный</p>
              <p className="text-gray-800 font-medium text-[18px]">Депозит до 18%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Shoes Section */}
      <div className="py-3">
        <div className="bg-white relative overflow-hidden">
          <img src="/shoes.png" alt="Summer Shoes" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="px-4 py-2 pb-20">
        <h3 className="text-base font-semibold text-gray-800 mb-3">Вы недавно смотрели</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {[1, 2, 3].map((item) => (
            <div key={item} className="min-w-[100px] bg-white rounded-xl p-3 relative flex-shrink-0">
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">5% Б</span>
              </div>
              <div className="h-16 bg-gray-100 rounded-lg mb-2 mt-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded mb-1"></div>
              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center py-1">
            <Home className="w-5 h-5 text-red-500" />
            <span className="text-xs text-red-500 mt-1">Главная</span>
          </div>
          <div className="flex flex-col items-center py-1">
            <QrCode className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400 mt-1">Kaspi QR</span>
          </div>
          <div className="flex flex-col items-center relative py-1">
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400 mt-1">Сообщения</span>
            <div className="absolute -top-1 right-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          <div className="flex flex-col items-center py-1">
            <Menu className="w-5 h-5 text-gray-400" />
            <span className="text-xs text-gray-400 mt-1">Сервисы</span>
          </div>
        </div>
      </div>
    </div>
  )
}
