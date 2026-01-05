import { GameProps } from "@/utils/types/game";
import Link from 'next/link';
import Image from 'next/image';
import { BiRightArrowCircle } from "react-icons/bi";

export function GameCard({ dataGame }: { dataGame: GameProps }) {
    return (
        <article className="w-full bg-slate-200 rounded-lg p-4">
            <Link href={`/game/${dataGame.id}`}>
                <div className="relative w-full h-56 hover:scale-105 transition-all duration-500">
                    <Image
                        src={dataGame.image_url}
                        alt={dataGame.title}
                        fill={true}
                        className="rounded-lg cursor-pointer object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                        quality={100}
                        priority={true}
                    />
                </div>

                <div className="flex justify-between items-center mt-2.5">
                    <h3 className="font-bold h-12 flex items-center">{dataGame.title}</h3>
                    <BiRightArrowCircle />
                </div>
            </Link>
        </article>
    )
}