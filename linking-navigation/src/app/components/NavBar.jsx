'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import '@/app/links.css'

export default function NavBar() {
    const pathname = usePathname()

    return <nav>
        <h1 className="text-center  md:text-center ">IBM</h1>
        <ul>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: "/about" }} >About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/contact' ? 'active' : ''}`} href={{ pathname: "/contact" }}>Contact</Link>
            </li>
            <li>
                <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: "/dashboard" }}>Dashboard</Link>
            </li>
        </ul>
    </nav>
}