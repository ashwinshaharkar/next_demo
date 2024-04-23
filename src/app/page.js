import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="text-uppercase text-center h1 pt-3"><h1>Vercel - Home Assignment</h1></div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-3 bg-light border p-5">
          <h2 className="text-capitalize text-center h3">Questions set</h2>
          <ul>
            <li className="p-2"><Link href="/question/q1">Question 1</Link></li>
            <li className="p-2"><Link href="/question/q2">Question 2</Link></li>
            <li className="p-2"><Link href="/question/q3">Question 3</Link></li>
            <li className="p-2"><Link href="/question/q4">Question 4</Link></li>
            <li className="p-2"><Link href="/question/q5">Question 5</Link></li>
            <li className="p-2"><Link href="/question/q6">Question 6</Link></li>
            <li className="p-2"><Link href="/question/q7">Question 7</Link></li>
            <li className="p-2"><Link href="/question/q8">Question 8</Link></li>
            <li className="p-2"><Link href="/question/q9">Question 9</Link></li>
            <li className="p-2"><Link href="/question/q10">Question 10</Link></li>
          </ul>
        </div>
        <div className="col-sm-9 bg-light border p-5">
          <h2 className="text-capitalize text-center h3">Introduction to Next.js</h2>
          <div className="container">
            <div className="row p-3">
              <p>Next.js is a powerful React framework that's designed to make building React applications more efficient and enjoyable. It's known for its simplicity, performance, and scalability, making it a popular choice among developers for building modern web applications and websites.</p>
            </div>
            <div className="row p-3">
              <p>Here's a brief introduction to Next.js:</p>
            </div>
            <div className="row p-3">
              <p><strong>1. **Server-side rendering (SSR) and Static Site Generation (SSG)**:</strong></p>
              <p className="pt-2">One of the standout features of Next.js is its ability to render React components on the server side. This means that your pages can be pre-rendered before being served to the client, improving performance and SEO. Next.js also supports static site generation, where pages can be generated at build time, further enhancing performance and reducing server load.</p>
            </div>
            <div className="row p-3">
              <p><strong>2. **Automatic code splitting**:</strong></p>
              <p className="pt-2">Next.js automatically splits your code into smaller bundles, so only the code necessary for each page is loaded. This helps to optimize loading times and reduce initial page load sizes.</p>
            </div>
            <div className="row p-3">
              <p><strong>3. **File-based routing**:</strong></p>
              <p className="pt-2">Next.js uses a simple and intuitive file-based routing system. Each React component in the 'pages' directory automatically becomes a route, making it easy to create new pages and manage routing without additional configuration.</p>
            </div>
            <div className="row p-3">
              <p><strong>4. **API routes**:</strong></p>
              <p className="pt-2">Next.js allows you to create API routes alongside your pages, enabling you to build serverless APIs directly within your application.</p>
            </div>
            <div className="row p-3">
              <p><strong>5. **Built-in CSS support**:</strong></p>
              <p className="pt-2">Next.js provides built-in support for CSS modules, allowing you to encapsulate styles within components and avoid global scope issues. It also supports popular CSS-in-JS solutions like Styled Components and Emotion.</p>
            </div>
            <div className="row p-3">
              <p><strong>6. **TypeScript support**:</strong></p>
              <p className="pt-2">Next.js has first-class support for TypeScript, allowing you to write type-safe React applications with ease.</p>
            </div>
            <div className="row p-3">
              <p><strong>7. **Incremental Static Regeneration (ISR)**:</strong></p>
              <p className="pt-2">This feature allows you to update static content on your site without needing to rebuild all the pages. It's particularly useful for sites with frequently changing data.</p>
            </div>
            <div className="row p-3">
              <p>Overall, Next.js offers a powerful and flexible framework for building React applications with features tailored to improve developer productivity, performance, and user experience. Whether you're building a small personal project or a large-scale enterprise application, Next.js provides the tools and capabilities to help you succeed.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
