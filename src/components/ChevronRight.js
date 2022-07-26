const ChevronRight = ({ className = "w-3 h-3", onClick }) => {
  return (
    <svg className={className} viewBox="4 4 16 16" onClick={onClick}>
      <path
        fill="currentColor"
        d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"
      />
    </svg>
  );
};

export default ChevronRight;
