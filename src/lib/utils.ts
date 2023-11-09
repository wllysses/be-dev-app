import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { create } from "zustand";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface StoreProps {
  input: string;
  role: string;
  setInput: (value: string) => void;
  setRole: (value: string) => void;
}

export const useStore = create<StoreProps>((set) => ({
  input: "",
  role: "full-stack",
  setInput: (value: string) => set(() => ({ input: value })),
  setRole: (value: string) => set(() => ({ role: value })),
}));
