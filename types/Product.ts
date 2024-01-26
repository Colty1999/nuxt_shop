interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: {
    count: number;
    rate: number;
  };
}

export default Product;

