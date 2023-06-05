import Add from "./Add";
import Substract from "./Substract";
import Multiply from "./Multiply";
import Divide from "./Divide";
import './custom.css'


const Operators = () => {
    return(
        <div className="operators">
            <Add/>
            <Substract/>
            <Multiply/>
            <Divide/>
        </div>
    )
}

export default Operators;