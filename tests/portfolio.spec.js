import { test, expect } from '@playwright/test';

test.describe('Portfolio Page Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Akan otomatis pakai baseURL 'http://localhost:5173' dari playwright.config.js
    await page.goto('/');
  });

  test('Has correct title and shows Habibi', async ({ page }) => {
    // Pengecekan Title (Regex /.../ akan mencari substring yang cocok)
    await expect(page).toHaveTitle(/M Habibi Siregar/i);

    // Mengecek apakah Hero title mengandung kata "Habibi"
    const heroName = page.locator('#heroName');
    await expect(heroName).toBeVisible();
    await expect(heroName).toContainText('Habibi');
  });

  test('Navigation scrolls to Contact section', async ({ page }) => {
    // Klik tombol CTA di Hero Section
    const contactBtn = page.locator('a[href="#contact"].btn-outline');
    await contactBtn.click();

    // Verifikasi Section Contact jadi terlihat
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('Music player exists', async ({ page }) => {
    // Mengecek music button dan music element ada di DOM
    const musicBtn = page.locator('#musicBtn');
    await expect(musicBtn).toBeVisible();

    const audioEl = page.locator('#bgMusic');
    await expect(audioEl).toBeAttached();
  });

  test('Contact Form Validation', async ({ page }) => {
    // Coba submit form kosong
    const submitBtn = page.locator('button[type="submit"]');
    
    // Pastikan kita sudah scroll ke bawah agar form terlihat
    await page.locator('#contactForm').scrollIntoViewIfNeeded();

    // Klik tanpa isi form
    await submitBtn.click();

    // HTML5 validation akan mencegah submit, jadi field name biasanya required:
    const nameInput = page.locator('#contactName');
    
    // Evaluate javascript asli untuk nge-coba validation behavior HTML5
    const isNameInvalid = await nameInput.evaluate((node) => !node.validity.valid);
    expect(isNameInvalid).toBeTruthy();
  });
});
