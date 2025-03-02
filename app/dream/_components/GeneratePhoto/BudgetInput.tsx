interface Props {
    budget: number;
    setBudget: (budget: number) => void;
}
const BudgetInput = ({ budget, setBudget }: Props): JSX.Element => {
  return (
    <div className="flex items-center">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 me-6"
      >
        Budget
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          type="number"
          name="price"
          id="price"
          min="1"
          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <span>RM</span>
        </div>
      </div>
    </div>
  );
}
export default BudgetInput;