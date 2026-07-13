import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CommandMenu } from "@/components/command-menu";
import { ChatWidget } from "@/components/ai/ChatWidget";
import { PlayfulLayout } from "@/components/PlayfulLayout";
import { SurpriseGameModal } from "@/components/SurpriseGameModal";
import { getDictionary } from "@/i18n/getDictionary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Antonio Tagaruma Garcia | Portfolio",
  description: "Educator and Full-Stack Developer. I build tools that teach, automate, and scale.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased overflow-x-hidden max-w-full`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CommandMenu />
          <ChatWidget />
          <SurpriseGameModal dict={dict?.surprise} />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
