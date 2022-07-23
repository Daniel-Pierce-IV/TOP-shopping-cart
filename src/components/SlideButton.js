const SlideButton = ({
  overText,
  overColorClass,
  underText,
  underColorClass,
}) => {
  const btnFont = "tracking-widest text-center";
  const btnSizing = "px-10 py-2 pt-4 w-full";
  const slideTransition =
    "transition-transform duration-[400ms] group-hover:-translate-x-[90%]";
  const underlayTransition =
    "transition-all duration-[600ms] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100";

  return (
    <div
      className={`relative group overflow-hidden rounded-full ${underColorClass}`}
    >
      <div
        className={`absolute rounded-full text-white z-10 ${btnSizing} ${btnFont} ${overColorClass} ${slideTransition}`}
      >
        {overText}
      </div>

      <div className={`${btnSizing} ${btnFont} ${underlayTransition}`}>
        {underText}
      </div>
    </div>
  );
};

export default SlideButton;
