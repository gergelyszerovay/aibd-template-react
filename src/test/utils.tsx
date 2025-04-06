import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

// Define a custom render function that includes any providers your app needs
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // Add global providers here if needed
      ...options,
    }),
  };
}

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method with our custom version
export { customRender as render };
