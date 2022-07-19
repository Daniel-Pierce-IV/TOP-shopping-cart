const FilterListItem = ({ onClick, children: content }) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      {content}
    </li>
  );
};

export default FilterListItem;
