const Button = ({ onClick, children }) => {
  return (
    <button type="submit" className="bg-black text-white rounded-full h-10">
      {children}
    </button>
  );
};

export default Button;
