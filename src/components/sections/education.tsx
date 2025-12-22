import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";

import { Education } from "@/lib/data";

interface EducationProps {
    education: Education[];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const EducationSection = ({ education, delay = BLUR_FADE_DELAY * 7 }: EducationProps) => {
    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                {education.map((item, id) => (
                    <BlurFade key={item._id} delay={delay + (id * 0.05) + (BLUR_FADE_DELAY * 1)}>
                        {/* 
            Original: DELAY * 8 + id*0.05.
            Here base is DELAY * 7. 
            So we need + DELAY*1.
          */}
                        <ResumeCard
                            key={item._id}
                            href={item.url ?? ""}
                            logoUrl={item.logo?.asset?.url ?? ""}
                            altText={item.school ?? ""}
                            title={item.school ?? ""}
                            subtitle={item.degree ?? ""}
                            period={`${item.startDate} - ${item.endDate}`}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
};
