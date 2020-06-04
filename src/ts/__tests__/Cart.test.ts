import { cart } from '../app';
import { secondCart } from '../app';



test('How many items in the cart?', () => {

  expect(cart.items.length).toBeGreaterThan(2);
  console.log(cart)
});

test('Removing object', () => {
  cart.remove(1)
  expect(cart.items.length).toBe(3)
})
test('How much is for all?', () => {

  expect(cart.sum).toBeLessThan(100)
  
})

test('What about price-off', () => {
  expect(secondCart.sum.toFixed(2)).toBe('56.52')
  
})