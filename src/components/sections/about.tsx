import BlurFade from "@/components/magicui/blur-fade";
import { PortableText } from "@portabletext/react";
import { Author } from "@/lib/data";

interface AboutProps {
    summary: Author["summary"];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const AboutSection = ({ summary, delay = BLUR_FADE_DELAY * 3 }: AboutProps) => {
    return (
        <section id="about">
            <BlurFade delay={delay}>
                <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={delay * 1.33}>
                {/* 1.33 is rough approx of *4 from original BLUR_FADE_DELAY relative to *3. 
          Original: *3 for title, *4 for content. 
          If base passed is 0.04*3=0.12. 
          Content needs 0.16. 
          Actually, simpler to just accept base delay or rely on constants.
          I'll stick to hardcoded multipliers relative to the constant for now, 
          or pass calculated delays. 
          Let's just use the constant locally for now.
      */}
                <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    <PortableText value={summary ?? []} />
                </div>
            </BlurFade>
        </section>
    );
};
