import { useState } from "react";

import "./App.css";
import Modal from "./Modal";

import { OptionsType } from "./types";
import toast, { Toaster } from "react-hot-toast";
import SelectBox from "./components/SelectBox";
import RemoveBtn from "./components/RemoveBtn";
import SubmitBtn from "./components/SubmitBtn";
import TextField from "./components/TextField";

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
            <label htmlFor="" className="block mb-2 text-xl">
              Each name must be added on a new line or separated by a comma.
            </label>
            <TextField options={options} setOptions={setOptions} />
          </div>
          <div className="flex justify-between items-center  flex-wrap gap-4">
            <span className="py-2 px-4 bg-zinc-500 rounded-sm text-white">
              Amount : {options.namesCount}
            </span>
            <RemoveBtn setOptions={setOptions} />
          </div>

          <div className="my-5">
            <SelectBox setOptions={setOptions} />
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
              <SubmitBtn handleResult={handleResult} options={options} />
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
