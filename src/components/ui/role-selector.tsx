"use client";

import { useStore } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RoleSelect() {
  const { role, setRole } = useStore();
  return (
    <Select onValueChange={setRole} defaultValue={role}>
      <SelectTrigger className="w-[150px]" data-testid="role-selector">
        <SelectValue placeholder="Selecionar" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="full-stack">Full-Stack</SelectItem>
        <SelectItem value="front-end">Front-end</SelectItem>
        <SelectItem value="back-end">Back-end</SelectItem>
        <SelectItem value="dados">Dados</SelectItem>
      </SelectContent>
    </Select>
  );
}
