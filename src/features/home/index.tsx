import { useCounterStore } from "@/commons/stores/counter";
import { Button } from "@/components/button";

export function Home() {
  const { count, increment, decrement, reset, incrementBy } = useCounterStore();

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">Zustand Counter Demo</h1>

        <div className="mb-8 text-center">
          <p className="mb-2 text-6xl font-bold text-indigo-600">{count}</p>
          <p className="text-gray-500">Current Count</p>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <Button onClick={decrement}>-1</Button>
          <Button onClick={increment}>+1</Button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <Button onClick={() => incrementBy(5)}>+5</Button>
          <Button onClick={() => incrementBy(10)}>+10</Button>
        </div>

        <div className="grid grid-cols-1">
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
