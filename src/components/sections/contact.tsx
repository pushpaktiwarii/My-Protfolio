import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { Author } from "@/lib/data";

interface ContactProps {
    social: Author["social"];
    delay?: number;
}

const BLUR_FADE_DELAY = 0.04;

export const ContactSection = ({ social, delay = BLUR_FADE_DELAY * 16 }: ContactProps) => {
    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
                <BlurFade delay={delay}>
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Contact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Want to chat? Feel free to{" "}
                            <Link
                                href={`mailto:${social?.email ?? ""}`}
                                className="text-blue-500 hover:underline"
                            >
                                send me an email
                            </Link>{" "}
                            or reach out on{" "}
                            <Link
                                href={social?.github ?? ""}
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                            . I&apos;ll respond whenever I can.
                        </p>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};
