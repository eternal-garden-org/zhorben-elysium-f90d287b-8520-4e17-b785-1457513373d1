"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface MemorialQuotesProps {
  className?: string;
}

const quotes = [
  {
    text: "Ты по жизни нас вел, ты себя не жалел, ты так рано ушел, ты так много успел. И не верит никто, что тебя рядом нет, что ушел в небытье. Сын, муж, дед, отец — ЧЕЛОВЕК!",
    author: "Цитата Александра",
  },
  {
    text: "Отец не просто дал мне жизнь — он показал, как наполнить её смыслом. Его мудрые советы и личный пример научили меня тому, что ценность жизни определяется не количеством прожитых лет, а тем, сколько добра ты успел сделать за это время.",
    author: "Слова дочери",
  },
  {
    text: "Дедушка всегда говорил мне: 'София, мечтай смело, как будто неудачи не существует.' Благодаря ему я поверила в свои силы. Даже сейчас, когда его нет рядом, я слышу его голос, поддерживающий меня в трудную минуту.",
    author: "Внучка София",
  },
  {
    text: "Александр Викторович был не просто коллегой, а наставником для всех нас. Его профессионализм, честность и умение найти подход к каждому сотруднику сделали нашу компанию одной семьей. Его наследие живет в каждом здании, которое мы создали вместе.",
    author: "Коллега по работе",
  },
];

export function MemorialQuotes({ className }: MemorialQuotesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
          }}
          setApi={setApi}
          className="w-full mx-auto"
        >
          <CarouselContent>
            {quotes.map((quote, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative">
                  {/* Author badge */}
                  <div className="flex justify-center relative z-10">
                    <div
                      className="inline-block px-4 py-2 rounded-full font-light text-[16px] transform -translate-y-1/2"
                      style={{
                        backgroundColor: "#F6B95A",
                        color: "#1F1F1F",
                      }}
                    >
                      {quote.author}
                    </div>
                  </div>

                  <div
                    className="relative p-8 pt-4 w-full"
                    style={{
                      backgroundColor: "#2D2D2D",
                      backgroundImage: `url(https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545444092_bg_card_pattern_3.png)`,
                      backgroundBlendMode: "overlay",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.8,
                    }}
                  >
                    {/* Left quote icon */}
                    <Quote
                      className="absolute top-4 left-4 transform -translate-y-1/2"
                      size={24}
                      style={{ color: "#F6B95A" }}
                    />

                    {/* Right quote icon (rotated) */}
                    <Quote
                      className="absolute bottom-4 right-4 rotate-180 transform translate-y-1/2"
                      size={24}
                      style={{ color: "#F6B95A" }}
                    />

                    <blockquote className="px-8">
                      <p className="text-lg text-white text-center leading-relaxed">
                        {quote.text}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex justify-center">
            <div className="flex gap-4">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "cursor-pointer transition-all duration-300 flex items-center justify-center",
                  )}
                >
                  <div
                    className={cn(
                      "rounded-full transition-all",
                      index === current
                        ? "bg-[#F6B95A] w-3 h-3"
                        : "bg-[#2D2D2D] w-2 h-2 hover:bg-[#F6B95A]/60",
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}