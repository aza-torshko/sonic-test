import pytest
from playwright.sync_api import Page

def test_ring_counter(page):
    page.get_by_text("Collect a Ring").click()
    assert page.get_by_text("Rings: 1").is_visible()
    for _ in range(4):
        page.get_by_text("Collect a Ring").click()
    assert page.get_by_text("Rings: 5").is_visible()

def test_zone_selection(page):
    page.locator('#name').fill("Sonic")
    page.select_option("select", "City")
    page.get_by_text("Let's Go!").click()
    assert page.get_by_text("You chose: City").is_visible()

def test_zone_selection_no_name_error(page):
    page.locator('#name').fill("")
    page.select_option("select", "City")
    page.get_by_text("Let's Go!").click()
    assert page.get_by_text("Whoa! Sonic needs a name to roll!").is_visible()

def test_zone_selection_no_zone_error(page):
    page.locator('#name').fill("Sonic")
    page.select_option("select", "")
    page.get_by_text("Let's Go!").click()
    assert page.get_by_text("Hold up! Choose a zone before blasting off!").is_visible()

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
    page.locator('#name').fill("Tails")
    page.select_option("select", "Desert")
    page.get_by_text("Let's Go!").click()
    # Assert correct zone is shown
    assert page.get_by_text("You chose: Desert").is_visible()