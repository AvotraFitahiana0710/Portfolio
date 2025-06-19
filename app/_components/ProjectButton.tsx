import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";

export const ProjectButton = (props: { className: string }) => {
  return (
    <Link href="https://github.com/AvotraFitahiana0710">
      <Button className={cn(props.className,"inline-flex gap-2")}>See all my projects on GitHub <GithubIcon size={12}/></Button>
    </Link>
  );
};
