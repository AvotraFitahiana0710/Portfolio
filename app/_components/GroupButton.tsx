import { DownloadButton } from "./DownloadButton";
import { ProjectButton } from "./ProjectButton";
import { Section } from "./Section";

export const GroupButton = () => {
  return (
    <Section className="flex max-md:flex-col gap-4 items-center">
      <ProjectButton className="w-3xs md:w-fit rounded-xl bg-accent border-1 text-foreground" />
      <DownloadButton className="w-3xs md:w-fit hover:bg-amber-500 rounded-xl" />
    </Section>
  );
};
