import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nic's Website",
  description: "Nic Ung's Website",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}