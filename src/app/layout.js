import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel - Home Assignment",
  description: "Vercel - Home Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <div className="row">
            <div className="text-uppercase text-center h1 pt-3"><h1>Vercel - Home Assignment</h1></div>
          </div>
          <div className="row"><Link href="/">Home</Link></div>
          <div className="row mt-3">
            <div className="col-sm-3 bg-light border p-5">
              <h3 className="h3">Questions</h3>
              <ul>
                <li className="p-2"><Link href="/question/1">Question #1</Link></li>
                <li className="p-2"><Link href="/question/2">Question #2</Link></li>
                <li className="p-2"><Link href="/question/3">Question #3</Link></li>
                <li className="p-2"><Link href="/question/4">Question #4</Link></li>
                <li className="p-2"><Link href="/question/5">Question #5</Link></li>
                <li className="p-2"><Link href="/question/6">Question #6</Link></li>
                <li className="p-2"><Link href="/question/7">Question #7</Link></li>
                <li className="p-2"><Link href="/question/8">Question #8</Link></li>
                <li className="p-2"><Link href="/question/9">Question #9</Link></li>
                <li className="p-2"><Link href="/question/10">Question #10</Link></li>
              </ul>
            </div>
            <div className="col-sm-9 bg-light border p-5 main-container">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
