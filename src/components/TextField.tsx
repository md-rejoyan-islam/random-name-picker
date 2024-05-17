import { TextFieldProps } from "../types";

function TextField({ options, setOptions }: TextFieldProps) {
  return (
    <textarea
      cols={30}
      rows={10}
      placeholder="Each name must be added on a new line or separated by a comma."
      className="w-full border text-[17px]  p-4 focus:outline-none rounded-md focus:ring-4 focus:ring-sky-100"
      value={options.text}
      onKeyUp={(e) => {
        const array =
          e.currentTarget.textContent &&
          e.currentTarget.innerHTML
            .replace(/\n+/g, ",")
            .replace(/\s+/g, " ")
            .replace(/,+/g, ",")
            .split(",")
            .filter((name) => name != "" && name != " " && name != "  ");
        setOptions((prev) => {
          return {
            ...prev,
            namesCount: array ? array.length : 0,
            nameArray: array ? array : [],
          };
        });
      }}
      onChange={(e) => {
        setOptions((prev) => {
          return { ...prev, text: e.target.value };
        });
      }}
    />
  );
}

export default TextField;
