const ChevronLeft = ({ className = "w-3 h-3", onClick }) => {
  return (
    <svg className={className} viewBox="4 4 16 16" onClick={onClick}>
      <path
        fill="currentColor"
        d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"
      />
    </svg>
  );
};

export default ChevronLeft;
