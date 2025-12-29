import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Шеф-повар | LUMIÈRE",
  description: "История нашего шеф-повара.",
};

export default function ChefPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px] w-full bg-gray-800">
          {/* Placeholder for Chef Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div>
          <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
            Шеф-повар
          </span>
          <h1 className="text-5xl font-serif text-white mb-8">
            Александр Воронов
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            "Кулинария — это не ремесло, это способ общения. Через еду я
            рассказываю истории о местах, где я был, и о людях, которых я
            встречал."
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Александр начал свой путь в маленьком семейном бистро в Провансе,
            затем оттачивал мастерство в мишленовских ресторанах Копенгагена и
            Токио. Его стиль — это сочетание скандинавского минимализма и
            французской техники.
          </p>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <h3 className="text-xl font-serif text-white mb-4">Награды</h3>
            <ul className="text-gray-500 space-y-2">
              <li>• Лучший молодой шеф 2020</li>
              <li>• 2 Звезды Michelin (предыдущий проект)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Signature Dish Section */}
      <div className="max-w-6xl mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-gold text-sm uppercase tracking-widest mb-4 block">
              Фирменное блюдо
            </span>
            <h2 className="text-3xl font-serif text-white mb-6">
              Северный Олень с Можжевельником
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Это блюдо — квинтэссенция философии Александра. Нежнейшее мясо
              оленя, приготовленное при низкой температуре, подается с соусом из
              лесных ягод и копченой грушей. Вкус дикой природы в изысканном
              исполнении.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] w-full bg-gray-800">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
