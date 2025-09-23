import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeader } from "@/components/memorial-header";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHeader
        fullName="Александр Викторович Карпук"
        birthDate="1981-02-22"
        deathDate="2025-09-22"
        photoUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545294777_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
      />
      <Container>
        <MemorialBio />
        <MemorialInfo />
        <MemorialPhotos />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}