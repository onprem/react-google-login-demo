import React, { useState } from "react";
import { genRandomId } from "../../utils/helpers";
import styles from "./AddOrder.module.css";

const AddOrder = ({ isOpen, setIsOpen, addOrder }) => {
  const [inputs, setInputs] = useState({
    id: genRandomId(24),
    customer_name: "",
    customer_email: "",
    product: "Product 1",
    quantity: "1"
  });
  const [done, setDone] = useState(false);
  const [err, setErr] = useState();

  if (!isOpen) return null;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs(i => {
      return {
        ...i,
        [name]: value
      };
    });
  };

  const validate = () => {
    const { id, customer_name: name, customer_email: email, product, quantity } = inputs;
    const qty = Number(quantity);
    if (!id || !name || !email || !product || !qty) {
      setErr("All fields are required");
      return false;
    }

    if (!(qty > 0)) {
      setErr("Quantity should be greater than 0");
      return false;
    }

    return true;
  };

  const closeModal = () => {
    setIsOpen(false);
    setDone(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      addOrder(inputs);
      setDone(true);
      setInputs({
        id: genRandomId(24),
        customer_name: "",
        customer_email: "",
        product: "Product 1",
        quantity: "1"
      });
      setTimeout(closeModal, 1000);
    }
  };

  return (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <form className={styles.form} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
        {done ? (
          <h1 className={styles.success}>Order Generated</h1>
        ) : (
          <>
            <h1>Add New Order:</h1>
            {err && <span className={styles.errSpan}>{err}</span>}
            <input
              className={styles.input}
              type="text"
              name="customer_name"
              value={inputs.customer_name}
              onChange={handleInput}
              placeholder="Customer name"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="customer_email"
              value={inputs.customer_email}
              onChange={handleInput}
              placeholder="Customer email"
              required
            />
            <select
              className={styles.input}
              name="product"
              value={inputs.product}
              onChange={handleInput}
              required
            >
              <option value="Product 1">Product 1</option>
              <option value="Product 2">Product 2</option>
              <option value="Product 3">Product 3</option>
            </select>
            <input
              className={styles.input}
              type="number"
              name="quantity"
              value={inputs.quantity}
              onChange={handleInput}
              required
            />
            <button className={styles.submitBtn} type="submit">
              SUBMIT
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddOrder;
