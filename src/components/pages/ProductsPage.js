import productData from "../../data/ProductData";
import Filter from "../../enums/Filter";
import FilterListItem from "../FilterListItem";
import ProductCard from "../ProductCard";

const ProductsPage = ({ currentFilter, setFilter }) => {
  const filterEnumAsArray = Object.values(Filter);

  return (
    <div className="grow px-16 py-8 flex gap-16">
      <div className="flex flex-col">
        <h2 className="text-3xl mb-4">Product Filters</h2>

        <ul className="flex flex-col gap-2">
          {filterEnumAsArray.map((filter, index) => (
            <FilterListItem key={index} onClick={setFilter.bind(null, filter)}>
              {filter.description}
            </FilterListItem>
          ))}
        </ul>
      </div>

      <div
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        className="grid grow gap-16 items-start max-h-full"
      >
        {productData
          .filter(
            (e) =>
              e.filters.includes(currentFilter) ||
              currentFilter === Filter.DEFAULT ||
              !currentFilter
          )
          .map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
