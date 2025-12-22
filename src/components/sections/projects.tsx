import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/cards/project-card";

import { Project } from "@/lib/data";

interface ProjectsProps {
    projects: Project[];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const ProjectsSection = ({ projects, delay = BLUR_FADE_DELAY * 11 }: ProjectsProps) => {
    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={delay}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out my latest work
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple
                                websites to complex web applications. Here are a few of my
                                favorites.
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {projects.map((project, id) => (
                        <BlurFade
                            key={project._id}
                            delay={delay + (BLUR_FADE_DELAY * 1) + id * 0.05}
                        >
                            <ProjectCard
                                key={project._id}
                                title={project.title ?? ""}
                                description={project.description ?? []}
                                tags={project.technologies ?? []}
                                image={project.image?.asset?.url ?? ""}
                                video={project.video ?? ""}
                                links={project.links ?? []}
                                href={project.links?.[0]?.url ?? ""}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};
