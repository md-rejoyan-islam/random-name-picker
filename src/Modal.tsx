import { ModelProps } from "./types";

const Modal = ({
  shuffle,
  winners,
  finished,
  setOptions,
  totalNames,
}: ModelProps) => {
  return (
    <div className="h-screen overflow-hidden w-full bg-[#48b4ad98] top-0 left-0 absolute">
      <div className="flex h-full items-center w-full justify-center">
        <div className="card flex-1 h-fit max-w-[550px] p-5 bg-white rounded-md">
          <div>
            {/* cross  button */}
            <div className="flex justify-end">
              <button
                className="bg-red-200 py-2 px-3 rounded-md hover:bg-red-400"
                onClick={() => {
                  setOptions((prev) => {
                    return { ...prev, modal: false };
                  });
                }}
              >
                X
              </button>
            </div>

            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon--winner mx-auto"
                width="64"
                height="64"
                viewBox="0 0 512 512"
              >
                <g fill="#ff901d">
                  <path d="M37 142c12-13 25-25 39-36 1-1 4 0 3 2-8 29-21 58-43 79-1-15-1-30 1-45zm-1 45c-12-15-22-30-32-46-1-2-4-2-4 1-2 33 11 73 43 89-3-15-6-29-7-44zM43 231c7-16 16-31 26-45 1-2 4-1 4 1 1 29-4 60-18 86l-12-42zm12 42c-16-11-30-22-44-34-2-2-4 0-3 2 8 32 32 65 66 71l-19-39zM74 312c3-17 7-34 12-50 1-2 4-2 4 0 10 27 14 58 8 86-9-11-17-23-24-36zm24 36c-18-5-35-11-52-19-2-1-4 1-3 3 18 28 50 53 85 49-11-11-21-21-30-33zM128 381c-3-18-4-35-4-52 1-2 3-3 4-1 18 23 31 52 34 80-12-8-24-17-34-27zm347-239c-12-13-25-25-39-36-1-1-4 0-3 2 8 29 21 58 43 79 1-15 1-30-1-45zm1 45c12-15 22-30 32-46 1-2 4-2 4 1 2 33-11 73-43 89 3-15 6-29 7-44zM469 231c-7-16-16-31-26-45-1-2-4-1-4 1-1 29 4 60 18 86l12-42zm-12 42c16-11 30-22 44-34 2-2 4 0 3 2-8 32-32 65-66 71l19-39zM438 312c-3-17-7-34-12-50-1-2-4-2-4 0-10 27-14 58-8 86 9-11 17-23 24-36zm-24 36c18-5 35-11 52-19 2-1 4 1 3 3-18 28-50 53-85 49 11-11 21-21 30-33zM384 381c3-18 4-35 4-52-1-2-3-3-4-1-18 23-31 52-34 80 12-8 24-17 34-27z"></path>
                </g>
                <path
                  d="M204 424c-14-6-26-14-38-22s-23-18-33-27a288 288 0 01-52-67 287 287 0 01-30-79v1l-6-43v-43-1c2-20 6-41 12-62a8 8 0 00-6-9 8 8 0 00-9 5 299 299 0 00-12 111 302 302 0 0019 87v1a304 304 0 0044 77h-1l30 33a299 299 0 0078 53 8 8 0 004-15zm278-281c-1-22-5-44-12-66a8 8 0 00-15 4c6 21 10 42 12 62v44l-6 43-12 40a288 288 0 01-42 73v1a284 284 0 01-62 59l1-1c-12 8-24 16-38 22a8 8 0 00-4 11 8 8 0 0011 3 300 300 0 0075-52l30-33a303 303 0 0044-77h-1a300 300 0 0019-87v-1c2-16 2-31 0-45z"
                  fill="#f7bc14"
                ></path>
                <path
                  d="M212 296a94 94 0 01-95-95v-26c0-3 1-6 4-8a11 11 0 018-4l68 1a8 8 0 010 15h-64v22a80 80 0 0094 78 8 8 0 013 15l-3 1a94 94 0 01-15 1zm88 0a95 95 0 01-18-2 8 8 0 113-15l2 1c23 3 46-3 64-18a80 80 0 0028-61v-22h-64a8 8 0 01-8-8 8 8 0 018-7l68-1a11 11 0 018 4 11 11 0 014 8v26a95 95 0 01-95 95z"
                  fill="#ffb125"
                ></path>
                <path
                  d="M205 408h102c-42-53-38-130-38-130h-26s4 77-38 130z"
                  fill="#fed130"
                ></path>
                <path
                  d="M269 278h-26s1 12-1 29a140 140 0 0028 101h37c-42-53-38-130-38-130z"
                  fill="#f7bc14"
                ></path>
                <path
                  d="M179 141v68c0 40 19 77 51 101 16 11 36 11 52 0a126 126 0 0051-101v-68H179z"
                  fill="#fed130"
                ></path>
                <path
                  d="M296 141v68c0 40-19 77-51 101a43 43 0 01-7 4c14 7 31 5 44-4a126 126 0 0051-101v-68h-37z"
                  fill="#f7bc14"
                ></path>
                <path
                  d="M338 152H174a4 4 0 01-5-5v-18a4 4 0 015-5h164a4 4 0 015 5v18a4 4 0 01-5 5z"
                  fill="#ffb125"
                ></path>
                <path
                  d="M338 124h-32v28h32a4 4 0 005-5v-18a4 4 0 00-5-5z"
                  fill="#ff901d"
                ></path>
                <path
                  d="M343 441H170c-3 0-5-3-4-5l13-35a4 4 0 013-3h148c2 0 3 1 4 3l13 35c0 2-1 5-4 5z"
                  fill="#ffb125"
                ></path>
                <path
                  d="M347 436l-13-35a4 4 0 00-4-3h-35l16 43h32c3 0 4-3 4-5z"
                  fill="#ff901d"
                ></path>
              </svg>
            </span>
            <h1 className="font-bold text-xl text-center">Winner</h1>
            {!finished && <span className="text-center block">{shuffle}</span>}
            <div className="winner my-2">
              {finished && (
                <ol className=" list-decimal list-inside text-center">
                  {winners.map((winner, index) => (
                    <li className="text-xl" key={index}>
                      {winner}
                    </li>
                  ))}
                  {/* <li className="">RRRRR</li> */}
                </ol>
              )}
            </div>
          </div>
          <div>
            <p className="text-xl">
              <b>Number of names :</b> {totalNames}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
