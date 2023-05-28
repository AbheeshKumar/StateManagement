import { useRecoilState } from "recoil";
import { recoilCount } from "./state";

export default function ComponentOne() {
  const [count, setCount] = useRecoilState(recoilCount);

  return (
    <div>
      <h2>Component One</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count is {count}
      </button>
    </div>
  );
}
