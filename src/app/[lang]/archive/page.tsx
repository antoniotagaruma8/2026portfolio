import { archiveData, ArchiveProject } from "@/lib/archive-data";
import ArchiveClient from "./ArchiveClient";
import en from "@/i18n/dictionaries/en.json";
import es from "@/i18n/dictionaries/es.json";
import { SplitScreenLayout } from "@/components/shell/SplitScreenLayout";

// Revalidate the GitHub API fetch every 1 hour
export const revalidate = 3600;

export default async function ArchivePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const fullDict = lang === "es" ? es : en;
  const dict = fullDict.archive;

  let githubRepos: any[] = [];
  
  try {
    const res = await fetch("https://api.github.com/users/antoniotagaruma8/repos?sort=updated&per_page=100");
    if (res.ok) {
      githubRepos = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
  }

  const currentArchiveData = archiveData[lang as keyof typeof archiveData] || archiveData.en;

  // Filter out repos that are already in the curated archiveData
  const curatedGithubUrls = currentArchiveData.map(p => p.github.toLowerCase());
  const curatedTitles = currentArchiveData.map(p => p.title.toLowerCase());

  // Repos that should be completely hidden from the archive
  const ignoredRepos = ["ecochatbot", "schedule", "learninglessonlog"];

  const autoSyncedProjects: ArchiveProject[] = githubRepos
    .filter(repo => !repo.fork) // Don't show forked repos
    .filter(repo => !ignoredRepos.includes(repo.name.toLowerCase())) // Hide explicitly ignored repos
    .filter(repo => {
      const repoUrl = repo.html_url.toLowerCase();
      const repoName = repo.name.toLowerCase().replace(/-/g, ' ');
      
      // Check if it's already curated
      const isCurated = curatedGithubUrls.includes(repoUrl) || 
                        curatedTitles.some(title => title.includes(repoName) || repoName.includes(title));
      
      return !isCurated;
    })
    .map(repo => ({
      id: repo.name,
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
      category: "GitHub Auto-Sync",
      tech: repo.language ? [repo.language] : ["Markdown"],
      github: repo.html_url,
      link: repo.homepage || undefined,
      year: new Date(repo.created_at).getFullYear().toString()
    }));

  // Merge them (curated first, then auto-synced)
  const allProjects = [...currentArchiveData, ...autoSyncedProjects].filter(
    (project) => project.link && project.link.trim() !== ""
  );

  return (
    <SplitScreenLayout dict={fullDict}>
      <ArchiveClient initialProjects={allProjects} dict={dict} />
    </SplitScreenLayout>
  );
}
