import { ShieldAlert } from "lucide-react";

export function ErrorPage() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center flex-col gap-4">
      <ShieldAlert size={50} />
      <div className="text-center">
        <h2 className="text-xl">Algo deu errado...</h2>
        <p className="text-muted-foreground text-sm">
          Atualize a página e tente novamente.
        </p>
      </div>
    </div>
  );
}
