import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Меню | LUMIÈRE",
  description: "Авторская кухня и дегустационные сеты.",
};

export default function MenuPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
          Меню
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 font-light italic">
          «Современная гастрономия на стыке французской школы и нордического
          минимализма. Мы используем локальные сезонные продукты, дикие травы и
          методы ферментации, чтобы раскрыть чистый вкус каждого ингредиента.»
        </p>

        <div className="mb-24">
          <h2 className="text-2xl font-serif text-gold mb-12 uppercase tracking-widest">
            A La Carte
          </h2>

          {/* Starters */}
          <div className="mb-16 text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-gray-800 pb-4 text-center">
              Холодные закуски и Салаты
            </h3>
            <div className="grid grid-cols-1 gap-10">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Тартар из оленины с можжевельником
                  </h4>
                  <span className="text-gold font-light">950 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Вырезка оленя, эмульсия из черемши, маринованные побеги ели,
                  чипсы из льна
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Морской гребешок & Ферментированное яблоко
                  </h4>
                  <span className="text-gold font-light">1 100 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Карпаччо из сахалинского гребешка, гель из зеленого яблока,
                  масло укропа, сметана с хреном
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Пате из утиной печени
                  </h4>
                  <span className="text-gold font-light">780 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Классическая французская база, глазурь из облепихи, бриошь на
                  дикой закваске, лесной орех
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Печеная свекла с козьим сыром
                  </h4>
                  <span className="text-gold font-light">650 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Свекла конфи, мусс из мягкого козьего сыра, пудра из черной
                  смородины, карамелизированный пекан
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Гравлакс из форели
                  </h4>
                  <span className="text-gold font-light">890 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Форель слабой соли, маринованная в джине и свекле, крем из
                  жженого лука, огурец, ржаная крошка
                </p>
              </div>
            </div>
          </div>

          {/* Mains */}
          <div className="mb-16 text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-gray-800 pb-4 text-center">
              Основные блюда
            </h3>

            {/* Signature Dish */}
            <div className="mb-12 border border-gold/30 p-8 bg-charcoal/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-black text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
                Выбор Шефа
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4">
                <div>
                  <span className="text-gold text-xs uppercase tracking-widest mb-1 block">
                    Signature Dish
                  </span>
                  <h4 className="text-2xl text-white font-serif mb-2">
                    Северный Олень & Можжевельник
                  </h4>
                </div>
                <span className="text-gold text-xl font-light mt-2 md:mt-0">
                  1 850 ₽
                </span>
              </div>
              <p className="text-gray-400 font-light mb-4 leading-relaxed">
                Вырезка северного оленя (sous-vide), глазированная в
                можжевеловом масле. Подается с копченой грушей, кремом из
                печеного пастернака и густым соусом из диких лесных ягод.
              </p>
              <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-3 mt-3">
                Идеально сочетается с Crozes-Hermitage, Alain Graillot или нашим
                Шрабом из ревеня.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Треска с соусом Бер-блан
                  </h4>
                  <span className="text-gold font-light">1 250 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Филе мурманской трески, пюре из топинамбура, икра сига, масло
                  петрушки
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Утиная грудка & Еловый мед
                  </h4>
                  <span className="text-gold font-light">1 450 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Грудка прожарки medium rare, крем из пастернака, соус Демиглас
                  с брусникой
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Говяжьи щечки & Корнеплоды
                  </h4>
                  <span className="text-gold font-light">1 300 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Щечки, томленные 24 часа, глазированная морковь, пюре из
                  сельдерея с трюфелем
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Палтус с луком-пореем
                  </h4>
                  <span className="text-gold font-light">1 600 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Жареный палтус, копченый картофель, соус из мидий с шафраном,
                  припущенный лук-порей
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Стейк из цветной капусты (V)
                  </h4>
                  <span className="text-gold font-light">950 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Запеченная целиком цветная капуста, соус велюте из миндаля,
                  каперсы, изюм, масло лесного ореха
                </p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16 text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-gray-800 pb-4 text-center">
              Десерты
            </h3>
            <div className="grid grid-cols-1 gap-10">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Текстуры леса
                  </h4>
                  <span className="text-gold font-light">650 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Ганаш из темного шоколада, бисквит «мх», мороженое из белых
                  грибов, гель из еловых шишек
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Павлова & Морошка
                  </h4>
                  <span className="text-gold font-light">590 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Французская меренга, крем шантильи, свежая морошка, соус из
                  северных ягод
                </p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white font-serif group-hover:text-gold transition-colors">
                    Жженое сено & Карамель
                  </h4>
                  <span className="text-gold font-light">550 ₽</span>
                </div>
                <p className="text-gray-500 font-light text-sm">
                  Панна-котта, настоянная на сене, соленая карамель, крошка из
                  медового пряника
                </p>
              </div>
            </div>
          </div>
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
