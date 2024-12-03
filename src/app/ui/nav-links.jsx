'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export function NavLinks() {
    const pathname = usePathname();
    return (
            <div className="w-64 bg-gray-800 text-white">
                <div className="p-4 text-xl font-bold border-b border-gray-700">
                    Side Panel
                </div>
                <ul className="mt-4 space-y-2">
                    <li className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${pathname === '/' ? 'bg-gray-700' : ''}`}>
                        <Link href="/" className={'block'}>Blueprint</Link>
                    </li>
                    <li className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${pathname === '/lists' ? 'bg-gray-700' : ''}`}>
                        <Link href="/lists" className={'block'}>Lists</Link>
                    </li>
                </ul>
            </div>
    )
}