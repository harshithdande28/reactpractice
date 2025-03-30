import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent() {
  const val = false;
  return val ? <Welcome /> : <Code />;
}
