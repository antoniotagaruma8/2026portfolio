import asyncio
from playwright.async_api import async_playwright

async def capture(p, url, dir_name):
    print(f"Capturing {url}...")
    browser = await p.chromium.launch()
    
    # Desktop View
    page = await browser.new_page(viewport={'width': 1280, 'height': 800})
    await page.goto(url)
    await page.wait_for_timeout(3000) # wait for animations to settle
    await page.screenshot(path=f'public/images/{dir_name}/1.png', full_page=False)
    
    # Mobile/Tablet View (to get a second unique image)
    page2 = await browser.new_page(viewport={'width': 800, 'height': 1000})
    await page2.goto(url)
    await page2.wait_for_timeout(3000)
    
    # Try to click anywhere to maybe trigger an interaction if it's a game, or just scroll
    try:
        await page2.mouse.click(400, 500)
        await page2.wait_for_timeout(1000)
    except:
        pass
        
    await page2.screenshot(path=f'public/images/{dir_name}/2.png', full_page=False)
    await browser.close()
    print(f"Done capturing {dir_name}")

async def main():
    async with async_playwright() as p:
        await capture(p, 'https://vocabulary-race-activity.vercel.app', 'vocabulary-race')
        await capture(p, 'https://photo-description-activity.vercel.app', 'photo-description')

asyncio.run(main())
