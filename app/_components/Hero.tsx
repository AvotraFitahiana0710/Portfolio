import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { Code } from "./Code";
export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          RAKOTOARISOA Avotra Fitahiana
        </h2>
        <h3 className="text-3xl font-caption">Developper full-Stack Junior</h3>
        <p className="text-base">
          I am a full stack developper from <Code>🇲🇬 Madagascar</Code> with a
          passion for creating interactive and responsive web application. I
          love working with{" "}
          {/* <Link>
          </Link> */}
          <Code className="inline-flex items-center gap-1">
            <JavascriptIcon size={16} className="inline" />
            Javascript
          </Code>
          . I am a quick learner and I am always looking to expand my knowledge
          and skill set. I am a team and solo player, and I am excited to work
          with anothers to create amazing applications.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFZ0WZXjh0iYg/profile-displayphoto-shrink_800_800/B4DZWi7711H4Ac-/0/1742195377450?e=1752710400&v=beta&t=hpB6mbvaGdVbUTUm8wcN4MYLGuSudzcTFVlzRBGBkiI"
          alt="RAKOTOARISOA's picture"
          className="w-full h-auto rounded-full mw-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
