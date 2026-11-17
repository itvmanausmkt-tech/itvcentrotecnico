import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Página antiga: agora leva para a landing page nova.
// No Cloudflare, o redirecionamento 301 fica em public/_redirects.
export const metadata: Metadata = {
  alternates: { canonical: '/assistencia-tcl/' },
  robots: { index: false, follow: true },
};

export default function Page() {
  redirect('/assistencia-tcl/');
}
