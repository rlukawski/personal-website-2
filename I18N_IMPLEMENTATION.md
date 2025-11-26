# Internationalization Implementation

## Overview
This document describes the internationalization (i18n) setup for the personal website project.

## Implementation Details

### 1. Package Installation
- Installed `next-intl` package for Next.js internationalization support

### 2. Supported Languages
- **English (en)** - Default language
- **Polish (pl)**

### 3. Routing Structure
- `/en` - English version
- `/pl` - Polish version
- `/` - Redirects to default locale (`/en`)

The selected language changes the URL routing, so the language preference is visible in the URL and doesn't need to be stored in local storage.

### 4. Translation Files
All translations are stored in JSON files located in `/messages/`:
- `en.json` - English translations
- `pl.json` - Polish translations

### 5. Configuration Files

#### `/src/i18n/routing.ts`
Defines the routing configuration with supported locales and default locale.

#### `/src/i18n/request.ts`
Configures how translations are loaded for each request.

#### `/src/middleware.ts`
Next.js middleware that handles locale routing and redirects.

#### `/next.config.ts`
Updated to include the next-intl plugin configuration.

### 6. Updated Components

All components have been updated to use translations:
- `ResponsiveAppBar` - Navigation bar with language switcher
- `HeroSection` - Hero section with translated content
- `AboutSection` - About section with translated bio
- `ProjectsSection` - Projects with translated titles, dates, and descriptions
- `CertificatesSection` - Certificates with translated labels
- `ContactSection` - Contact form with translated labels and messages
- `Footer` - Footer with translated content

### 7. Language Switcher Component

A new `LanguageSwitcher` component has been added to the navigation bar that allows users to:
- See the current language (with flag emoji)
- Switch between English and Polish
- The switcher appears on both desktop and mobile views

### 8. Translation Structure

The JSON translation files are organized into sections:
```json
{
  "navigation": { ... },
  "hero": { ... },
  "about": { ... },
  "projects": { ... },
  "certificates": { ... },
  "contact": { ... },
  "footer": { ... }
}
```

### 9. How to Add New Translations

1. Add the translation key to both `en.json` and `pl.json`
2. Use the `useTranslations` hook in your component:
   ```typescript
   const t = useTranslations("sectionName");
   ```
3. Access translations using dot notation:
   ```typescript
   {t("key")}
   ```

### 10. How to Add a New Language

1. Add the locale code to `src/i18n/routing.ts` in the `locales` array
2. Create a new JSON file in `/messages/` (e.g., `de.json`)
3. Add the language option to `src/components/LanguageSwitcher.tsx`
4. Translate all content in the new JSON file

## Testing

The application has been tested and verified to work correctly:
- Language switching works without page refresh
- All translations load correctly
- URL routing updates based on selected language
- Default locale redirect works
- Both desktop and mobile views display the language switcher

## URLs

- Development: `http://localhost:3000` (redirects to `/en`)
- English: `http://localhost:3000/en`
- Polish: `http://localhost:3000/pl`

