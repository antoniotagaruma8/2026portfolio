import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2, GraduationCap, Lightbulb, Activity, CheckCircle, Database, Layers, Wrench, PenTool, LayoutTemplate, PlayCircle, Star, Award, BookOpen, ShieldCheck, Zap, Gamepad2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import en from '@/i18n/dictionaries/en.json';
import es from '@/i18n/dictionaries/es.json';
import { archiveData } from '@/lib/archive-data';
import { ZoomableImage } from '@/components/mdx/ZoomableImage';
import { ZoomableVideo } from '@/components/mdx/ZoomableVideo';
import { AutoScreenshotGallery } from '@/components/mdx/AutoScreenshotGallery';

// Function to fetch and parse the MDX file
async function getPost(slug: string, lang: string) {
  // First try to find the localized file
  let filePath = path.join(process.cwd(), 'src', 'content', 'work', lang, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    // Fallback to the root English file if the localized version doesn't exist
    filePath = path.join(process.cwd(), 'src', 'content', 'work', `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return { frontmatter: data, content };
}

// Generate static params for all projects by scanning the content directory
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'work');
  
  // Read all .mdx files from the English content directory
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
  const slugs = files.map(f => f.replace('.mdx', ''));
  
  // Also add any archive projects that might not have standalone MDX files yet
  const archiveSlugs = archiveData.en.filter((p: any) => p.problem).map((p: any) => p.id);
  
  const allSlugs = [...new Set([...slugs, ...archiveSlugs])];
  const params = [];
  
  for (const lang of ['en', 'es']) {
    for (const slug of allSlugs) {
      params.push({ lang, slug });
    }
  }
  
  return params;
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const post = await getPost(slug, lang);
  const dict = lang === 'es' ? es.work : en.work;

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-6 py-12 lg:py-24 max-w-4xl">
      {/* Back Button */}
      <Link href={`/${lang}/#projects`} className="inline-flex items-center gap-2 text-accent-teal hover:bg-accent-teal/10 px-4 py-2 rounded-md transition-colors -ml-4 mb-12 font-medium">
        <ArrowLeft size={16} /> {dict.back}
      </Link>

      {/* Case Study Header */}
      <header className="mb-12">
        <div className="text-xs font-semibold text-accent-teal tracking-[1.5px] uppercase mb-3 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-accent-teal"></span> {dict.caseStudy || "Case Study"}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-[-0.5px] leading-[1.2] mb-4">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.subtitle && (
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8 font-medium">
            {post.frontmatter.subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {post.frontmatter.tech?.map((tech: string) => (
            <span key={tech} className="bg-[#132d21] text-accent-teal px-3 py-1 rounded-full text-xs font-medium border border-accent-teal/20">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {post.frontmatter.link && (
            post.frontmatter.link === 'soon' ? (
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#30363d] text-muted-foreground/50 bg-[#0d1117]/50 text-sm font-medium cursor-not-allowed" title="Coming Soon">
                {dict.liveDemo} (Soon) <ExternalLink size={16} strokeWidth={1.5} />
              </span>
            ) : (
              <a href={post.frontmatter.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-accent-teal text-accent-teal hover:bg-accent-teal/10 transition-colors text-sm font-medium">
                {dict.liveDemo} <ExternalLink size={16} strokeWidth={1.5} />
              </a>
            )
          )}
          {post.frontmatter.github && (
            post.frontmatter.github === 'soon' ? (
              <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#30363d] text-muted-foreground/50 bg-[#0d1117]/50 text-sm font-medium cursor-not-allowed" title="Coming Soon">
                {dict.sourceCode} (Soon) <Code2 size={16} strokeWidth={1.5} />
              </span>
            ) : (
              <a href={post.frontmatter.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-[#30363d] text-muted-foreground hover:text-foreground hover:bg-[#30363d] transition-colors text-sm font-medium">
                {dict.sourceCode} <Code2 size={16} strokeWidth={1.5} />
              </a>
            )
          )}
        </div>
      </header>

      {/* MDX Content Area */}
      <div className="w-full">
        <MDXRemote 
          source={post.content} 
          components={{
            Code2, GraduationCap, Lightbulb, Activity, CheckCircle, Database, Layers, Wrench, PenTool, LayoutTemplate, PlayCircle, Star, Award, BookOpen, ShieldCheck, Zap, ExternalLink, Gamepad2,
            img: (props: any) => <ZoomableImage {...props} />,
            video: (props: any) => <ZoomableVideo {...props} />,
            ZoomableImage,
            ZoomableVideo,
            AutoScreenshotGallery: (props: any) => <AutoScreenshotGallery {...props} link={post.frontmatter.link} />
          }} 

        />
      </div>
      
      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-[#30363d] flex justify-between items-center">
        <p className="text-muted-foreground">{dict.likeWhat}</p>
        <a href="mailto:antoniotagaruma8@gmail.com" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-accent-teal text-accent-teal hover:bg-accent-teal/10 h-10 px-6 py-2">
          {dict.letsTalk}
        </a>
      </div>
    </article>
  );
}
