const ChevronDown = ({ className = "w-3 h-3", onClick }) => {
  return (
    <svg className={className} viewBox="4 4 16 16" onClick={onClick}>
      <path
        fill="currentColor"
        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
      />
    </svg>
  );
};

export default ChevronDown;
