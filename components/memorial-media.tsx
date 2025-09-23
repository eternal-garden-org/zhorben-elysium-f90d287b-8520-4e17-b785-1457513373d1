"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { CustomAudioPlayer } from "@/components/custom-audio-player";
import { Typography } from "@/components/ui/typography";

interface MemorialMediaProps {
  className?: string;
}

const mediaData = {
  videos: [
    {
      id: "1",
      youtubeId: "dQw4w9WgXcQ",
      thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      id: "2",
      youtubeId: "dQw4w9WgXcQ",
      thumbnailUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
  ],
  audio: {
    title: "Песня Александра",
    src: "https://examplefiles.org/files/audio/mp3-example-file-download-1min.mp3",
  },
};

export function MemorialMedia({ className }: MemorialMediaProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-12">
        <Typography.H1 className="text-white text-[40px] font-normal">
          Медиафайлы
        </Typography.H1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mediaData.videos.map((video) => (
            <div key={video.id} className="flex flex-col space-y-2">
              <div
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={video.thumbnailUrl}
                    alt="Видео"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div
                    className="size-16 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#F6B95A" }}
                  >
                    <Play className="size-8 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Typography.H2 className="text-white text-[40px] font-normal mb-8">
            {mediaData.audio.title}
          </Typography.H2>
          <div className="flex justify-center">
            <CustomAudioPlayer src={mediaData.audio.src} />
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="max-w-4xl w-full aspect-video relative">
            <iframe
              src={`https://www.youtube.com/embed/${
                mediaData.videos.find((v) => v.id === activeVideo)?.youtubeId
              }?autoplay=1`}
              className="w-full h-full rounded-lg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideo(null);
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}