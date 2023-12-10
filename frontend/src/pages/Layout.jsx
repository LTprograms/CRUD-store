import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {

    const location = useLocation();

    return (
        <div className="text-white bg-zinc-900 w-full h-full flex">
            <aside className="w-full md:w-2/12 h-full bg-zinc-900 p-4">
                <h1 className="text-3xl font-bold text-center mb-4">CRUD - Store</h1>
                <nav>
                <ul className="text-2xl flex flex-col gap-4 mt-8">
                    <li className={location.pathname==="/"?"text-zinc-400":"text-zinc-200"}><Link>Products</Link></li>
                    <li className={location.pathname==="clients/"?"text-zinc-400":"text-zinc-200"}><Link>Clients</Link></li>
                    <li className={location.pathname==="purchases/"?"text-zinc-400":"text-zinc-200"}><Link>Purchases</Link></li>
                </ul>
                </nav>
            </aside>
            <main className="bg-zinc-800 w-full p-4">
                <Outlet/> 
            </main>
        </div>
    );
}