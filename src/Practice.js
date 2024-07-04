import React from "react";

const Practice = (props) => {
  let inputValue = React.createRef();
  console.log(inputValue.current);
  let handleSubmit = (e) => {
    alert(`Input value: ${inputValue.current.value}`);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Practice;
