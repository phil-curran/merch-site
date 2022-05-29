import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ReusableForm = () => {
  // const [itemDescription, setItemDescription] = useState();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const item = { itemDescription: itemDescription, itemPrice: itemPrice };
  // };

  return (
    <>
      <h2>New Item:</h2>
      <Form>
        <Form.Group className="mb-3" controlId="itemDescription">
          <Form.Label>Item Description:</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Pick a Size</option>
          <option value="1">X-Small</option>
          <option value="2">Small</option>
          <option value="3">Medium</option>
          <option value="3">Large</option>
          <option value="3">X-Large</option>
          <option value="3">XX-Large</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="itemColor">
          <Form.Label>Color:</Form.Label>
          <Form.Control type="text" placeholder="Color" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="itemQuantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="text" placeholder="1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="itemPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="text" placeholder="$" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ReusableForm;
