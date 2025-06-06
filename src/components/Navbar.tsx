'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    return (
        <div className="flex flex-row justify-around p-4 text-lg bg-gray-800">
            <p><Link href="/" className={path.startsWith('/') ? 'active' : undefined}>Início</Link></p>
            <p><Link href="/estoque" className={path == '/estoque' ? 'active' : undefined}>Estoque Geral</Link></p>
            <p><Link href="/cadastrar" className={path == '/cadastrar' ? 'active' : undefined}>Cadastrar</Link></p>
        </div>
    )
}

export default Navbar;