import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../../enums/Filter";
import productData from "../../data/ProductData";
import ProductsPage from "./ProductsPage";

jest.mock("../../enums/Filter");
jest.mock("../../data/ProductData");

describe("ProductPage", () => {
  it("renders all filters", () => {
    render(<ProductsPage setFilter={jest.fn()} />);
    const filterListItems = screen.getAllByRole("listitem");

    expect(filterListItems.length).toBe(2);
    expect(filterListItems[0]).toHaveTextContent(/^DEFAULT$/);
    expect(filterListItems[1]).toHaveTextContent(/^SOMETHING$/);
  });

  it("calls setFilter function with appropriate filter when a filter is clicked", () => {
    const fakeFn = jest.fn();
    render(<ProductsPage setFilter={fakeFn} />);
    const filterListItems = screen.getAllByRole("listitem");

    userEvent.click(filterListItems[0]);

    expect(fakeFn).toHaveBeenCalledTimes(1);
    expect(fakeFn).toHaveBeenCalledWith(Filter.DEFAULT, expect.anything());

    userEvent.click(filterListItems[1]);

    expect(fakeFn).toHaveBeenCalledTimes(2);
    expect(fakeFn).toHaveBeenCalledWith(Filter.SOMETHING, expect.anything());
  });

  it("renders all products initially", () => {
    render(
      <ProductsPage setFilter={jest.fn()} currentFilter={Filter.DEFAULT} />
    );

    productData.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it("defaults to rendering all products when currentFilter isn't set", () => {
    render(<ProductsPage setFilter={jest.fn()} />);

    productData.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it("only renders products that match the current filter", () => {
    const currentFilter = Filter.SOMETHING;
    const matchingProducts = productData.filter((product) =>
      product.filters.includes(currentFilter)
    );
    const nonMatchingProducts = productData.filter(
      (product) => !product.filters.includes(currentFilter)
    );
    render(
      <ProductsPage setFilter={jest.fn()} currentFilter={currentFilter} />
    );

    matchingProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });

    nonMatchingProducts.forEach((product) => {
      expect(screen.queryByText(product.name)).not.toBeInTheDocument();
    });
  });
});
