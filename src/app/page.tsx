import { RoleSelect } from "@/components/ui/role-selector";
import { Vacancys } from "@/components/ui/vacancys";

export default function Home() {
  return (
    <main className="mt-8 container mx-auto px-4">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Vagas disponíveis</h2>
        <RoleSelect />
      </div>

      <Vacancys />
    </main>
  );
}
