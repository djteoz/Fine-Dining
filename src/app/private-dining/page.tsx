import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining | LUMIÈRE",
  description: "Частные мероприятия и VIP-залы.",
};

export default function PrivateDiningPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-12 text-center">
          Private Dining
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="h-64 bg-gray-800 mb-6 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            <h2 className="text-3xl font-serif text-white mb-4">
              Каминный зал
            </h2>
            <p className="text-gray-400 mb-4">
              Уединенная атмосфера с живым камином. Идеально для деловых
              переговоров или семейных торжеств.
            </p>
            <ul className="text-gray-500 text-sm space-y-1 mb-6">
              <li>Вместимость: до 12 персон</li>
              <li>Отдельный вход</li>
              <li>Персональный сервис</li>
            </ul>
          </div>
          <div>
            <div className="h-64 bg-gray-800 mb-6 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            <h2 className="text-3xl font-serif text-white mb-4">
              Винная библиотека
            </h2>
            <p className="text-gray-400 mb-4">
              Ужин в окружении коллекции редких вин. Стол из массива дуба и
              приглушенный свет.
            </p>
            <ul className="text-gray-500 text-sm space-y-1 mb-6">
              <li>Вместимость: до 8 персон</li>
              <li>Дегустационное меню</li>
              <li>Сомелье</li>
            </ul>
          </div>
        </div>

        <div className="bg-charcoal p-12 text-center max-w-2xl mx-auto border border-gray-800">
          <h3 className="text-2xl font-serif text-white mb-4">
            Организация мероприятия
          </h3>
          <p className="text-gray-400 mb-8">
            Для бронирования частных залов, пожалуйста, свяжитесь с нашим
            банкетным менеджером. Мы поможем составить индивидуальное меню и
            подобрать винное сопровождение.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:events@lumiere.ru"
              className="text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm"
            >
              events@lumiere.ru
            </a>
            <a
              href="tel:+74951234567"
              className="text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm"
            >
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
