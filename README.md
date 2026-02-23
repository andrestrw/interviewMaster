## Getting Started

First, run the development server:

pnpm dev

## Tech Stack & Tools

This project leverages modern tools to ensure a high-quality developer experience and a robust user interface.

### Shadcn UI

We chose Shadcn UI for our component system because:

- **Full Ownership:** Components are copied directly into the project, allowing for complete control over the code without being tied to a library's versioning.
- **Accessibility:** Built on top of **Radix UI**, ensuring all interactive elements follow WAI-ARIA patterns out of the box.
- **Styling Flexibility:** Uses **Tailwind CSS** for styling, making it easy to maintain a consistent design system while keeping the bundle size small.

### Zod

We use Zod for schema validation to achieve:

- **TypeScript Integration:** Provides a "schema-first" approach where TypeScript types are automatically inferred from the validation logic, reducing boilerplate.
- **Runtime Safety:** Ensures that data entering the system (from forms or APIs) matches the expected structure, preventing runtime crashes.
- **Developer Experience:** Offers a highly intuitive API with descriptive error messages that can be directly mapped to UI form fields.
- **Centralized Validation:** Acts as a single "Rule Book" for the app. By keeping rules in the schema instead of individual components, we avoid logic duplication and simplify maintenance.
