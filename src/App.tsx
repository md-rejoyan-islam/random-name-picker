import { useState } from "react";

import "./App.css";
import Modal from "./Modal";

import { OptionsType } from "./types";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [options, setOptions] = useState<OptionsType>({
    text: "",
    nameArray: [],
    shuffleResultShow: "",
    namesCount: 0,
    winners: [],
    numberOfWinners: 1,
    remove: false,
    filter: true,
    modal: false,
    finished: false,
  });

  // handle result
  const handleResult = () => {
    setOptions((prev) => {
      return { ...prev, finished: false };
    });

    // winner and name count
    if (options.numberOfWinners > options.namesCount) {
      console.log(options.numberOfWinners, options.namesCount);

      toast.error("Number of winners must be less than names count");
      return;
    }

    const inter = setInterval(() => {
      for (let i = 1; i <= options.numberOfWinners; i++) {
        const random = Math.floor(Math.random() * options.namesCount);
        setOptions((prev) => {
          return { ...prev, shuffleResultShow: options.nameArray[random] };
        });
      }
    }, 40);

    const newWinners: string[] = [];
    // winners selection
    for (let i = 1; i <= options.numberOfWinners; i++) {
      const random = Math.floor(Math.random() * options.namesCount);
      const randomName = options.nameArray[random];

      if (newWinners.includes(randomName)) {
        i--;
        continue;
      }
      newWinners.push(randomName);
    }

    setOptions((prev) => {
      return { ...prev, winners: newWinners };
    });
    setTimeout(() => {
      clearInterval(inter);
      setOptions((prev) => {
        return { ...prev, finished: true };
      });
    }, 200 * options.namesCount);

    options.remove &&
      setOptions((prev) => {
        return { ...prev, text: "", namesCount: 0, nameArray: [] };
      });

    setOptions((prev) => {
      return { ...prev, modal: true };
    });
  };

  return (
    <>
      <div className="wrapper w-full px-4 mx-auto py-10 h-screen overflow-y-auto  overflow-hidden">
        <div className="container lg:w-3/5 border p-5 mx-auto rounded-md">
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
              value={options.text}
              onKeyUp={(e) => {
                const array =
                  e.currentTarget.textContent &&
                  e.currentTarget.innerHTML
                    .replace(/\n+/g, ",")
                    .replace(/\s+/g, " ")
                    .replace(/,+/g, ",")
                    .split(",")
                    .filter((name) => name != "");
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
            ></textarea>
          </div>
          <div>
            <span className="py-2 px-4 bg-zinc-500 rounded-sm text-white">
              Amount : {options.namesCount}
            </span>
          </div>
          <button
            className="my-2 hover:text-red-500"
            onClick={() => {
              setOptions((prev) => {
                return { ...prev, text: "", namesCount: 0, nameArray: [] };
              });
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
            <div className="my-4">
              <label>
                <input
                  type="checkbox"
                  name="remove"
                  id=""
                  onChange={() => {
                    setOptions((prev) => {
                      return { ...prev, remove: !options.remove };
                    });
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
                  checked={options.filter}
                  onChange={() => {
                    setOptions((prev) => {
                      return { ...prev, filter: !options.filter };
                    });
                  }}
                />
                <span className="ml-2">Filter duplicate names</span>
              </label>
            </div>
            <div>
              <button
                className="w-full border disabled:bg-zinc-200 py-2 font-semibold bg-violet-500 text-white rounded-md"
                onClick={handleResult}
                disabled={options.text.length < 2}
              >
                Pick random name
              </button>
            </div>
          </div>
        </div>
      </div>
      {options.modal && (
        <Modal
          shuffle={options.shuffleResultShow}
          winners={options.winners}
          setOptions={setOptions}
          finished={options.finished}
          totalNames={options.namesCount}
        />
      )}
      <Toaster />
    </>
  );
}

export default App;
