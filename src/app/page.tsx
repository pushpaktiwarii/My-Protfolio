import { CinematicSection } from "@/components/sections/cinematic-section";
import {
  getAuthorData,
  getEducation,
  getProjects,
  getWorkExperience,
} from "@/lib/data";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { EducationSection } from "@/components/sections/education";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export default async function Page() {
  const [author, work, education, projects] = await Promise.all([
    getAuthorData(),
    getWorkExperience(),
    getEducation(),
    getProjects(),
  ]);

  if (!author) return null;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection author={author} />
      <AboutSection summary={author.summary ?? []} />
      <WorkSection work={work} />
      <EducationSection education={education} />
      <SkillsSection skills={author.skills ?? []} />
      <CinematicSection />
      <ProjectsSection projects={projects} />
      <ContactSection social={author.social} />
      <footer className="pb-12 sm:pb-6 text-center text-xs text-muted-foreground">
        <p>
          {/* Footer content if any */}
        </p>
      </footer>
    </main>
  );
}
