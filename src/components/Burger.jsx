import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Burger({ burger }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{burger.name}</h1>
        <img
          src={burger.image}
          className="img-fluid"
          style={{ height: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants:</p>
          <select
            className="form-control"
            value={variant}
            onChange={(event) => {
              setVariant(event.target.value);
            }}>
            {burger.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity:</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}>
            {[...Array(10).keys()].map((x, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: {burger.prices[0][variant] * quantity} €
          </h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn">Add to Cart</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={burger.image}
            alt={burger.name}
            className="img-fluid"
            style={{ height: "300px" }}
          />
          <p>{burger.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Burger;
