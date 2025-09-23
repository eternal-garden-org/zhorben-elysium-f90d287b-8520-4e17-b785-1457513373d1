import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MemorialHeaderProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  className?: string;
}

export function MemorialHeader({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeaderProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);

  return (
    <div
      className={cn("w-full py-16", className)}
      style={{
        backgroundImage: `url(https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545254694_bg_image_3.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
        {/* Left side - Photo */}
        <div className="flex-shrink-0">
          <div className="w-[480px] h-[480px] overflow-hidden">
            <Image
              src={photoUrl}
              alt={`Фото ${fullName}`}
              width={480}
              height={480}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 space-y-8 text-left">
          {/* Name */}
          <h1 className="text-white text-[40px] font-bold leading-tight">
            {fullName}
          </h1>

          {/* Age badge */}
          <div style={{ marginTop: "40px", marginBottom: "0px" }}>
            <div
              className="inline-block px-4 py-2 rounded-full font-light text-[16px]"
              style={{
                backgroundColor: "#F6B95A",
                color: "#1F1F1F",
              }}
            >
              {age} лет жизни
            </div>
          </div>

          {/* Dates */}
          <div
            style={{ marginTop: "20px" }}
            className="flex items-baseline text-left"
          >
            <div className="inline-flex items-baseline">
              <span
                className="font-light"
                style={{ fontSize: "20px", color: "#8B8B8B" }}
              >
                {birthDayMonth}{" "}
              </span>
              <span
                className="font-bold text-white ml-1"
                style={{ fontSize: "20px" }}
              >
                {birthYear}
              </span>
            </div>

            <span className="mx-4 text-white" style={{ fontSize: "20px" }}>
              —
            </span>

            <div className="inline-flex items-baseline">
              <span
                className="font-bold text-white"
                style={{ fontSize: "20px" }}
              >
                {deathYear}
              </span>
              <span
                className="font-light ml-1"
                style={{ fontSize: "20px", color: "#8B8B8B" }}
              >
                {" "}
                {deathDayMonth}
              </span>
            </div>
          </div>

          {/* Location blocks */}
          <div className="flex flex-col space-y-4 mt-8">
            {/* Birth place */}
            <div className="flex flex-col">
              <div
                className="flex items-center"
                style={{ fontSize: "14px", color: "#8B8B8B" }}
              >
                <MapPin
                  size={16}
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#8B8B8B" }}
                />
                Место рождения
              </div>
              <div
                className="text-white font-bold"
                style={{ fontSize: "20px" }}
              >
                {birthPlace}
              </div>
            </div>

            {/* Death place */}
            <div className="flex flex-col">
              <div
                className="flex items-center"
                style={{ fontSize: "14px", color: "#8B8B8B" }}
              >
                <MapPin
                  size={16}
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#8B8B8B" }}
                />
                Место смерти
              </div>
              <div
                className="text-white font-bold"
                style={{ fontSize: "20px" }}
              >
                {deathPlace}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}