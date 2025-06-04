import '@styles/globals.css' // Ensure this path is correct
import { Metadata } from 'next'
// Assuming getBaseURL is a utility function you might create or mock
// For now, we can hardcode or simplify this for setup.
// import { getBaseURL } from "@lib/util/env"

export const metadata: Metadata = {
  // metadataBase: new URL(getBaseURL()), // Simplified for now
  title: 'Cloned Medusa UI',
  description: 'A clone of the Medusa Next.js starter UI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-mode="light"> {/* Assuming light mode default */}
      <body>
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
