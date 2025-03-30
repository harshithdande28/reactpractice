export default function Message() {
  function handleClick() {
    return alert("You have Clicked!!");
  }
  return (
    <div>
      <br />
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  );
}
