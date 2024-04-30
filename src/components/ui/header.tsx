"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { useStore } from "@/lib/utils";
import { Input } from "./input";
import { ModeToggle } from "./theme-toggle";
import { Card } from "./card";
import { useTheme } from "next-themes";

export function Header() {
  const { theme } = useTheme();
  const { setInput } = useStore();

  return (
    <Card className="p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between gap-6 max-[525px]:flex-col w-full">
        <Link className="flex flex-col" href="/">
          <div className="flex items-center gap-2">
            <div
              className={`size-8 rounded flex items-center justify-center bg-black text-white`}
            >
              <Code2 size={18} />
            </div>
            <h1 className="font-semibold text-2xl flex items-center gap-3">
              be.dev
            </h1>
          </div>
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
    </Card>
  );
}
