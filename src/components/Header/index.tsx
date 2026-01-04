import Image from 'next/image';
import Link from 'next/link';
import imgLogo from '../../../public/logo.svg';

import {LiaGamepadSolid} from 'react-icons/lia';

export default function Header() {
    return (
        <header className="w-full px-2 py-2 bg-slate-100 text-black">
            <div className="max-w-4/5 mx-auto flex justify-center items-center sm:justify-between">
                <nav className="flex justify-center items-center gap-4">
                    <Link href="/">
                        <Image src={imgLogo} alt="Logo do gamesFind" priority={true} quality={100} />
                    </Link>

                    <Link href="/">
                        Games
                    </Link>
                    <Link href="/profile">
                        Perfil
                    </Link>
                </nav>
                <div className="hidden sm:flex">
                    <Link href="/profile">
                        <LiaGamepadSolid size={24} color="#33222" />
                    </Link>
                </div>
            </div>
        </header >
    )
}