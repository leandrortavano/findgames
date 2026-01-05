"use client";
import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";


export function Search() {
    const [busca, setBusca] = useState("");
    const router = useRouter();

    function handleSearch(e: FormEvent) {
        e.preventDefault();
        if (busca === "") return;
        router.push(`/games/search/${busca}`);
    }

    return (
        <form onSubmit={handleSearch} className="w-full flex bg-slate-200 my-5 p-5 rounded-lg gap-2 items-center justify-between">
            <input className="w-full outline-none" type="search" placeholder="Procurando algum jogo?" value={busca} onChange={(e) => setBusca(e.target.value)} />
            <button><BsSearch /></button>

        </form>
    )
}