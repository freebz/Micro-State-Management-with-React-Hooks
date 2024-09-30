import { useStore } from "./store.ts";

const Component = () => {
  const { count, text } = useStore();
  return <div>count: {count}</div>;
}