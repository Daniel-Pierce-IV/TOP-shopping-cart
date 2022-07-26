const ChevronUp = ({ className = "w-3 h-3", onClick }) => {
  return (
    <svg className={className} viewBox="4 4 16 16" onClick={onClick}>
      <path
        fill="currentColor"
        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
      />
    </svg>
  );
};

export default ChevronUp;
