import { useRecoilState, useRecoilValue } from "recoil";
import { recoilCount, recoilSelector, modifier } from "./state";

export default function ComponentTwo() {
  const [count, setCount] = useRecoilState(recoilCount);
  const [mod, setMod] = useRecoilState(modifier);
  const modifiedCount = useRecoilValue(recoilSelector);

  return (
    <div>
      <h2>Component Two</h2>
      <div>
        <input
          type="number"
          value={mod}
          onChange={(e) => setMod(e.target.value)}
        />
        <button onClick={() => setCount((prev) => prev + 1)}>
          Modified Count is {modifiedCount}
        </button>
      </div>
    </div>
  );
}
