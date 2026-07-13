import os
import re
import urllib.request
import json

with open('src/lib/archive-data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the array content
match = re.search(r'export const archiveData(?:.*?)=\s*\[(.*?)\];', content, re.DOTALL)
if not match:
    print("Could not find archiveData")
    exit(1)

array_content = match.group(1)
object_matches = re.findall(r'\{([^}]+)\}', array_content)

projects_en = []
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
    
    year_match = re.search(r'year:\s*"([^"]+)"', obj_str)
    if year_match: p['year'] = year_match.group(1)
    
    desc_match = re.search(r'description:\s*"([^"]+)"', obj_str)
    if desc_match: p['description'] = desc_match.group(1)
        
    prob_match = re.search(r'problem:\s*"([^"]+)"', obj_str)
    if prob_match: p['problem'] = prob_match.group(1)
        
    sol_match = re.search(r'solution:\s*"([^"]+)"', obj_str)
    if sol_match: p['solution'] = sol_match.group(1)

    if 'id' in p:
        projects_en.append(p)

def get_translation(text, target="es"):
    if not text: return ""
    try:
        url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target + "&dt=t&q=" + urllib.parse.quote(text)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode("utf-8"))
        return "".join([x[0] for x in data[0]])
    except Exception as e:
        print("Error translating:", text, e)
        return text

# Map category explicitly so it stays exact
cat_map = {
    "EdTech Games": "Juegos EdTech",
    "UI & Apps": "UI y Apps",
    "Academic": "Académico"
}

projects_es = []
for p in projects_en:
    pes = p.copy()
    pes['title'] = get_translation(p.get('title',''))
    pes['category'] = cat_map.get(p.get('category',''), p.get('category',''))
    if 'description' in p: pes['description'] = get_translation(p['description'])
    if 'problem' in p: pes['problem'] = get_translation(p['problem'])
    if 'solution' in p: pes['solution'] = get_translation(p['solution'])
    projects_es.append(pes)

# Now rewrite archive-data.ts
def dict_to_ts(p):
    lines = ["  {"]
    lines.append(f'    id: "{p["id"]}",')
    lines.append(f'    title: "{p["title"]}",')
    lines.append(f'    category: "{p["category"]}",')
    if 'tech' in p:
        techs = ", ".join([f'"{t}"' for t in p['tech']])
        lines.append(f'    tech: [{techs}],')
    if 'github' in p: lines.append(f'    github: "{p["github"]}",')
    if 'link' in p: lines.append(f'    link: "{p["link"]}",')
    if 'year' in p: lines.append(f'    year: "{p["year"]}",')
    if 'description' in p: lines.append(f'    description: "{p["description"]}",')
    if 'problem' in p: lines.append(f'    problem: "{p["problem"]}",')
    if 'solution' in p: lines.append(f'    solution: "{p["solution"]}",')
    lines.append("  }")
    return "\n".join(lines)

ts_content = """export type ArchiveProject = {
  id: string;
  title: string;
  category: "EdTech Games" | "AI & Python Tools" | "Academic" | "UI & Apps" | "Juegos EdTech" | "UI y Apps" | "Académico" | "GitHub Auto-Sync" | string;
  tech: string[];
  github: string;
  link?: string;
  year: string;
  description?: string;
  problem?: string;
  solution?: string;
};

export const archiveDataEN: ArchiveProject[] = [
"""
ts_content += ",\n".join([dict_to_ts(p) for p in projects_en])
ts_content += "\n];\n\nexport const archiveDataES: ArchiveProject[] = [\n"
ts_content += ",\n".join([dict_to_ts(p) for p in projects_es])
ts_content += "\n];\n\nexport const archiveData = {\n  en: archiveDataEN,\n  es: archiveDataES\n};\n"

with open('src/lib/archive-data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Translation and rewriting complete!")
