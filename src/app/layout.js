import {GeistSans} from "geist/font/sans";
import {JetBrains_Mono} from "next/font/google";

import "@/globals.css";

import { SpeedInsights } from '@vercel/speed-insights/next'
import {Toaster} from "@/components/ui/sonner";
import {sharedDescription, sharedTitle, defaultUrl} from "@/app/shared-metadata";
import {PROFILES} from "@/lib/constants";


const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
    weight: ['variable']
})

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
        <body className="bg-background text-foreground" suppressHydrationWarning>
        <main vaul-drawer-wrapper="" className="min-h-screen bg-white animate-in">
            {children}

            <SpeedInsights/>
            <Toaster
                closeButton
                richColors
                toastOptions={{
                    duration: 5000
                }}
            />
        </main>
        </body>
        </html>
    );
}

export const metadata = {
    metadataBase:  new URL(defaultUrl),
    robots: {
        index: true,
        follow: true
    },
    title: {
        template: `%s — ${sharedTitle}`,
        default: sharedTitle
    },
    description: sharedDescription,
    openGraph: {
        title: {
            template: `%s — ${sharedTitle}`,
            default: sharedTitle
        },
        description: sharedDescription,
        alt: sharedTitle,
        type: 'website',
        url: '/',
        siteName: sharedTitle,
        locale: 'en_IE'
    },
    alternates: {
        canonical: '/'
    },
    twitter: {
        card: 'summary_large_image',
        site: `@${PROFILES.twitter.username}`,
        creator: `@${PROFILES.twitter.username}`
    },
    other: {
        pinterest: 'nopin'
    }
}

export const viewport = {
    themeColor: 'white',
    colorScheme: 'only light',
    width: 'device-width',
    initialScale: 1
}