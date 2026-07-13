import os
import re
import urllib.request
import json

with open('src/lib/archive-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array content
match = re.search(r'export const archiveData: ArchiveProject\[\] = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find archiveData")
    exit(1)

array_content = match.group(1)

# Find all objects
object_matches = re.findall(r'\{([^}]+)\}', array_content)

projects = []
for obj_str in object_matches:
    p = {}
    
    id_match = re.search(r'id:\s*"([^"]+)"', obj_str)
    if id_match: p['id'] = id_match.group(1)
        
    title_match = re.search(r'title:\s*"([^"]+)"', obj_str)
    if title_match: p['title'] = title_match.group(1)
        
    cat_match = re.search(r'category:\s*"([^"]+)"', obj_str)
    if cat_match: p['category'] = cat_match.group(1)
        
    tech_match = re.search(r'tech:\s*\[(.*?)\]', obj_str)
    if tech_match:
        techs = re.findall(r'"([^"]+)"', tech_match.group(1))
        p['tech'] = techs
        
    github_match = re.search(r'github:\s*"([^"]+)"', obj_str)
    if github_match: p['github'] = github_match.group(1)
        
    link_match = re.search(r'link:\s*"([^"]+)"', obj_str)
    if link_match: p['link'] = link_match.group(1)
    
    desc_match = re.search(r'description:\s*"([^"]+)"', obj_str)
    if desc_match: p['description'] = desc_match.group(1)
        
    prob_match = re.search(r'problem:\s*"([^"]+)"', obj_str)
    if prob_match: p['problem'] = prob_match.group(1)
        
    sol_match = re.search(r'solution:\s*"([^"]+)"', obj_str)
    if sol_match: p['solution'] = sol_match.group(1)

    if 'id' in p and 'problem' in p:
        projects.append(p)

def get_translation(text, target="es"):
    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target + "&dt=t&q=" + urllib.parse.quote(text)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode("utf-8"))
        return "".join([x[0] for x in data[0]])
    except Exception as e:
        print("Error translating:", text, e)
        return text

os.makedirs('src/content/work/es', exist_ok=True)

mdx_template_en = """---
title: "{title}"
subtitle: "{category} Project"
tech: {tech}
link: "{link}"
github: "{github}"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
{description}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

  {{/* Card 1: The Problem */}}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 shrink-0">
      <Activity className="text-red-500" size={{24}} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">The Problem</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>{problem}</p>
    </div>
  </div>

  {{/* Card 2: The Solution */}}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 shrink-0">
      <CheckCircle className="text-accent-teal" size={{24}} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">The Solution</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>{solution}</p>
    </div>
  </div>

</div>
"""

mdx_template_es = """---
title: "{title}"
subtitle: "Proyecto de {category_es}"
tech: {tech}
link: "{link}"
github: "{github}"
---

<div className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-12">
{description_es}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

  {{/* Card 1: The Problem */}}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-red-500/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 shrink-0">
      <Activity className="text-red-500" size={{24}} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-red-400 transition-colors">El Problema</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>{problem_es}</p>
    </div>
  </div>

  {{/* Card 2: The Solution */}}
  <div className="group glass-card p-6 md:p-8 rounded-3xl border hover:border-accent-teal/30 transition-all cursor-default flex flex-col h-full">
    <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6 shrink-0">
      <CheckCircle className="text-accent-teal" size={{24}} />
    </div>
    <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-accent-teal transition-colors">La Solución</h3>
    <div className="text-sm text-muted-foreground leading-relaxed flex-grow space-y-4">
      <p>{solution_es}</p>
    </div>
  </div>

</div>
"""

for p in projects:
    tech_json = json.dumps(p.get('tech', []))
    
    en_content = mdx_template_en.format(
        title=p.get('title',''),
        category=p.get('category', ''),
        tech=tech_json,
        link=p.get('link', ''),
        github=p.get('github', ''),
        description=p.get('description',''),
        problem=p.get('problem',''),
        solution=p.get('solution','')
    )
    
    en_path = f"src/content/work/{p['id']}.mdx"
    with open(en_path, 'w', encoding='utf-8') as f:
        f.write(en_content)
        
    print(f"Generated {en_path}")
    
    title_es = get_translation(p.get('title',''))
    category_es = get_translation(p.get('category', ''))
    description_es = get_translation(p.get('description',''))
    problem_es = get_translation(p.get('problem',''))
    solution_es = get_translation(p.get('solution',''))
    
    es_content = mdx_template_es.format(
        title=title_es,
        category_es=category_es,
        tech=tech_json,
        link=p.get('link', ''),
        github=p.get('github', ''),
        description_es=description_es,
        problem_es=problem_es,
        solution_es=solution_es
    )
    
    es_path = f"src/content/work/es/{p['id']}.mdx"
    with open(es_path, 'w', encoding='utf-8') as f:
        f.write(es_content)
        
    print(f"Generated {es_path}")

print(f"Done generating {len(projects)*2} files!")
