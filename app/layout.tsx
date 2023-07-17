import './globals.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'

const montSerrat = Montserrat({
    weight: ['600', '700'],
    subsets: ['latin-ext']
})

export const metadata: Metadata = {
    title: 'MBBS in Russia | Become a doctor',
    description: 'We will refer you to the top colleges in russia. React out to us',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={montSerrat.className}>{children}</body>
        </html>
    )
}
