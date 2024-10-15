export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-neutral-900 text-white font-bold py-1 px-3 rounded hover:bg-neutral-800 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
