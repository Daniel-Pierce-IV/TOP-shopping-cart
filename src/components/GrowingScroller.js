const GrowingScroller = ({ className, children, showScroll = true }) => {
  return (
    <div className={`grow relative ${className}`}>
      <div
        className={`absolute inset-0 overflow-auto ${
          !showScroll && "scroll-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default GrowingScroller;
