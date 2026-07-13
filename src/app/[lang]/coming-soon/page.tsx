import Link from 'next/link';
import { ArrowLeft, Construction } from 'lucide-react';
import en from '@/i18n/dictionaries/en.json';
import es from '@/i18n/dictionaries/es.json';

export default async function ComingSoonPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = lang === 'es' ? es.work : en.work;
  const title = lang === 'es' ? 'Próximamente' : 'Coming Soon';
  const desc = lang === 'es' ? 'Este proyecto todavía está en desarrollo o en proceso de despliegue. ¡Vuelve pronto!' : 'This project is currently under development or being deployed. Check back soon!';

  return (
    <div className="container mx-auto px-6 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <Construction size={64} className="text-accent-teal mb-8 opacity-80" strokeWidth={1} />
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
        {title}
      </h1>
      
      <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
        {desc}
      </p>

      <Link 
        href={`/${lang}/#projects`} 
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent-teal text-background font-medium hover:bg-accent-teal/90 transition-colors"
      >
        <ArrowLeft size={18} /> {dict?.back || 'Back to Projects'}
      </Link>
    </div>
  );
}
