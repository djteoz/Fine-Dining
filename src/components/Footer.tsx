import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand & Address */}
          <div>
            <Link
              href="/"
              className="text-2xl font-serif tracking-widest text-white block mb-6"
            >
              LUMIÈRE
            </Link>
            <address className="not-italic text-gray-400 space-y-2 font-light">
              <p>ул. Большая Дмитровка, 12</p>
              <p>Москва, Россия</p>
              <p className="pt-4">
                <a
                  href="tel:+74951234567"
                  className="hover:text-gold transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@lumiere.ru"
                  className="hover:text-gold transition-colors"
                >
                  info@lumiere.ru
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gold uppercase tracking-widest text-sm mb-6">
              Часы работы
            </h3>
            <ul className="text-gray-400 space-y-2 font-light">
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Пн - Чт</span>
                <span>18:00 - 23:00</span>
              </li>
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Пт - Сб</span>
                <span>18:00 - 01:00</span>
              </li>
              <li className="flex justify-between md:justify-start md:space-x-8">
                <span className="w-24">Вс</span>
                <span>18:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-gold uppercase tracking-widest text-sm mb-6">
              Следите за нами
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} LUMIÈRE. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
