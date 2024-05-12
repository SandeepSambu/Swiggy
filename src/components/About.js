import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parents constructor");
  }

  componentDidMount() {
    console.log("parent mounted");
  }

  render() {
    console.log("Parents render");
    return (
      <div className="about">
        <h1>This is AboutUS page</h1>
        <UserClass name={"First Child"} location={"US Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>This is AboutUS page</h1>
//       <UserClass name={"Sandeep Sambu Class"} location={"US Class"} />
//     </div>
//   );
// };

export default About;
