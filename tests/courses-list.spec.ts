import { test, expect } from '@playwright/test'

test('create delete courses-list', async ({ page }) => {
  await page.goto('/')
  await page.getByPlaceholder('название').click()
  await page.getByPlaceholder('название').fill('proba')
  await page.getByPlaceholder('описание').click()
  await page.getByPlaceholder('описание').fill('proba description')
  await page.getByRole('button', { name: 'Добавить' }).click()
  await expect(page.getByText('probaproba descriptionУдалить')).toBeVisible()
  await page.getByRole('button', { name: 'Удалить' }).click()
  await expect(page.getByText('probaproba descriptionУдалить')).not.toBeVisible()
})
