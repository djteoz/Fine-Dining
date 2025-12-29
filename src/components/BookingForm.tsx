"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

type Step = "date" | "details" | "deposit" | "confirmation" | "waitlist";

export default function BookingForm() {
  const [step, setStep] = useState<Step>("date");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("");
  const [isFull, setIsFull] = useState(false); // Mock availability

  const handleCheckAvailability = () => {
    // Mock logic: Friday/Saturday evenings are "full"
    if (date && time) {
      const isWeekend =
        new Date(date).getDay() === 5 || new Date(date).getDay() === 6;
      const isEvening = parseInt(time) >= 19;

      if (isWeekend && isEvening && Math.random() > 0.5) {
        setIsFull(true);
        setStep("waitlist");
      } else {
        setIsFull(false);
        setStep("details");
      }
    }
  };

  const handleDeposit = () => {
    // Mock payment processing
    setTimeout(() => {
      setStep("confirmation");
    }, 1500);
  };

  const handleWaitlist = () => {
    setStep("confirmation"); // Or a specific waitlist confirmation
  };

  return (
    <div className="w-full max-w-md mx-auto bg-charcoal p-8 rounded-sm shadow-2xl border border-gray-800">
      <AnimatePresence mode="wait">
        {step === "date" && (
          <motion.div
            key="date"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif text-white mb-6">
              Выберите дату и время
            </h2>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                Дата
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-3 text-gold"
                  size={18}
                />
                <input
                  type="date"
                  className="w-full bg-black border border-gray-700 text-white py-3 pl-10 pr-4 focus:border-gold focus:outline-none transition-colors"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                Гости
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-gold" size={18} />
                <select
                  className="w-full bg-black border border-gray-700 text-white py-3 pl-10 pr-4 focus:border-gold focus:outline-none appearance-none"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} персон
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">
                Время
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["18:00", "19:00", "20:00", "21:00", "22:00"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`py-2 border text-sm transition-colors ${
                      time === t
                        ? "border-gold text-gold bg-gold/10"
                        : "border-gray-700 text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleCheckAvailability}
              disabled={!date || !time}
              className="w-full bg-white text-black py-3 uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Далее
            </button>
          </motion.div>
        )}

        {step === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-serif text-white mb-6">Ваши данные</h2>
            <p className="text-gray-400 text-sm mb-4">
              Стол доступен. Для подтверждения бронирования потребуется внести
              депозит.
            </p>

            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-black border border-gray-700 text-white py-3 px-4 focus:border-gold focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full bg-black border border-gray-700 text-white py-3 px-4 focus:border-gold focus:outline-none"
            />
            <textarea
              placeholder="Особые пожелания (аллергия, повод)"
              className="w-full bg-black border border-gray-700 text-white py-3 px-4 focus:border-gold focus:outline-none h-24"
            />

            <div className="flex gap-4">
              <button
                onClick={() => setStep("date")}
                className="w-1/3 border border-gray-700 text-gray-400 py-3 uppercase tracking-widest text-sm hover:text-white"
              >
                Назад
              </button>
              <button
                onClick={() => setStep("deposit")}
                className="w-2/3 bg-white text-black py-3 uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
              >
                К оплате
              </button>
            </div>
          </motion.div>
        )}

        {step === "deposit" && (
          <motion.div
            key="deposit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-2xl font-serif text-white mb-2">Депозит</h2>
            <p className="text-gray-400 text-sm mb-6">
              Сумма депозита:{" "}
              <span className="text-gold text-lg">{guests * 5000} ₽</span>
              <br />
              Депозит будет вычтен из вашего счета. Отмена бронирования с
              возвратом средств возможна за 24 часа.
            </p>

            <div className="bg-black p-4 border border-gray-800 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Дата</span>
                <span className="text-white">{date}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Время</span>
                <span className="text-white">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Гости</span>
                <span className="text-white">{guests}</span>
              </div>
            </div>

            <button
              onClick={handleDeposit}
              className="w-full bg-gold text-black py-4 uppercase tracking-widest text-sm font-bold hover:bg-yellow-600 transition-colors"
            >
              Оплатить картой
            </button>
            <button
              onClick={() => setStep("details")}
              className="mt-4 text-gray-500 text-xs uppercase tracking-widest hover:text-white"
            >
              Назад
            </button>
          </motion.div>
        )}

        {step === "waitlist" && (
          <motion.div
            key="waitlist"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-gold mb-2">
              <AlertCircle />
              <h2 className="text-xl font-serif text-white">Мест нет</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              К сожалению, на выбранное время все столы заняты. Вы можете встать
              в лист ожидания. Если стол освободится, мы свяжемся с вами
              первыми.
            </p>

            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-black border border-gray-700 text-white py-3 px-4 focus:border-gold focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full bg-black border border-gray-700 text-white py-3 px-4 focus:border-gold focus:outline-none"
            />

            <div className="flex gap-4">
              <button
                onClick={() => setStep("date")}
                className="w-1/3 border border-gray-700 text-gray-400 py-3 uppercase tracking-widest text-sm hover:text-white"
              >
                Назад
              </button>
              <button
                onClick={handleWaitlist}
                className="w-2/3 bg-white text-black py-3 uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
              >
                В лист ожидания
              </button>
            </div>
          </motion.div>
        )}

        {step === "confirmation" && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="mx-auto text-gold mb-6" size={64} />
            <h2 className="text-3xl font-serif text-white mb-4">
              {isFull ? "Вы в листе ожидания" : "Бронирование подтверждено"}
            </h2>
            <p className="text-gray-400">
              {isFull
                ? "Мы свяжемся с вами, если появится свободный стол."
                : "Подтверждение отправлено на ваш email. Ждем вас."}
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-8 text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs tracking-widest"
            >
              Вернуться на главную
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
