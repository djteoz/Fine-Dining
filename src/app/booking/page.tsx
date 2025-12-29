import { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Бронирование | LUMIÈRE",
  description: "Забронировать стол.",
};

export default function BookingPage() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-background flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
        Бронирование
      </h1>
      <BookingForm />
    </div>
  );
}
