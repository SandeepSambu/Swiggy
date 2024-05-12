import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(props.name + " constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " mounted");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json.name);
  }

  componentDidUpdate() {
    console.log("Component did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    const { name, location } = this.state.userInfo;

    console.log(name + " render");

    return (
      <div className="about">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Email: abc@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
