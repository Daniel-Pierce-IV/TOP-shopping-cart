const FilterListItem = ({ onClick, children: content }) => {
  return (
    <li
      className={`group cursor-pointer text-3xl text-gray-500 hover:text-technolife-blue relative transition-colors`}
      onClick={onClick}
    >
      {content}
      <div
        className={`link-underline absolute -bottom-0.5 h-1 w-full bg-gray-500 transition-all duration-200 opacity-0 group-hover:opacity-100 -translate-x-3/4 group-hover:translate-x-0 scale-50 group-hover:scale-100`}
      ></div>
    </li>
  );
};

export default FilterListItem;
