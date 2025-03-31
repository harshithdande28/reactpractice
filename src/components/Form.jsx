import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({ firstname: "", secondname: "" });
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <h2>
          {name.firstname} - {name.secondname}
        </h2>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, secondname: e.target.value })}
          value={name.secondname}
        />
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
    </div>
  );
}
