"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialWordsProps {
  className?: string;
}

const wordsData = [
  {
    id: "1",
    text: "Мой папа, Александр, был невероятным человеком. Он всегда умел находить радость в мелочах и делал каждый день особенным. Его смех наполнял дом теплом, а доброта и забота о других вдохновляли меня. Я помню, как он учил меня кататься на велосипеде, поддерживая меня даже в самые трудные моменты. Папа всегда говорил, что важно следовать своим мечтам, и я надеюсь, что смогу сделать его гордым.",
    author: {
      name: "Елена Карпук",
      relation: "Дочь",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3276&auto=format&fit=crop",
    },
  },
  {
    id: "2",
    text: "Александр был моим лучшим другом на протяжении 40 лет. Мы вместе учились в институте, вместе начинали свой путь в строительстве. Он был не просто коллегой — он был человеком, который никогда не подводил, всегда держал слово. Я помню, как в трудные 90-е он помог мне с работой, когда я остался без средств к существованию. Такая верность дружбе и человеческая порядочность редко встречаются в наше время.",
    author: {
      name: "Виктор Павлович",
      relation: "Друг",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3270&auto=format&fit=crop",
    },
  },
  {
    id: "3",
    text: "Наши 35 лет вместе пролетели как один день. Саша был не просто мужем, он был моей опорой, моим защитником, моим лучшим другом. Он мог заставить меня улыбаться даже в самые тяжелые дни. Каждое утро готовил мне кофе, даже когда спешил на работу. Его забота и любовь наполняли наш дом. Теперь, когда его нет рядом, я чувствую его присутствие в каждом уголке нашего дома, в каждом воспоминании, которое мы создали вместе.",
    author: {
      name: "Ольга Сергеевна",
      relation: "Жена",
      avatar:
        "https://images.unsplash.com/photo-1544222575-74d0d211d516?q=80&w=3282&auto=format&fit=crop",
    },
  },
  {
    id: "4",
    text: "Дедушка научил меня самому важному — никогда не сдаваться. Он часто брал меня с собой на стройку, показывал, как из обычных кирпичей вырастают дома, в которых потом живут люди. 'Максим, — говорил он, — важно не то, как быстро ты строишь, а насколько прочным будет результат'. Эти слова стали моим жизненным девизом. Я благодарен судьбе за то, что у меня был такой дедушка, который не просто любил, но и передал мне свою мудрость.",
    author: {
      name: "Максим Карпук",
      relation: "Внук",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop",
    },
  },
];

export function MemorialWords({ className }: MemorialWordsProps) {
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

  const scrollTo = (index: number) => api?.scrollTo(index);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-12">
        <Typography.H1 className="text-white text-[40px] font-normal">
          Слова близких
        </Typography.H1>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {wordsData.map((word) => (
            <CarouselItem key={word.id} className="basis-full">
              <div className="max-w-4xl mx-auto">
                <div className="border border-[#2D2D2D] rounded-lg p-8 bg-transparent">
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                      <AvatarImage
                        src={word.author.avatar}
                        alt={word.author.name}
                        className="object-cover w-full h-full"
                      />
                      <AvatarFallback>
                        {word.author.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col justify-between h-11">
                      <h3
                        className="font-normal text-white leading-none"
                        style={{ fontSize: "20px" }}
                      >
                        {word.author.name}
                      </h3>
                      <p
                        className="leading-none"
                        style={{ fontSize: "16px", color: "#8B8B8G" }}
                      >
                        {word.author.relation}
                      </p>
                    </div>
                  </div>

                  <p className="text-white text-[20px] leading-relaxed">
                    {word.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex justify-center">
        <div className="flex gap-4">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              onClick={() => scrollTo(index)}
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
    </div>
  );
}