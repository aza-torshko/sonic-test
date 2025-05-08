import pytest
from playwright.sync_api import sync_playwright
@pytest.fixture(scope="function")
def page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto("http://localhost:3001")
        yield page
        browser.close()