import FilterToProductsBG from "../../data/FilterToProductsBG";
import productData from "../../data/ProductData";
import Filter from "../../enums/Filter";
import FilterListItem from "../FilterListItem";
import GrowingScroller from "../GrowingScroller";
import ProductCard from "../ProductCard";

const ProductsPage = ({ currentFilter, setFilter }) => {
  const filterEnumAsArray = Object.values(Filter);

  const bgStyling = {
    // Background is coordinated with the current filter
    backgroundImage: `url(${FilterToProductsBG[currentFilter].foreground}), url(${FilterToProductsBG[currentFilter].background})`,
    backgroundPosition: "left bottom, left",
    backgroundSize: "auto, auto 100%",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };

  const productElements = productData
    .filter(
      (e) =>
        e.filters.includes(currentFilter) ||
        currentFilter === Filter.DEFAULT ||
        !currentFilter
    )
    .map((product, index) => <ProductCard key={index} {...product} />);

  return (
    <div style={bgStyling} className="grow px-16 pt-32 flex justify-end">
      <div className="w-[65%] flex flex-col gap-6">
        <ul className="flex justify-end gap-10">
          {filterEnumAsArray.map((filter, index) => (
            <FilterListItem key={index} onClick={setFilter.bind(null, filter)}>
              {filter.description}
            </FilterListItem>
          ))}
        </ul>

        <GrowingScroller showScroll={false}>
          <div
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            }}
            className="pb-6 grid gap-8 justify-items-center"
          >
            {productElements}
          </div>
        </GrowingScroller>
      </div>
    </div>
  );
};

export default ProductsPage;
