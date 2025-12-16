# Cursor AI Rules for Personal Website Project

## Code Style and Best Practices

### Language
- **All code comments MUST be written in English only**
- Variable names, function names, and all identifiers must be in English
- Documentation strings must be in English
- Commit messages should be in English

### Code Quality
- Follow TypeScript best practices
- Use functional components with hooks in React
- Prefer `const` over `let` when possible
- Use meaningful and descriptive variable names
- Keep functions small and focused on a single responsibility

### React/Next.js Specific
- Use `"use client"` directive only when necessary (client-side features)
- Prefer server components by default
- Use Material-UI (MUI) components consistently
- Follow MUI theming patterns
- Use `next-intl` for internationalization

### File Organization
- Keep components in `/src/components`
- Keep custom hooks in `/src/hooks`
- Keep utilities in `/src/utils` (if created)
- One component per file
- Co-locate related files when appropriate

### TypeScript
- Always define proper types and interfaces
- Avoid using `any` type
- Use type inference when possible
- Export types/interfaces that might be reused

### Performance
- Use `useMemo` and `useCallback` for expensive computations
- Implement proper loading states
- Optimize images with Next.js Image component
- Avoid unnecessary re-renders

### Comments
- Write clear, concise comments for complex logic
- Document public APIs and exported functions
- Use JSDoc style for function documentation
- Explain "why" not "what" in comments
- **All comments must be in English**

### Git
- Write clear, descriptive commit messages
- Keep commits atomic and focused
- Follow conventional commits format when possible

## Project-Specific Rules

### Internationalization
- All user-facing text must be in translation files (`/src/i18n/*.json`)
- Use `useTranslations` hook from `next-intl`
- Support both Polish (`pl`) and English (`en`) languages

### Styling
- Use MUI's `sx` prop for component styling
- Follow the existing theme configuration
- Maintain consistent spacing using MUI's spacing system
- Use responsive design patterns with MUI breakpoints

### Accessibility
- Ensure proper semantic HTML
- Add appropriate ARIA labels
- Maintain keyboard navigation support
- Ensure sufficient color contrast

