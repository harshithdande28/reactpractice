function Hello({ person }) {
  return (
    <div>
      <h1>
        Hello {person.name} {person.message} {person.emoji} your seat number is:
        {person.seatnumber[0]}
      </h1>
    </div>
  );
}
export default Hello;
