import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onAdd() {
    const n = this.state.count + 1;

    this.setState({ count: n });
  }

  onMinus() {
    const n = this.state.count - 1;

    this.setState({ count: n });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter</h1>

        <button onClick={this.onAdd}>Add </button>
        {count}
        <button onClick={this.onMinus}>Minus</button>
      </div>
    );
  }
}

export default ClassCounter;
