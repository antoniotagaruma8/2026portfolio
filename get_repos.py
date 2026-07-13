import urllib.request
import re

html = urllib.request.urlopen('https://github.com/antoniotagaruma8?tab=repositories').read().decode('utf-8')
repos = re.findall(r'href="(/antoniotagaruma8/[^"]+)" itemprop="name codeRepository"', html)
for repo in repos:
    print(repo)
