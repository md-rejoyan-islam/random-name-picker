function SubmitBtn({ handleResult, options }) {
  return (
    <button
      className="w-full border disabled:bg-zinc-200 py-2 font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-md"
      onClick={handleResult}
      disabled={options.text.length < 2}
    >
      Pick random name
    </button>
  );
}

export default SubmitBtn;
