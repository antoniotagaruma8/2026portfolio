import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        await page.goto('https://cpev2.vercel.app')
        await page.wait_for_timeout(3000)
        
        # Get the page content to look for videos
        content = await page.content()
        with open('cpe_content.html', 'w', encoding='utf-8') as f:
            f.write(content)
            
        await page.screenshot(path='public/images/cpe/real_dashboard.png', full_page=False)
        await browser.close()

asyncio.run(main())
