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

    // Add blank lines around <h2>
    content = content.replace(/(<h2 className="[^"]+">.*?<\/h2>)/g, '\n\n$1\n\n');
    
    // Add blank lines around <h3>
    content = content.replace(/(<h3 className="[^"]+">.*?<\/h3>)/g, '\n\n$1\n\n');

    // Clean up excessive blank lines (more than 2)
    content = content.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed spacing in ${filePath}`);
});
