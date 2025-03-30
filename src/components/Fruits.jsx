import Fruit from "./Fruit";
import ConditionalComponent from "./ConditionalComponent";
// const fruits = ["Apple", "Mango", "Orange", "Pineapple", "Banana"];
const fruits = [
  { name: "Mango", price: 2.5, emoji: "🥭", soldout: false },
  { name: "Banana", price: 0.7, emoji: "🍌", soldout: true },
  { name: "Apple", price: 1.5, emoji: "🍎", soldout: false },
  { name: "Pineapple", price: 2.75, emoji: "🍍", soldout: true },
];
export default function Fruits() {
  return (
    <ul>
      {fruits.map((item, index) => (
        <Fruit key={index} obj={item} />
      ))}
      {/* <ConditionalComponent /> */}
    </ul>
  );
}
