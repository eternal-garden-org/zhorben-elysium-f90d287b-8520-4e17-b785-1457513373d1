import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

interface MemorialContactsProps {
  className?: string;
}

const contactsData = [
  {
    id: "1",
    name: "Ольга Сергеевна",
    relation: "Жена",
    phone: "+375 (29) 123-45-67",
    email: "olga.karpuk@mail.by",
  },
  {
    id: "2",
    name: "Полина",
    relation: "Дочь",
    phone: "+375 (29) 123-45-67",
  },
];

export function MemorialContacts({ className }: MemorialContactsProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <div className="text-center mb-12">
        <Typography.H1 className="text-white text-[40px] font-normal">
          Контакты
        </Typography.H1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className="min-w-[375px] rounded-lg p-10 shadow-md"
            style={{
              maxWidth: "450px",
              backgroundColor: "#2D2D2D",
              backgroundImage: `url(https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/f90d287b-8520-4e17-b785-1457513373d1/photo/1758545444092_bg_card_pattern_3.png)`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.8,
            }}
          >
            <div className="space-y-4 text-left">
              <div className="space-y-1">
                <p style={{ fontSize: "12px", color: "#8B8B8B" }}>
                  {contact.relation}
                </p>
                <h3
                  className="text-white font-bold"
                  style={{ fontSize: "16px", marginTop: "4px" }}
                >
                  {contact.name}
                </h3>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="size-5" style={{ color: "#8B8B8B" }} />
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="text-white hover:text-primary transition-colors"
                    style={{ fontSize: "16px" }}
                  >
                    {contact.phone}
                  </a>
                </div>

                {contact.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="size-5" style={{ color: "#8B8B8B" }} />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white hover:text-primary transition-colors"
                      style={{ fontSize: "16px" }}
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}