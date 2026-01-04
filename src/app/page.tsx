import Image from "next/image";
import Container from '@/components/Container';
import { GameProps } from "@/utils/types/game";
import Link from 'next/link';
import { BsArrowRightSquare } from 'react-icons/bs'


async function getGameDay() {
  try {

    const dados = await fetch('https://sujeitoprogramador.com/next-api/?api=game_day', { next: { revalidate: 360 } });
    return dados.json();

  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {

  const jogoDoDia: GameProps = await getGameDay();

  console.log(jogoDoDia);
  return (

    <main className="">
      <Container>
        <h1 className="font-bold text-black py-3.5 text-center">Confira o jogo do dia:</h1>
        <section className="w-full bg-black rounded-lg">
          <div className="relative w-full max-h-96 h-96 rounded-lg">
            <div className="text-white absolute z-20 flex justify-center items-center bottom-0 p-3 gap-2">
              <span className="font-bold">{jogoDoDia.title}</span>
              <BsArrowRightSquare />
            </div>
            <Image fill={true}
              quality={100}
              priority={true}
              className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-80 transition-all duration-300 cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              src={jogoDoDia.image_url} alt={"Foto de " + jogoDoDia.title} />
          </div>
        </section>

      </Container>
    </main>

  );
}
