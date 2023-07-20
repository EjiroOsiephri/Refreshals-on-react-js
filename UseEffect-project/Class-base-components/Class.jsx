import { Component } from "react";

const Dummy_Arrays = [
  {
    id: "1",
    Name: "Ejiro",
  },
  {
    id: "2",
    Name: "Obus",
  },
  {
    id: "3",
    Name: "Mike",
  },
  {
    id: "4",
    Name: "Rukky",
  },
];

class User extends Component {
  render() {
    return (
      <div>
        {Dummy_Arrays.map((item) => {
          <h1>{item.Name}</h1>;
        })}
      </div>
    );
  }
}
export default User;
