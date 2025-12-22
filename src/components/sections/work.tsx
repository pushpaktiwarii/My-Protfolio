import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/cards/resume-card";
import { WorkExperience } from "@/lib/data";
import { portableTextToPlainText } from "@/lib/utils";

interface WorkProps {
    work: WorkExperience[];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const WorkSection = ({ work, delay = BLUR_FADE_DELAY * 5 }: WorkProps) => {
    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </BlurFade>
                {work.map((item, id) => (
                    <BlurFade key={item._id} delay={delay + (id + 1) * 0.05}>
                        {/* Adjusted math slightly: original was DELAY*6 + id*0.05. 
                 If delay passed is DELAY*5, then DELAY*6 is delay + DELAY*1.
             */}
                        <ResumeCard
                            key={item._id}
                            logoUrl={item.logo?.asset?.url ?? ""}
                            altText={item.company ?? ""}
                            title={item.company ?? ""}
                            subtitle={item.title ?? ""}
                            href={item.url ?? ""}
                            period={`${item.startDate} - ${item.endDate ?? "Present"}`}
                            description={portableTextToPlainText(item.description!)}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
};
