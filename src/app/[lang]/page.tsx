import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { FooterContact } from "@/components/sections/FooterContact";
import { SplitScreenLayout } from "@/components/shell/SplitScreenLayout";
import { getDictionary } from "@/i18n/getDictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dict = await getDictionary(lang as "en" | "es");

  const navItems = [
    { name: dict.nav.about, href: "#about", id: "about" },
    { name: dict.nav.experience, href: "#experience", id: "experience" },
    { name: dict.nav.work, href: "#work", id: "projects" },
    { name: dict.nav.skills, href: "#skills", id: "skills" },
    { name: dict.nav.resume, href: "#resume", id: "resume" },
    { name: dict.nav.contact, href: "#contact", id: "contact" },
  ];

  return (
    <SplitScreenLayout dict={dict} navItems={navItems} theme="teal">
      <AboutSection dict={dict.home} />
      <ExperienceSection lang={lang} dict={dict.home} />
      <FeaturedWorkSection lang={lang} dict={dict.home} />
      <SkillsSection lang={lang} dict={dict.home} />
      <ResumeSection dict={dict.home} />
      <FooterContact dict={dict.home} />
    </SplitScreenLayout>
  );
}
