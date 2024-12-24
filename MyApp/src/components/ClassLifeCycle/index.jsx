import React from "react";
import { api } from "../../services";

class ClassLifeClycle extends React.Component {
  constructor() {
    super();

    this.state = {
      dogs: [],
      isLoading: true,
    };
    console.log("I am constructor");
  }

  componentDidMount() {
    console.log("Mounted");

    this.getDogs();
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  shouldComponentUpdate(nextProps, nextState) {
    let ans = this.state.dogs.length !== nextState.dogs.length;
    console.log("Should Component Update", ans);
    if (ans) {
      return true;
    }

    return false;
  }

  async getDogs() {
    try {
      const res = await api({
        path: "/public/dogs",
      });
      console.log(res);
      this.setState({ isLoading: false, dogs: res.data.data });
    } catch (e) {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    console.log("I am Render");
    const { dogs } = this.state;
    return (
      <div>
        <h1>LifeCycle Methods</h1>

        {this.state.isLoading && <h2>Loading....</h2>}

        {!!dogs.length && dogs.map((i) => <p key={i.id}>{i.name}</p>)}
      </div>
    );
  }
}

export default ClassLifeClycle;
