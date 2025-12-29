"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-charcoal z-0">
          {/* In a real project, use <video> here */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tighter"
          >
            LUMIÈRE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase mb-12"
          >
            Taste the Art
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              href="/booking"
              className="inline-block px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm"
            >
              Забронировать стол
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-background text-center px-4">
        <div className="max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-sm uppercase tracking-widest mb-4 block"
          >
            Философия
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight"
          >
            "Мы не просто готовим еду. Мы создаем воспоминания, застывшие во
            времени."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 leading-relaxed font-light"
          >
            Наша кухня — это диалог между природой и технологиями. Мы используем
            локальные фермерские продукты, чтобы раскрыть истинный вкус региона,
            добавляя к нему нотки авангарда. Каждый ингредиент имеет значение.
            Каждая деталь интерьера рассказывает историю.
          </motion.p>
        </div>
      </section>

      {/* Image Grid / Mood */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
        <div className="relative h-full min-h-[400px]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="flex items-center justify-center bg-charcoal p-12 md:p-24">
          <div className="max-w-md">
            <h3 className="text-3xl font-serif text-white mb-6">Атмосфера</h3>
            <p className="text-gray-400 font-light mb-8">
              Свет, звук, текстуры — всё работает на то, чтобы вы забыли о суете
              внешнего мира. Погрузитесь в пространство, где время течет иначе.
            </p>
            <Link
              href="/visit"
              className="text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white hover:border-white transition-colors"
            >
              Правила визита
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
