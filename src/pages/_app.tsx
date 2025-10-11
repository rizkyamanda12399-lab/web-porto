import AppShell from "@/components/layouts/AppShell";
import { Toaster } from "@/components/ui/toaster";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <AppShell>
        <Component {...pageProps} />
        <Toaster />
      </AppShell>
    </main>
  )
}
