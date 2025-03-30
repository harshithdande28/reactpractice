export default function Fruit({ obj }) {
  return (
    <li>
      {obj.price} {obj.name} {obj.emoji}
    </li>
  );
}
