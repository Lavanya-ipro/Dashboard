import { useStore } from "../../store/index.ts";

const Invoices = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <div className="flex flex-1">
      <div className="home-container" style={{ color: "black" }}>
        <h1 className="text-[30px] mt-4">{bears} around here...</h1>
        <span>
          <button
            className="py-2 px-4 m-1 rounded bg-black text-white hover:bg-violet-600"
            onClick={increasePopulation}
          >
            One up
          </button>
          <button
            className="py-2 px-4 m-1 rounded bg-black text-white hover:bg-violet-600"
            onClick={removeAllBears}
          >
            Clear
          </button>
        </span>
      </div>
    </div>
  );
};

export default Invoices;
