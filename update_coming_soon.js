const fs = require('fs');
const path = require('path');

const updates = [
    { file: "src/content/work/cv-builder.mdx", lang: "en" },
    { file: "src/content/work/es/cv-builder.mdx", lang: "es" },
    { file: "src/content/work/carta-clara.mdx", lang: "en" },
    { file: "src/content/work/es/carta-clara.mdx", lang: "es" }
];

updates.forEach(({ file, lang }) => {
    const fullPath = path.join(__dirname, file);
    if (!fs.existsSync(fullPath)) return;
    
    let content = fs.readFileSync(fullPath, 'utf8');

    // Replace link: "..."
    content = content.replace(/link:\s*".*?"/, `link: "/${lang}/coming-soon"`);
    // Replace github: "..."
    content = content.replace(/github:\s*".*?"/, `github: "/${lang}/coming-soon"`);

    fs.writeFileSync(fullPath, content);
    console.log(`Updated frontmatter in ${file}`);
});
