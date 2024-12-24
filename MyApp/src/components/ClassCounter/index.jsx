import React from "react";
import ClassLifeClycle from "../ClassLifeCycle";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.start,
    };

    this.onAdd = this.onAdd.bind(this);
    this.onMinus = this.onMinus.bind(this);
  }

  onAdd() {
    let c = this.state.count;
    if (this.props.max > c) {
      const n = c + 1;

      this.setState({ count: n });
    }
  }

  onMinus() {
    let c = this.state.count;
    if (this.props.min < c) {
      const n = c - 1;

      this.setState({ count: n });
    }
  }
  render() {
    const { count } = this.state;
    const { start, max, min } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <p>
          Start:{start}
          Min:{min}
          Max:{max}
        </p>
        <button onClick={this.onAdd}>Add </button>
        {count}
        <button onClick={this.onMinus}>Minus</button>
        {count > 2 && count < 7 && <ClassLifeClycle />}
      </div>
    );
  }
}

export default ClassCounter;
