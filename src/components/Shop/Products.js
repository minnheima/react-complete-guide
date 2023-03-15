import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  { id: "p1", title: "item1", price: 10, description: "this is a first item" },
  { id: "p2", title: "item2", price: 4, description: "this is a second item" },
  { id: "p3", title: "item3", price: 6, description: "this is a third item" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
