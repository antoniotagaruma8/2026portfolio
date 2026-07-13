const fs = require('fs');
const path = require('path');

const files = [
    "src/content/work/cpe.mdx",
    "src/content/work/es/cpe.mdx"
];

files.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');

    // Match both `- **Title**:` and `* **Title**:`
    const listItemRegex = /^(?:-|\*) \*\*([^*]+)\*\*(?::)?\s*(.+)$/gm;
    
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

    // Group the consecutive divs into space-y-8 container
    const blockRegex = new RegExp(`(?:<div className="flex flex-col md:flex-row[\\s\\S]*?</div>\\n</div>\\n?)+`, 'g');
    
    content = content.replace(blockRegex, (match) => {
        return `<div className="space-y-8 my-8">\n${match}</div>\n`;
    });

    // Add blank lines around <h2>
    content = content.replace(/(<h2 className="[^"]+">.*?<\/h2>)/g, '\n\n$1\n\n');
    
    // Add blank lines around <h3>
    content = content.replace(/(<h3 className="[^"]+">.*?<\/h3>)/g, '\n\n$1\n\n');

    // Clean up excessive blank lines (more than 2)
    content = content.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(fullPath, content);
    console.log(`Refactored ${filePath}`);
});
