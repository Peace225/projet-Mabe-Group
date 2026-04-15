const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  const baseStyle = "px-8 py-3 uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300";
  const variants = {
    primary: "bg-mabe-gold text-mabe-dark hover:bg-white",
    outline: "border border-mabe-gold text-mabe-gold hover:bg-mabe-gold hover:text-mabe-dark"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;