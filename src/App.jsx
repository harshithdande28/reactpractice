import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
// let emojies = ["🤣", "😔", "❤️"];
const person = {
  name: "Mike",
  message: "Hi there!!",
  emoji: "✌️",
  seatnumber: [12, 222, 31],
};
function App() {
  return (
    <>
      <div className="App">
        {/* <Hello person={person} /> */}
        <Fruits />
      </div>
    </>
  );
}

export default App;
