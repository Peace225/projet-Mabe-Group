const Input = ({ label, type = 'text', onChange, placeholder }) => (
  <div className="mb-4">
    {label && <label className="block text-gray-400 text-xs uppercase mb-2 ml-1">{label}</label>}
    <input 
      type={type} 
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-mabe-gold/10 p-3 text-mabe-silver focus:border-mabe-gold outline-none transition-all placeholder:text-gray-700"
    />
  </div>
);

export default Input;