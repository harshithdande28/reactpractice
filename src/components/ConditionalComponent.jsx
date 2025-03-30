export default function ConditionalComponent() {
  const val = true;
  if (val) {
    return (
      <div>
        <h1>This is a conditional component.</h1>
      </div>
    );
  }
  return (
    <di>
      <h1>This is from false part of ConditionalComponent</h1>
    </di>
  );
}
