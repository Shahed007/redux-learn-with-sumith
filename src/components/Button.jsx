const Button = ({ type = "blue", children, handler }) => {
  const style =
    type === "red"
      ? "text-xl active:scale-95 font-medium bg-red-500 text-white px-7 py-2 rounded-md shadow-md"
      : "text-xl active:scale-95 font-medium bg-blue-500 text-white px-7 py-2 rounded-md shadow-md";

  return (
    <button onClick={handler} className={style}>
      {children}
    </button>
  );
};

export default Button;
