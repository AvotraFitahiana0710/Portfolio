import { Button } from "@/components/ui/button";
import Link from "next/link";

export const DownloadButton = (props: { className: string }) => {
  return (
    <Link href="CV_RAKOTOARISOA_Avotra_Fitahiana.pdf">
      <Button className={props.className} variant={"outline"}>
        Download CV
      </Button>
    </Link>
  );
};
