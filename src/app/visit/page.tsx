import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Визит | LUMIÈRE",
  description: "Правила этикета и информация для гостей.",
};

export default function VisitPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
          Ваш Визит
        </h1>

        <div className="space-y-12">
          <div className="border-l-2 border-gold pl-6">
            <h2 className="text-xl font-serif text-white mb-2 uppercase tracking-widest">
              Дресс-код
            </h2>
            <p className="text-gray-400">
              Мы придерживаемся стиля Smart Casual или Cocktail. Мы просим
              воздержаться от посещения ресторана в спортивной одежде, шортах и
              открытой обуви (для мужчин).
            </p>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <h2 className="text-xl font-serif text-white mb-2 uppercase tracking-widest">
              Дети
            </h2>
            <p className="text-gray-400">
              Мы рады гостям старше 12 лет. Наша концепция и атмосфера не
              предусматривают детского меню и развлечений.
            </p>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <h2 className="text-xl font-serif text-white mb-2 uppercase tracking-widest">
              Животные
            </h2>
            <p className="text-gray-400">
              К сожалению, посещение ресторана с домашними животными не
              предусмотрено.
            </p>
          </div>

          <div className="border-l-2 border-gold pl-6">
            <h2 className="text-xl font-serif text-white mb-2 uppercase tracking-widest">
              Бронирование
            </h2>
            <p className="text-gray-400">
              Столы бронируются на 2 часа. Если вы планируете более длительный
              визит, пожалуйста, сообщите нам об этом заранее.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="h-64 w-full bg-gray-800 mb-8 relative grayscale hover:grayscale-0 transition-all duration-500">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-serif text-xl tracking-widest bg-black/50 px-6 py-2 border border-white/30">
                КАРТА
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
              Часы работы
            </p>
            <p className="text-white text-lg mb-6">Вт — Вс: 18:00 — 00:00</p>
            <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">
              Адрес
            </p>
            <p className="text-white text-lg">ул. Большая Дмитровка, 12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
