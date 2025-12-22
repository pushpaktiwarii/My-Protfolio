import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portableTextToPlainText } from "@/lib/utils";
import { Author } from "@/lib/data";
// Actually, looking at page.tsx, getAuthorData returns 'author'. I need to see the type. 
// I'll assume 'any' or check data.ts later, but for now I'll use simple props.
// Wait, page.tsx passes data. I should make these components accept props to keep them pure(ish) 
// OR I can fetch data inside them if they are server components. 
// `page.tsx` fetches data and renders. Passing props is better for separation of concerns if I want to keep page.tsx as the data fetcher.
// The plan said "Extract sections", usually implies dumb components receiving props.

interface HeroProps {
    author: Author;
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const HeroSection = ({ author, delay = BLUR_FADE_DELAY }: HeroProps) => {
    if (!author) return null;

    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFadeText
                            delay={delay}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`Hi, I'm ${author.name?.split(" ")[0] ?? ""}`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={delay}
                            text={portableTextToPlainText(author.description!)}
                        />
                    </div>
                    <BlurFade delay={delay}>
                        <Avatar className="size-28 border">
                            <AvatarImage
                                alt={author.name ?? ""}
                                src={author.avatar?.asset?.url ?? ""}
                                className="object-cover"
                            />
                            <AvatarFallback>{author.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};
