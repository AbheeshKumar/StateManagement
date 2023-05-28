import { useDispatch, useSelector } from "react-redux";
import { setInput } from "./slices/countslice";

export default function Multiply(){
    const count = useSelector((state)=> state.count.value);
    const input = useSelector((state)=> state.count.input);
    const dispatch = useDispatch();

    return(
        <>
        <input type="number" value={input} onChange={e => dispatch(setInput(e.target.value))}/>
            <p>Multiplied number: {count*input}</p>
        </>
    )
}