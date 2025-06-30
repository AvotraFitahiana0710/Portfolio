import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  type LucideIcon,
  StickyNote,
  Rss,
  ArrowUpRight,
  CalendarCheck,
  Gamepad,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] p-4 flex flex-col gap-4 w-full">
          <p className="text-lg text-muted-foreground">Mini Project</p>
          <div className="flex flex-col gap-2">
            {SIDE_PROJECT.map((project) => (
              <SideProject
                key={project.title}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work) => (
              <Work key={work.title} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-4">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://www.instagram.com/edou_uuu?igsh=MXFiaGJpbnhsZjF1eQ%3D%3D&utm_source=qr"
            image="https://media.licdn.com/dms/image/v2/D4D03AQFZ0WZXjh0iYg/profile-displayphoto-shrink_800_800/B4DZWi7711H4Ac-/0/1742195377450?e=1752710400&v=beta&t=hpB6mbvaGdVbUTUm8wcN4MYLGuSudzcTFVlzRBGBkiI"
            name="@edou_uuu"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNPYBLb6Z4PIJSlr6qXbUy8VZ0w2w4BPPVQ&s" // Image Twitter ou instagram
            description="Follow me on Instagram"
          />
          <ContactCard
            url="https://linkedin.com/in/avotra-fitahiana-rakotoarisoa-60a430328"
            name="RAKOTOARISOA Avotra"
            image="https://media.licdn.com/dms/image/v2/D4D03AQFZ0WZXjh0iYg/profile-displayphoto-shrink_800_800/B4DZWi7711H4Ac-/0/1742195377450?e=1752710400&v=beta&t=hpB6mbvaGdVbUTUm8wcN4MYLGuSudzcTFVlzRBGBkiI"
            mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyA7juENXGkALsSH13xrmGvs8Rhl6rOM_rw&s" // image linkedIn
            description="Join me on Linkedin"
          />
        </Card>
      </div>
    </Section>
  );
};

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link href={props.url || "#"} className={props.className}>
      <Card className="p-3 flex bg-accent/10 hover:bg-accent/30 transition-colors group items-starts gap-4">
        <div className="flex gap-2">
          <div className="relative flex-shrink-0">
            <img
              src={props.image}
              alt={props.name}
              className="w-10 h-10 rounded-full object-contain"
            />
            <img
              src={props.mediumImage}
              alt={props.name}
              className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-sx font-semibold">{props.name}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.description}</p>
          </div>

          <ArrowUpRight
            className="m-3 group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
            size={16}
          />
        </div>
      </Card>
    </Link>
  );
};

const SIDE_PROJECT: SideProjectProps[] = [
  {
    Logo: UserCircle,
    title: "Portfolio",
    description: "Made with Next.js, React, Tailwind CSS",
    url: "https://github.com/AvotraFitahiana0710/Portfolio.git",
  },
  {
    Logo: StickyNote,
    title: "Task manager",
    description:
      "Web Application made with NextJs, React, tailwind CSS and Prisma",
    url: "https://github.com/AvotraFitahiana0710/DB-enligne.git",
  },
  {
    Logo: CalendarCheck,
    title: "Gestion de pointage",
    description: "Web Application made with Django/Python and Bootstrap",
    url: "https://github.com/AvotraFitahiana0710/Stage-dev.git",
  },
  {
    Logo: Rss,
    title: "Vakansy",
    description: "Application for managing client for a ship",
    url: "https://github.com/AvotraFitahiana0710/voyage.git",
  },
  {
    Logo: Gamepad,
    title: "Fanorona",
    description: "Mini-game made with Python",
    url: "https://github.com/AvotraFitahiana0710/mini-game.git",
  },
];

type SideProjectProps = {
  Logo: LucideIcon | string;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: {
  Logo: LucideIcon | string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        {" "}
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image:
      "https://static.wikia.nocookie.net/logopedia/images/2/2d/ORTM_%28Madagascar%29_Logo.png/revision/latest/scale-to-width-down/284?cb=20211122094706",
    title: "Full-Stack Developer",
    role: "Trainee",
    date: " January 2025 april 2025",
    url: "/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        {" "}
        <p className="text-sm font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
