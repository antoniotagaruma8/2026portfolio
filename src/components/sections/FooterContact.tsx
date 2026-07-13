import { MapPin, Smartphone, Mail, FileText } from "lucide-react";

export function FooterContact({ dict }: { dict: any }) {
  return (
    <section id="contact" className="max-w-md text-sm text-muted-foreground scroll-mt-24 mb-24">
      <div className="section-label">{dict.contactTitle || "Contact"}</div>
      
      <p className="mb-6 leading-relaxed">
        {dict.contactDesc}
      </p>

      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-[#132d21]/30 text-accent-teal rounded-lg border border-accent-teal/20 shadow-[0_0_10px_-2px_rgba(100,244,172,0.1)]">
            <MapPin size={16} strokeWidth={1.5} />
          </span>
          <span className="text-foreground/90 font-medium">Villaverde, Madrid</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-[#132d21]/30 text-accent-teal rounded-lg border border-accent-teal/20 shadow-[0_0_10px_-2px_rgba(100,244,172,0.1)]">
            <Smartphone size={16} strokeWidth={1.5} />
          </span>
          <span className="text-foreground/90 font-medium">+34 617 724 828 (WhatsApp)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-[#132d21]/30 text-accent-teal rounded-lg border border-accent-teal/20 shadow-[0_0_10px_-2px_rgba(100,244,172,0.1)]">
            <Mail size={16} strokeWidth={1.5} />
          </span>
          <span className="text-foreground/90 font-medium">antoniotagaruma8@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-8 h-8 flex items-center justify-center bg-[#132d21]/30 text-accent-teal rounded-lg border border-accent-teal/20 shadow-[0_0_10px_-2px_rgba(100,244,172,0.1)]">
            <FileText size={16} strokeWidth={1.5} />
          </span>
          <span className="text-foreground/90 font-medium">{dict.contactWorkAuth}</span>
        </div>
      </div>
      
      <a 
        href="mailto:antoniotagaruma8@gmail.com"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-accent-teal text-accent-teal hover:bg-accent-teal/10 h-10 px-6 py-2"
      >
        {dict.contactBtn}
      </a>
    </section>
  );
}
