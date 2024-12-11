# Spherity Challenge

## Initial Setup

1. Create a .env.local file in the root of the project and add the following env variable:

```
API_BATTERY_ENDPOINT=the endpoint of the battery data
```

2. Run `npm install` to install the dependencies.

3. Run `npm run dev` to start the development server.

4. Open http://localhost:3000 in your browser to view the application.

## Project Structure

- `app/`: Application-level pages, and styles.
- `components/`: Reusable components for the application.
- `components/ui`: Primitive components for the application.
- `components/home`: Components strictly for the home page.
- `hooks/`: Custom React hooks.
- `lib/`: Utility functions and constants.
- `services/`: API services for fetching battery data.
- `types/`: Global types for the application.

## Features

- Next.js 14 and React 18 with React Server Components
- TypeScript for type checking
- Tailwind CSS for styling
- Shadcn UI for components
- Tanstack React Table for data tables
- Recharts for charts
- Next Themes for dark/light mode
- Lucide Icons for icons
- ESLint for linting
- Prettier for code formatting
- PostCSS for CSS processing