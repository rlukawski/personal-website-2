import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// This page only renders when the user is at the root URL (/)
// We redirect to the default locale
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
