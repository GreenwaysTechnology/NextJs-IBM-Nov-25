import Link from "next/link";

export default function NavBar() {
    return <nav>
        <h1 className="text-center  md:text-center ">IBM</h1>
        <ul>
            <li>
                <Link href={{ pathname: "/about" }}>About</Link>
            </li>
            <li>
                <Link href={{ pathname: "/contact" }}>Contact</Link>
            </li>
        </ul>
    </nav>
}