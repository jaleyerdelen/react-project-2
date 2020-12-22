import React from "react";

export default function Card() {
  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem("counter")) || 0
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  localStorage.setItem("counter", counter);
 return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              name="increase"
              onClick={clickHandler}
              type="button"
              class="btn btn-light"
            >
              High
            </button>
            <div className="">Like: {counter}</div>
            <button
              name="decreese"
              onClick={clickHandler}
              type="button"
              class="btn btn-light"
            >
             Low
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

        