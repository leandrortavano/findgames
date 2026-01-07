import Container from "@/components/Container";
import { GameCard } from "@/components/GameCard";
import { Search } from "@/components/Search";
import { GameProps } from "@/utils/types/game";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: Promise<{ title: string }> }): Promise<Metadata> {
    const {title} = await params;

    return {
        title: `Busca realizada por ${title}`,
        description: `Resultados de sua busca por ${title} no Games Find`
    }
}
async function getSearchData(s: string) {
    try {
        const decodeTitle = decodeURI(s);
        const q = await fetch(`https://sujeitoprogramador.com/next-api/?api=game&title=${decodeTitle}`);
        return q.json();

    } catch (err) {
        throw new Error("Failed to fetch data");
    }

}

export default async function SearchResults({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;

    const resultado: GameProps[] = await getSearchData(title);
    console.log(resultado);

    return (

        <main>
            <Container>
                <Search />
                <h1 className="mb-3">
                    {resultado &&
                        (<p>Sua busca por <b>{title}</b> retornou os seguintes resultados:</p>)}

                    {!resultado && <p>Ops! <br />Sua busca por <b>{title}</b> não retornou nenhum resultado para sua busca.</p>}
                </h1>


                <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {resultado && resultado.map((m) => (
                        <GameCard key={m.id} dataGame={m} />
                    ))}

                </div>
            </Container>

        </main>
    )
}