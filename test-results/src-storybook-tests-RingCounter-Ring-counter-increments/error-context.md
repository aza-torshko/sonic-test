# Test info

- Name: Ring counter increments
- Location: /Users/azatorshkoeva/Desktop/experiments/sonic-test-ui/src/storybook-tests/RingCounter.test.ts:2:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Collect Ring')

    at /Users/azatorshkoeva/Desktop/experiments/sonic-test-ui/src/storybook-tests/RingCounter.test.ts:4:40
```

# Page snapshot

```yaml
- heading "Couldn't find story matching 'sonic-ringcounter--default'." [level=1]
- paragraph: "The component failed to render properly, likely due to a configuration issue in Storybook. Here are some common causes and how you can address them:"
- list:
  - listitem:
    - strong: Missing Context/Providers
    - text: ": You can use decorators to supply specific contexts or providers, which are sometimes necessary for components to render correctly. For detailed instructions on using decorators, please visit the"
    - link "Decorators documentation":
      - /url: https://storybook.js.org/docs/writing-stories/decorators
    - text: .
  - listitem:
    - strong: Misconfigured Webpack or Vite
    - text: ": Verify that Storybook picks up all necessary settings for loaders, plugins, and other relevant parameters. You can find step-by-step guides for configuring"
    - link "Webpack":
      - /url: https://storybook.js.org/docs/builders/webpack
    - text: or
    - link "Vite":
      - /url: https://storybook.js.org/docs/builders/vite
    - text: with Storybook.
  - listitem:
    - strong: Missing Environment Variables
    - text: ": Your Storybook may require specific environment variables to function as intended. You can set up custom environment variables as outlined in the"
    - link "Environment Variables documentation":
      - /url: https://storybook.js.org/docs/configure/environment-variables
    - text: .
- code: "- Are you sure a story with that id exists? - Please check your stories field of your main.js config. - Also check the browser console and terminal for error messages."
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | test('Ring counter increments', async ({ page }) => {
  3 |   await page.goto('http://localhost:6006/iframe.html?id=sonic-ringcounter--default');
> 4 |   await page.getByText('Collect Ring').click();
    |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  5 |   await expect(page.getByTestId('ring-count')).toHaveText('Rings: 1');
  6 | });
```