export function Spinner() {
  return (
    <div className="min-h-[50vh] w-full flex items-center justify-center flex-col gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-zinc-500 animate-spin" />
      <span>Carregando vagas... aguarde.</span>
    </div>
  );
}
