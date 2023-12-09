export const calculateTotalAmount = (products) => {
    return products.reduce((total, product) => {
      return total + parseFloat(product.price);
    }, 0);
  };
  