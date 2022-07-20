import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import productData from "../../data/ProductData";
import ProductPage from "./ProductPage";

jest.mock("../../data/ProductData");

describe("ProductPage", () => {
  it("renders the product with id that matches route param", () => {
    const product = productData[0];
    render(
      <MemoryRouter initialEntries={[`/products/${product.id}`]}>
        <Routes>
          <Route path="products/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(product.name);
  });

  it('renders a "Not Found" message for invalid product ids', () => {
    render(
      <MemoryRouter initialEntries={[`/products/blue`]}>
        <Routes>
          <Route path="products/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole("heading")).toHaveTextContent(
      "We couldn't find that product :("
    );
  });
});
