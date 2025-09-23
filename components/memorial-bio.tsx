"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MemorialBioProps {
  className?: string;
}

const bioData = [
  {
    id: "biography",
    title: "Биография",
    content:
      "Александр Викторович Карпук родился в Бресте. С ранних лет он проявлял интерес к науке и искусству. После окончания школы Александр поступил в университет, где изучал инженерное дело. В своей карьере он достиг значительных успехов, работая над различными проектами в области технологий. В свободное время Александр увлекается фотографией и путешествиями, что позволяет ему открывать новые горизонты и вдохновляться окружающим миром.",
  },
  {
    id: "hobbies",
    title: "Увлечения",
    content:
      "Александр был человеком разносторонних интересов. Он увлекался фотографией и мог часами исследовать городские пейзажи в поисках идеального кадра. Любил путешествовать и открывать новые места, всегда возвращаясь домой с множеством историй. Его страстью была также музыка - он играл на гитаре и собрал внушительную коллекцию винила. В свободное время читал исторические романы и изучал архитектуру древних городов.",
  },
  {
    id: "education",
    title: "Образование",
    content:
      "Александр получил высшее техническое образование в Брестском государственном техническом университете по специальности инженерное дело. Во время учебы он показал себя как талантливый студент, активно участвующий в научных исследованиях и студенческих проектах. Позже он продолжил свое профессиональное развитие, посещая курсы повышения квалификации и семинары по современным технологиям. Его тяга к знаниям не ограничивалась только профессиональной сферой - он постоянно изучал что-то новое.",
  },
];

export function MemorialBio({ className }: MemorialBioProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-5"
        defaultValue="biography"
      >
        {bioData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={cn(
              "border rounded-lg p-6 transition-all",
              "data-[state=open]:border-white",
              "data-[state=closed]:border-[#2D2D2D]",
            )}
          >
            <AccordionTrigger className="hover:no-underline">
              <span
                className="text-white font-bold text-left"
                style={{ fontSize: "20px" }}
              >
                {item.title}
              </span>
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200"
                style={{ color: "#F6B95A" }}
              />
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <p style={{ fontSize: "16px", color: "#8B8B8B" }}>
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}