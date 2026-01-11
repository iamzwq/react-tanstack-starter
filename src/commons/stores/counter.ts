import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementBy: (amount: number) => void;
}

const initialState = {
  count: 0,
};

export const useCounterStore = create<CounterState>((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),
  incrementBy: (amount) => set((state) => ({ count: state.count + amount })),
}));

export const useCount = () => useCounterStore((state) => state.count);
