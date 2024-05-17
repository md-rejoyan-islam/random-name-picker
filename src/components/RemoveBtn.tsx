function RemoveBtn({ setOptions }) {
  return (
    <button
      className="py-1 rounded-sm text-lg bg-red-400 hover:bg-red-500 px-2 text-white"
      onClick={() => {
        setOptions((prev) => {
          return { ...prev, text: "", namesCount: 0, nameArray: [] };
        });
      }}
    >
      Remove all names from list
    </button>
  );
}

export default RemoveBtn;
