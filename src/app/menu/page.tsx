import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Меню | LUMIÈRE",
  description: "Авторская кухня и дегустационные сеты.",
};

export default function MenuPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-16">
          Меню
        </h1>

        <div className="mb-20">
          <h2 className="text-2xl font-serif text-gold mb-8 uppercase tracking-widest">
            Tasting Menu
          </h2>
          <p className="text-gray-400 mb-8 italic">"Путешествие в 7 курсов"</p>
          <div className="space-y-8 text-left max-w-lg mx-auto">
            <div className="flex justify-between items-baseline border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-xl text-white mb-1">Морской гребешок</h3>
                <p className="text-sm text-gray-500">
                  Цветная капуста, трюфель, икра
                </p>
              </div>
            </div>
            <div className="flex justify-between items-baseline border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-xl text-white mb-1">Оленина</h3>
                <p className="text-sm text-gray-500">
                  Можжевельник, копченая груша, соус из портвейна
                </p>
              </div>
            </div>
            <div className="flex justify-between items-baseline border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-xl text-white mb-1">Текстуры шоколада</h3>
                <p className="text-sm text-gray-500">Ганаш, спонж, сорбет</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-gold">12 000 ₽</p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-serif text-gold mb-8 uppercase tracking-widest">
            A La Carte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-serif text-white mb-6 border-b border-gray-800 pb-2">
                Закуски
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-white mb-1">
                    <span>Тартар из говядины</span>
                    <span className="text-gold">1 200 ₽</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Желток конфи, каперсы, ржаной чипс
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-1">
                    <span>Карпаччо из осьминога</span>
                    <span className="text-gold">1 800 ₽</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Лимонный гель, фенхель, оливковое масло
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-serif text-white mb-6 border-b border-gray-800 pb-2">
                Горячее
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-white mb-1">
                    <span>Утиная грудка</span>
                    <span className="text-gold">2 100 ₽</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Пюре из пастернака, вишневый соус
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-1">
                    <span>Палтус</span>
                    <span className="text-gold">2 400 ₽</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Спаржа, соус шампань, красная икра
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-gold mb-8 uppercase tracking-widest">
            Винная карта
          </h2>
          <p className="text-gray-400 mb-6">
            Более 300 позиций из Старого и Нового света.
          </p>
          <a
            href="/menu.pdf"
            download
            className="inline-block px-8 py-3 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-colors uppercase text-xs tracking-widest"
          >
            Скачать PDF
          </a>
        </div>
      </div>
    </div>
  );
}
