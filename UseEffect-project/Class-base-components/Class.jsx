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
    function handleButtonChange(index) {
      index.preventDefault();
      console.log(index);
    }
    return (
      <div>
        {Dummy_Arrays.map((item) => {
          return (
            <form key={item.id}>
              <h2>{item.Name}</h2>
              <button
                onClick={() => {
                  handleButtonChange(item.id);
                }}
              >
                Change Name
              </button>
              ;
            </form>
          );
        })}
      </div>
    );
  }
}
export default User;
