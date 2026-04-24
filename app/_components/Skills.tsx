import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { Code } from "./Code";
import { FlutterIcon } from "./icons/FlutterIcon";
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
          <TypescriptIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">TypeScript</h3>
          <p className="text-muted-foreground text-sm">
            My main language for web development. I love working with{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <TypescriptIcon size={12} />
              TypeScript
            </Code>
            because it brings static typing, safer refactors and a better
            developer experience to JavaScript projects. I also use{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <NextJsIcon size={12} />
              Next.Js
            </Code>{" "}
            as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <FlutterIcon size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Flutter</h3>
          <p className="text-muted-foreground text-sm">
            I use{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              <FlutterIcon size={12} />
              Flutter
            </Code>{" "}
            to build cross-platform{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              mobile
            </Code>{" "}
            and{" "}
            <Code className="inline-flex items-center gap-1 text-xs">
              iOS
            </Code>{" "}
            applications with a single codebase, native performance and a rich
            set of customizable widgets.
          </p>
        </div>
      </div>
    </Section>
  );
};
