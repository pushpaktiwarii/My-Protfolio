import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
    skills: string[];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const SkillsSection = ({ skills, delay = BLUR_FADE_DELAY * 9 }: SkillsProps) => {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <BlurFade delay={delay}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-1">
                    {skills?.map((skill, id) => (
                        <BlurFade key={skill} delay={delay + (BLUR_FADE_DELAY) + id * 0.05}>
                            <Badge key={skill}>{skill}</Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
