'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    return (
        <div className="flex flex-row justify-around p-4 text-lg bg-gray-800">
            <p><Link href="/">Início</Link></p>
            {/* <p><Link href="/" className={path.startsWith('/') ? 'active' : undefined}>Início</Link></p> */}
        </div>
    )
}

export default Navbar;