"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { useStore } from "@/lib/utils";
import { Input } from "./input";
import { ModeToggle } from "./theme-toggle";

export function Header() {
  const { setInput } = useStore();

  return (
    <header className="p-4 border border-b">
      <div className="container mx-auto flex items-center justify-between gap-6 max-[525px]:flex-col w-full">
        <Link className="flex flex-col" href="/">
          <h1 className="font-semibold text-3xl flex items-center gap-3">
            beDev <Code2 />
          </h1>
          <span className="text-xs text-muted-foreground">Vagas para Devs</span>
        </Link>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            id="find"
            placeholder="Pesquisar vaga"
            onChange={(e) => setInput(e.target.value)}
          />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
