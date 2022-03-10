import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://research.useberry.com/bill-scripts/assignment.php")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ul>
          <div className="innerCells">
            {items.map((item) => (
              <div className={"innerBox"} key={item.color}>
                <button onclick="activateInner()"
                  style={{ backgroundColor: item.color }}
                >
                  {item.color} ({item.title[11]})
                </button>
              </div>
            ))}
          </div>
        </ul>
        <button>Save</button>
      </div>
    );
  }
}

export default App;
