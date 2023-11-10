import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [show, setShow] = useState<string[]>();

  const [winners, setWinners] = useState<number>(1);
  const [remove, setRemove] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(true);

  // console.log(winners);

  const handleResult = () => {
    const array = String(text)
      .replace(/\s+/g, ",")
      .replace(/,+/g, ",")
      .split(",");

    const inter = setInterval(() => {
      for (let i = 1; i <= winners; i++) {
        const random1 = Math.floor(Math.random() * array.length);
        const random2 = Math.floor(Math.random() * array.length);
        setShow([array[random1], array[random2]]);
      }
    }, 40);

    setTimeout(() => {
      clearInterval(inter);
    }, 200 * array.length);

    remove && setText("");
  };

  return (
    <>
      <div className="wrapper lg:w-3/4 w-full px-4 mx-auto my-6">
        <div className="container lg:w-2/3 border p-5 mx-auto rounded-md">
          <h1 className="text-4xl font-bold text-center mb-2">
            Random Name Picker
          </h1>
          <div className="my-5">
            <label htmlFor="" className="block mb-2">
              Each name must be added on a new line or separated by a comma.
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Each name must be added on a new line or separated by a comma."
              className="w-full border  p-4 focus:outline-none rounded-md focus:ring-4 focus:ring-sky-100"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </div>
          <p>{show && show[0]}</p>
          <button
            className="my-2 hover:text-red-500"
            onClick={() => {
              setText("");
            }}
          >
            Remove all names from list <span className="text-red-500">X</span>
          </button>

          <div className="my-5">
            <div>
              <label htmlFor="winners" className="block py-1">
                Number of Winners
              </label>
              <select
                name=""
                id="winners"
                className="w-full py-2 px-4  rounded-sm"
                onChange={(e) => {
                  setWinners(Number(e.target.value));
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
            <div className="my-4">
              <label>
                <input
                  type="checkbox"
                  name="remove"
                  id=""
                  onClick={() => {
                    setRemove(!remove);
                  }}
                />
                <span className="ml-2">
                  Remove name from list of names after drawing winner
                </span>
              </label>
            </div>
            <div className="my-4">
              <label>
                <input
                  type="checkbox"
                  name="remove"
                  id=""
                  checked={filter}
                  onClick={() => {
                    setFilter(!filter);
                  }}
                />
                <span className="ml-2">Filter duplicate names</span>
              </label>
            </div>
            <div>
              <button
                className="w-full border py-2 font-semibold bg-violet-500 text-white rounded-md"
                onClick={handleResult}
              >
                Pick random name
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
