const fs = require('fs');
const path = require('path');

const files = [
    "src/content/work/vocabulary-race.mdx",
    "src/content/work/es/vocabulary-race.mdx",
    "src/content/work/photo-description.mdx",
    "src/content/work/es/photo-description.mdx"
];

files.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');

    // We want to wrap consecutive list items in <div className="space-y-6 my-8">
    // A list item is `* **Title**: Description`
    
    // First, let's replace individual list items
    const listItemRegex = /^\* \*\*([^*]+)\*\*(?::)?\s*(.+)$/gm;
    
    content = content.replace(listItemRegex, (match, title, desc) => {
        return `<div className="flex flex-col md:flex-row gap-2 md:gap-8 border-l-2 border-accent-blue/30 pl-4 md:pl-6 ml-2 md:ml-0 group">
  <div className="min-w-[220px] shrink-0 pt-1">
    <div className="text-sm font-bold text-foreground group-hover:text-accent-blue transition-colors">${title.trim()}</div>
  </div>
  <div className="text-sm text-muted-foreground leading-relaxed">
    ${desc.trim()}
  </div>
</div>`;
    });

    // Now, we need to wrap consecutive occurrences of the new div block in a parent container
    // We can do this by looking for sequences of these divs.
    const divBlockStr = '<div className="flex flex-col md:flex-row';
    const blockRegex = new RegExp(`(?:<div className="flex flex-col md:flex-row[\\s\\S]*?</div>\\n</div>\\n?)+`, 'g');
    
    content = content.replace(blockRegex, (match) => {
        return `<div className="space-y-8 my-8">\n${match}</div>\n`;
    });

    // Also let's style the subheadings (### 1. Front-End & UI/UX Design -> <h3>...)
    const h3Regex = /^### (.*)$/gm;
    content = content.replace(h3Regex, '<h3 className="text-lg font-bold text-foreground mt-10 mb-6">$1</h3>');

    // And ## (## Technical Architecture -> <h2>...)
    const h2Regex = /^## (.*)$/gm;
    content = content.replace(h2Regex, '<h2 className="text-2xl font-bold tracking-tight mb-6 mt-12 border-b border-border pb-2">$1</h2>');

    fs.writeFileSync(fullPath, content);
    console.log(`Refactored ${filePath}`);
});
