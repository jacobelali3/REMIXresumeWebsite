import { Outlet } from "remix"

function Pages() {
    return (
        <div>
            <Outlet />
        <footer>
            <p>jacobelali3@outlook.com</p>
        </footer>
        </div>
    )
}

export default Pages

