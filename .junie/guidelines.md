# Calculator Project Guidelines

This document provides guidelines and instructions for developing and maintaining the Calculator project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
This will start the Next.js development server at [http://localhost:3000](http://localhost:3000).

### Building for Production
To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

### Linting
To run the linter:
```bash
npm run lint
```

## Testing Information

### Testing Framework
This project uses Jest and React Testing Library for testing. The configuration is set up in:
- `jest.config.js` - Main Jest configuration
- `jest.setup.js` - Setup file that extends Jest with additional matchers

### Running Tests
To run all tests:
```bash
npm test
```

To run tests in watch mode (recommended during development):
```bash
npm run test:watch
```

To run a specific test file:
```bash
npm test -- path/to/test-file.test.tsx
```

### Writing Tests
Tests are located in the `src/__tests__` directory. Each test file should follow the naming convention `*.test.tsx` or `*.test.ts`.

#### Example Test
Here's a simple example of a component test:

```tsx
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    
    // Check if the page contains the text "Get started by editing"
    const heading = screen.getByText(/Get started by editing/i);
    
    expect(heading).toBeInTheDocument();
  });
});
```

### Test Best Practices
1. Test components in isolation
2. Focus on testing behavior, not implementation details
3. Use data-testid attributes for elements that are difficult to select
4. Write tests that are resilient to changes in the UI

## Additional Development Information

### Project Structure
- `src/app` - Next.js App Router components
- `src/__tests__` - Test files
- `public` - Static assets

### Code Style
This project uses ESLint for code linting. The configuration is in `eslint.config.mjs`.

### TypeScript
This project uses TypeScript. The configuration is in `tsconfig.json`.

### CSS
This project uses Tailwind CSS for styling. The configuration is in `postcss.config.mjs`.

### Deployment
The project is configured for easy deployment on Vercel. You can deploy by connecting your repository to Vercel or by running:
```bash
npx vercel
```

### Recommended Extensions for VS Code
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Jest Runner