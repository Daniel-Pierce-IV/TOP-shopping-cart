describe("ProductFactory", () => {
  let ProductFactory;

  beforeEach(() => {
    // using require() to ensure id's get reset each test
    jest.resetModules();
    ProductFactory = require("./ProductFactory").default;
  });

  it("initializes id as 1", () => {
    const product = ProductFactory();

    expect(product.id).toBe(1);
  });

  it("automatically increments id for every created product", () => {
    const first = ProductFactory();
    const second = ProductFactory();

    expect(first.id).toBe(1);
    expect(second.id).toBe(2);
  });
});
