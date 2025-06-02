import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
export const Header = () => {
	return (
		<header className="sticky top-0 py-4 bg-background z-50">
			<Section className="flex items-baseline">
				<h1 className="text-lg font-bold text-primary">avotrafitahiana.com</h1>
				<div className="flex-1" />
				<ul className="flex items-center gap-2">
					<Link
						href="https://github.com/AvotraFitahiana0710"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<GithubIcon size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://linkedin.com/in/avotra-fitahiana-rakotoarisoa-60a430328"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<LinkedInIcon size={12} className="text-foreground" />
					</Link>
					<Link
						href="https://www.instagram.com/edou_uuu?igsh=MXFiaGJpbnhsZjF1eQ%3D%3D&utm_source=qr"
						className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
					>
						<InstagramIcon size={12} className="text-foreground" />
					</Link>
				</ul>
			</Section>
		</header>
	);
};
