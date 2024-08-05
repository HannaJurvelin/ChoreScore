const Checkbox = ({ label, points, onChange, ...props }) => {
  return (
    <label className="flex flex-row gap-2 py-2">
      <input
        type="checkbox"
        name={props.name}
        checked={props.true}
        onChange={onChange}
        className="w-6 h-6 space-x-4 relative shrink-0 peer appearance-none border-black border rounded-md bg-white checked:bg-black checked:border-0"
      />
      <svg
        className="
      absolute 
      w-4 h-4 mx-1 my-1
      hidden peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <p className="grow">{label}</p>
      <p>{points}</p>
    </label>
  );
};

export default Checkbox;
