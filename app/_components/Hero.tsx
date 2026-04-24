import { Section } from "./Section";
import { TypescriptIcon } from "./icons/TypescriptIcon";
import { FlutterIcon } from "./icons/FlutterIcon";
import { Code } from "./Code";
export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          RAKOTOARISOA Avotra Fitahiana
        </h2>
        <h3 className="text-3xl font-caption">Developper full-Stack</h3>
        <p className="text-base">
          I am a full stack developper from{" "}
          <Code className="text-xs">🇲🇬 Madagascar</Code> with a passion for
          creating interactive and responsive web application. I love working
          with{" "}
          {/* <Link>
          </Link> */}
          <Code className="inline-flex items-center gap-1 text-xs">
            <TypescriptIcon size={12} className="inline" />
            TypeScript
          </Code>
          . I am also passionate about mobile development with{" "}
          <Code className="inline-flex items-center gap-1 text-xs">
            <FlutterIcon size={12} className="inline" />
            Flutter
          </Code>
          , building cross-platform apps for mobile and iOS. I am a quick
          learner and I am always looking to expand my knowledge and skill
          set. I am a team and solo player, and I am excited to work with
          anothers to create amazing applications.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="edou_pic.png"
          alt="RAKOTOARISOA's picture"
          className="w-full h-auto rounded-full mw-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
