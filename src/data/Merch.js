import { v4 as uuidv4 } from "uuid";

const Merch = [
  {
    item: "Tshirt",
    size: "X-Small",
    color: "Black",
    quantity: 1,
    price: 15,
    id: uuidv4(),
  },
  {
    item: "Tshirt",
    size: "Small",
    color: "Red",
    quantity: 1,
    price: 20,
    id: uuidv4(),
  },
  {
    item: "Tshirt",
    size: "Medium",
    color: "White",
    quantity: 1,
    price: 25,
    id: uuidv4(),
  },
  {
    item: "Tshirt",
    size: "Large",
    color: "Purple",
    quantity: 1,
    price: 25,
    id: uuidv4(),
  },
  {
    item: "Tshirt",
    size: "X-Large",
    color: "Green",
    quantity: 1,
    price: 25,
    id: uuidv4(),
  },
];

export default Merch;
