from playwright.sync_api import sync_playwright, expect

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Verify Spanish version
    page.goto("http://localhost:8000/es/")
    expect(page).to_have_url("http://localhost:8000/es/")
    expect(page.get_by_role("heading", name="Jóvenes transformando la educación")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/screenshot-es.png")

    # Verify English version
    page.goto("http://localhost:8000/en/")
    expect(page).to_have_url("http://localhost:8000/en/")
    expect(page.get_by_role("heading", name="Youth transforming education")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/screenshot-en.png")

    browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)