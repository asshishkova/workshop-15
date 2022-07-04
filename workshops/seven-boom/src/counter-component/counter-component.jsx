import "./counter-component.css";
import {useState} from "react";

const CounterComponent = props => {
    const [counterValue, setCounterValue] = useState(0);
    let valueOrBoom;
    if (counterValue % 7 === 0 || counterValue.toString().includes("7")) {
      valueOrBoom = 'BOOM!';
    } else {
      valueOrBoom = counterValue;
    }
    return (
        <div className="counter-component">
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue + 1)}>+</button>
            <div className="counter-component__value">{valueOrBoom}</div>
            <button className="counter-component__button" onClick={() => setCounterValue(counterValue - 1)}>-</button>
        </div>
    )
}

export default CounterComponent;
