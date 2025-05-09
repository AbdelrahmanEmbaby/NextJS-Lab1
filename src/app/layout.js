import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next Lab2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-[poppins]">
      <body>
        <header>
          <nav className="p-6">
            <ul className="flex gap-6 ">
              <li className="mr-auto">
                <Link href="/" className="text-2xl font-bold">{metadata.title}</Link>
              </li>
              <li className="link-parent">
                <Link href="/" className="text-xl animate-link after:bg-base-content">Home</Link>
              </li>
              <li className="link-parent">
                <Link href="/posts" className="text-xl animate-link after:bg-base-content">Posts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="p-6">
          <p className="text-center">© {new Date().getFullYear()} {metadata.title}</p>
        </footer>
      </body>
    </html>
  );
}