import { Outlet } from "remix"

function Pages() {
    return (
        <div>
            <Outlet />
        <footer>
            <p className="font-sans text-lg text-gray-800 text-center">jacobelali3@outlook.com</p>
        </footer>
        </div>
    )
}

export default Pages

