import AppShell from "@/components/layouts/AppShell";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

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
