const Button = (props) => {
  const { text, icon, handleFunc } = props;

  return (
    <button
      className="w-[100px] lg:w-[160px] h-11 flex justify-center items-center rounded-[4px] border border-[#A1ABB3] bg-white"
      onClick={handleFunc}
    >
      <img src={icon} alt={text} className="lg:mr-3 mr-0" />
      <span className="lg:block hidden font-normal text-[#A1ABB3] text-xs">
        {text}
      </span>
    </button>
  );
};

export default Button;
