import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { PythonIcon } from "./icons/PythonIcon";
import { TailwindCSSIcon } from "./icons/TailwindCSSIcon";
import { NextJsIcon } from "./icons/NextJsIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4 ">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-muted-foreground text-sm">
            My main JavaScript library for building user interfaces. I love
            working with{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <ReactIcon size={12} />
              React
            </Code>
            because it allows me to create dynamic and interactive web
            applications efficiently, with reusable components and a strong
            ecosystem. I also use{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <NextJsIcon size={12} />
              Next.Js
            </Code>{" "}
            as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <PythonIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
          <p className="text-muted-foreground text-sm">
            I use{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <PythonIcon size={12} />
              Python
            </Code>{" "}
            for backend development, web development. And I usualy use{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              Django
            </Code>
            as a framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindCSSIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            Tailwind CSS
          </h3>
          <p className="text-muted-foreground text-sm">
            I make some of my projects with{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <TailwindCSSIcon size={12} />
              TailwindCSS
            </Code>
            . It is a utility-first CSS framework that enables rapid UI
            development with composable classes and responsive design out of the
            box.
          </p>
        </div>
      </div>
    </Section>
  );
};
