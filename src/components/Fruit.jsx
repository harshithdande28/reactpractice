export default function Fruit({ obj }) {
  return (
    <li>
      {obj.emoji} {obj.name} {obj.price}{"  "}{obj.soldout ? "Item soldout!!" : ""}
    </li>
  );
}
