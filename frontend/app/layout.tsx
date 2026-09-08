import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "TIKERAMA: No. 1 in event ticketing",
  description: "Africa's #1 event ticketing platform. Easily buy and sell tickets online with our all-in-one, 100% secure solution.",
  keywords: "online ticketing, buy tickets, sell tickets, African events, concerts, festivals, secure booking, ticketing platform, TIKERAMA, ticket sales, event ticketing, ticket management, event promotion, ticketing solutions, ticketing services, event registration, ticketing software, online event tickets, ticketing system, event ticket sales, ticketing technology, event ticketing platform".split(","),
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
