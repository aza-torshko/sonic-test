import pytest
from playwright.sync_api import Page

def test_ring_counter(page):
    page.get_by_text("Collect a Ring").click()
    assert page.get_by_text("Rings: 1").is_visible()

def test_zone_selection(page):
    page.select_option("select", "Sky Sanctuary")
    assert page.get_by_text("You chose: Sky Sanctuary").is_visible()

def test_sonic_image_present(page):
    image = page.locator('img[alt="Sonic the Hedgehog"]')
    assert image.is_visible()

def test_full_sonic_app_flow(page: Page):
    # Click the ring button 5 times
    for _ in range(5):
        page.get_by_text("Collect a Ring").click()
    # Assert ring count is 5
    assert page.get_by_text("Rings: 5").is_visible()
    # Select a zone
    page.select_option("select", "Chemical Plant Zone")
    # Assert correct zone is shown
    assert page.get_by_text("You chose: Chemical Plant Zone").is_visible()