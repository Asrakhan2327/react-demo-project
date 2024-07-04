class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      color: "Black",
    };
  }
  changeColor() {
    this.setState((prevState) => {
      return { color: "Red" };
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <p>{this.state.color}</p>
      </div>
    );
  }
}
