import express from 'express';
interface CartItems {
  id: number;
  product: string;
  price: number;
  quantity: number;
}
// create a new Router object
const routes = express.Router();

const cartItems: CartItems[] = [
  { id: 1, product: 'shirt', price: 12, quantity: 10 },
  { id: 2, product: 'pants', price: 54, quantity: 1000 },
];

//using this for the ID
// will be init as the length of the array and count up from there
// when we delete items from the array we can delete from anywhere so we want
// this counter to be independent of the length of the aray after the init.
let counter = cartItems.length + 1;

routes.get('/cart-items', (req, res) => {
  if (req.query.maxPrice) {
    const price: number = Number(req.query.maxPrice);
    res.json(cartItems.filter((item) => item.price < price));
  }
  if (req.query.prefix) {
    const prefix: string = req.query.prefix.toString();
    res.json(cartItems.filter((item) => item.product.startsWith(prefix)));
  }
  if (req.query.pageSize) {
    res.json(cartItems.slice(0, Number(req.query.pageSize)));
  }
  res.json(cartItems);
});

routes.get('/cart-items/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).end();
  }
});

routes.post('/cart-items', (req, res) => {
  // using spread operator to pull each attribute from the body and set to cart variable
  const cart: CartItems = { id: counter, ...req.body };
  // alternative to lines above V
  // const cart: CartItems = {
  //   id: counter,
  //   product: req.body.product,
  //   price: req.body.price,
  //   quantity: req.body.quantity,
  // };

  cartItems.push(cart);
  //increment the counter so the next id is unique
  // notice we dont decrement the counter, even if we delete
  // this prevents duplicate IDs
  counter++;
  res.status(201);
  res.json(cartItems);
});

routes.put('/cart-items/:id', (req, res) => {
  //find where the item is in the array
  let item = cartItems.findIndex((item) => item.id === Number(req.params.id));
  // over write the item at that spot in the array with the same ID, but the new info from the request body
  cartItems[item] = { id: Number(req.params.id), ...req.body };

  res.status(200).end();
});

routes.delete('/cart-items/:id', (req, res) => {
  let itemIndex = cartItems.findIndex((item) => item.id === Number(req.params.id));
  //starting at itemIndex delete 1 item
  cartItems.splice(itemIndex, 1);
  res.status(204).end();
});

export default routes;