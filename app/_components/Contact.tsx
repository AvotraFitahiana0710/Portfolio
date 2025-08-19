import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./Status";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4 ">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
        {/* 1:11:20 */}
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="flex-1"
          url="https://linkedin.com/in/avotra-fitahiana-rakotoarisoa-60a430328"
          image="edou_pic.png"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyA7juENXGkALsSH13xrmGvs8Rhl6rOM_rw&s"
          name="Avotra"
          description="Add me"
        />
        <ContactCard
          className="flex-1"
          url="https://www.instagram.com/edou_uuu?igsh=MXFiaGJpbnhsZjF1eQ%3D%3D&utm_source=qr"
          image="edou_pic.png"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNPYBLb6Z4PIJSlr6qXbUy8VZ0w2w4BPPVQ&s"
          name="@edou_uuu"
          description="Follow me on Instagram"
        />
        <ContactCard
          className="flex-1"
          url="mailto:avotrafitahianar@gmail.com"
          image="edou_pic.png"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"
          name="avotrafitahianar@gmail.com"
          description="Email me for any collaboration "
        />
      </div>
    </Section>
  );
};
