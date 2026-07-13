const fs = require('fs');
const path = require('path');

const files = [
    "src/content/work/cpe.mdx",
    "src/content/work/es/cpe.mdx"
];

const newBlock = `<div className="flex flex-wrap gap-3 mt-6 mb-12">
  <a href="/docs/cpe/reading.pdf" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-accent-blue/90 border border-accent-blue rounded-xl hover:bg-accent-blue transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
    <BookOpen size={16} /> Reading & Use of English
  </a>
  <a href="/docs/cpe/writing.pdf" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-accent-teal/90 border border-accent-teal rounded-xl hover:bg-accent-teal transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]">
    <BookOpen size={16} /> Writing
  </a>
  <a href="/docs/cpe/listening.pdf" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-red-500/90 border border-red-500 rounded-xl hover:bg-red-500 transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]">
    <BookOpen size={16} /> Listening
  </a>
  <a href="/docs/cpe/speaking.pdf" target="_blank" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-amber-500/90 border border-amber-500 rounded-xl hover:bg-amber-500 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
    <BookOpen size={16} /> Speaking
  </a>
</div>`;

files.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace the entire div block that starts with <div className="flex flex-wrap gap-3 mt-4 mb-12">
    // and ends with </div> just before {/* Bento Media Gallery */}
    
    const blockRegex = /<div className="flex flex-wrap gap-3 mt-4 mb-12">[\s\S]*?<\/div>\s*(?=\{\/\* Bento Media Gallery \*\/})/m;
    
    content = content.replace(blockRegex, newBlock + "\n\n");

    fs.writeFileSync(fullPath, content);
    console.log(`Replaced buttons in ${filePath}`);
});
