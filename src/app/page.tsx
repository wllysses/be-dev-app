import { RoleSelect } from "@/components/ui/role-selector";
import { Vacancies } from "@/components/ui/vacancies";

export default function Home() {
  return (
    <main className="mt-32 mb-8 container mx-auto px-4 max-[525px]:mt-48">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold text-2xl">Vagas disponíveis</h2>
        <RoleSelect />
      </div>
      <Vacancies />
    </main>
  );
}
