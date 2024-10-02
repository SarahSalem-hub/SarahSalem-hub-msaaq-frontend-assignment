import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getLangDir } from "rtl-detect";
import { Providers } from "./providers";
import { workSans } from "./fonts/fonts";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const direction = getLangDir(locale);
  const messages = await getMessages();
  return (
    <html
      className="dark"
      lang={locale}
      dir={direction}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${workSans.variable}  ${geistMono.variable}`}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
