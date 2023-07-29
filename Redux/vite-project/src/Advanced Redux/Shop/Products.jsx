import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Dummy_Meals = [
    {
      id: "p5",
      title: "My first Book",
      description: "The first book i've written",
      price: 5,
    },
    {
      id: "p6",
      title: "My Second Book",
      description: "The Second book i've written",
      price: 6,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Meals.map((item) => {
          return (
            <ProductItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
