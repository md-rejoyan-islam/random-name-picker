import { selectBtnProps } from "../types";

function SelectBox({ setOptions }: selectBtnProps) {
  return (
    <div>
      <label htmlFor="winners" className="block py-1">
        Number of Winners
      </label>
      <select
        name=""
        id="winners"
        className="w-full py-2 px-4  rounded-sm"
        onChange={(e) => {
          setOptions((prev) => {
            return { ...prev, numberOfWinners: Number(e.target.value) };
          });
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default SelectBox;
