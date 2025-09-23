"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

interface MemorialPhotosProps {
  className?: string;
}

const photoData = [
  {
    id: "1",
    src: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545373514_photo_3_1.png",
    alt: "Фотография 1",
  },
  {
    id: "2",
    src: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545384628_photo_3_2.png",
    alt: "Фотография 2",
  },
  {
    id: "3",
    src: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545394228_photo_3_3.png",
    alt: "Фотография 3",
  },
  {
    id: "4",
    src: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545401703_photo_3_4.png",
    alt: "Фотография 4",
  },
];

export function MemorialPhotos({ className }: MemorialPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState(photoData[0]);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-12">
        <Typography.H1 className="text-white text-[40px] font-normal">
          Фотографии
        </Typography.H1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {photoData.map((photo) => (
            <div
              key={photo.id}
              className={cn(
                "w-20 h-20 rounded-sm overflow-hidden cursor-pointer transition-all",
                selectedPhoto.id === photo.id
                  ? "opacity-100 border-2 border-[#F6B95A]"
                  : "opacity-50 hover:opacity-75",
              )}
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main photo */}
        <div className="w-[600px] h-[600px] rounded-lg overflow-hidden">
          <Image
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}