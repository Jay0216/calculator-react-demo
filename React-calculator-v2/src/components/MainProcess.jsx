import { useState } from 'react'
import './custom.css'
import Display from './Display'


//main process(main logic)
const MainProcess = () => {

    //getting nput values and assign into firstinputvalue, secondinputvalue variables
    const [firstinputvalue, setFirstInputValue] = useState(0)
    const [secondinputvalue, setSecondInputValue] = useState(0)


    //for choosing operators(set operation to the input field)
    const [operation, setOperation] = useState('')

    //for total(set total)
    const [total, setTotal] = useState('')

    //operators list(for pass to the operator input field)
    let opr_list = ['+', "-", 'x', '/']


    //handle the input(get data from using javascript event object and set into the setFirstinputvalue, setSecondInputvalue function)
    const handleInputs_1 = (e) => {
        return setFirstInputValue(e.target.value)
    }

    const handleInputs_2 = (e) => {
        return setSecondInputValue(e.target.value)
    } 


    ///adding the numbers()
    const adding = () => {
        console.log('Adding..!!')

        let add = parseFloat(firstinputvalue) + parseFloat(secondinputvalue)

        setFirstInputValue(add)

        setTotal(add)

        setSecondInputValue(0)
    }


    //substracting number()
    const substracting = () => {
        let substract = parseFloat(firstinputvalue) - parseFloat(secondinputvalue)

        setFirstInputValue(substract)

        setTotal(substract)

        setSecondInputValue(0)
    }


    //multiplying numbers()
    const multiplying = () => {
        console.log('Multiplying..!!')

        let multiply = parseFloat(firstinputvalue) * parseFloat(secondinputvalue)

        setFirstInputValue(multiply)

        setTotal(multiply)

        setSecondInputValue(0)
    }


    //dividing numbers()
    const dividing = () => {
        console.log('Dividing..!!')

        let divide = parseFloat(firstinputvalue) / parseFloat(secondinputvalue)

        setFirstInputValue(divide)
        
        setTotal(divide)

        setSecondInputValue(0)
    }


    //handle the operator choosing input field
    const handleOperation_1 = () => {

        //set adding symbol to the operator field
        setOperation(opr_list[0])

        
    }


    const handleOperation_2 = () => {

        //set substract symbol to the operator field
        setOperation(opr_list[1])

        
    }

    const handleOperation_3 = () => {

        //set multiplying symbol to the operator field
        setOperation(opr_list[2])

        
    }

    const handleOperation_4 = () => {

        //set divide symbol into the operator field
        setOperation(opr_list[3])

        
    }


    //handle all the symbols and passing this function to the operator input field(assign to the onChange method in operator field)
    const handleAllOperations = () => {

        //adding button clicked set adding symbol to the operator input field
        handleOperation_1()

        //substract button clicked set substracting symbol to the operator input field
        handleOperation_2()

        //multiply button clicked set multiplying symbol to the operator input field
        handleOperation_3()

        //divide button clicked set divide symbol to the operator input field
        handleOperation_4()
    }


    //equal button functionality
    const Equal = () => {
       console.log('Total..!!')

       //check all input fields(if it is empty raise a error)
       if(firstinputvalue == "" || secondinputvalue == "" ||  operation == ""){
        alert('Please fill the input fields for calculate..!!')
       }

       //if all input fields filled execute this

       //(operator input field value equals to add symbol pass adding() function)
       else if(operation == '+'){
         adding()
       }

       //(operator input field value equals to substract symbol pass substracting() function)
       else if(operation == '-'){
         substracting()
       }

       //(operator input field value equals to multiply symbol pass multiplying() function)
       else if(operation == 'x'){
        multiplying()
       }

       //(operator input field value equals to divide symbol pass dividing() function)
       else if(operation == '/'){
        dividing()
       }
    }


    


    return(
        <div>
        

          <div className="inputs">
            <input type="text" value={firstinputvalue} onChange={handleInputs_1}/>
          </div>

          

          <div className="inputs">
            <input type="text" value={secondinputvalue} onChange={handleInputs_2}/>
          </div>


          <div className="button-ref">
            <input type="text" value={operation} onChange={handleAllOperations}/>
          </div>



          <div className='display-component'>
            <Display Total={total}/>
          </div>


          


          <div className="btn-section">


             <div className="btn-sec-1">

                <div className="add-btn">
                   <button onClick={handleOperation_1}>+</button>
                </div>

                <div className="sub-btn">
                  <button  onClick={handleOperation_2}>-</button>
                </div>
             </div>



             <div className="btn-sec-2">

                  <div className="multiply-btn">
                    <button onClick={handleOperation_3}>x</button>
                  </div>

                  <div className="divide-btn">
                    <button onClick={handleOperation_4}>/</button>
                  </div>


            </div>


            <div className="total-btn">
                <button onClick={Equal}>=</button>
            </div>


          </div>

          


          
        </div>
    )
}


export default MainProcess;