import React from "react";

const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxsyWYyphI-EVioxW1HG0lFiUBSnJ-eLP9g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtG7SILCeP4bG3AMEq_ZGvPAMyYodXl5c0hQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxsyWYyphI-EVioxW1HG0lFiUBSnJ-eLP9g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxsyWYyphI-EVioxW1HG0lFiUBSnJ-eLP9g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxsyWYyphI-EVioxW1HG0lFiUBSnJ-eLP9g&usqp=CAU",
];
const ImageSlider = () => {
  return (
    <>
      <div>
        <h1>Hello Imageslider</h1>
        <button>Previous</button>
        <img
          src={data[0]}
          alt="wallpaper"
          style={{ width: 500, height: 400 }}
        />
        <button>Next</button>
      </div>
    </>
  );
};

export default ImageSlider;
