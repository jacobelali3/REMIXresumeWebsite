import { Outlet, LiveReload, Meta, Link, Links } from "remix";
import styles from "./tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => {
  const description = "Jacob Elali's resume website ";
  const keywords = "Jacob, Elali, Resume, Software, Engineer"; //seo
  return {
    description,
    keywords,
  };
};
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title : "Jacob Elali"}</title>
      </head>

      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <div>
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
   
  
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-blue-300 hover:border-blue-300">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full flex flex-grow lg:flex lg:items-center lg:w-auto">

      <div className="  text-xl lg:flex-grow">
        
      <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"><Link to="/">Home</Link></p>
      <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"><Link to="/pages/animation">About me</Link></p>
      <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"><Link to="/pages/academic">Academia</Link></p>
      <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"><Link to="/pages/professional">Professional</Link></p>
      <p className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 mr-4"><Link to="/pages/contact">Contact Me</Link></p>
      
      </div>

      <div>
        <a href='/resume.pdf' className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white mt-4 lg:mt-0" download='JacobElaliResume.pdf'>Resume</a>
      </div>

    </div>
  </nav>
  <div className='container'>{children}</div>
  </div>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
      </head>
      <body>
        <h1>Error</h1>
        <p>God damnit jacob, you've messed something up again!</p>
      </body>
    </html>
  );
}
