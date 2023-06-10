import { useState } from 'react';
import './custom.css'
import Display from './DisplayOutput';


//main component
const MainOperations = () => {

    
    //set usestate hook for getting input data
    const [firstinputdata, setFirstInputData] = useState('')
    const [secondinputdata, setSecondInputData] = useState('')

    //set usestate hook for calculate total
    const [total, setTotal] = useState(Number)


    //handle the first input field(use event object for referencing the input target and its value)
    const HandleInput_1 = (e) => {
        return setFirstInputData(e.target.value)
    }

    //handle the second input field(use event object for referencing the input target and its value)
    const HandleInput_2 = (e) => {
        return setSecondInputData(e.target.value)
    }


    //adding operation
    const Adding = () => {
        console.log(`You referenced Adding Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')

        }else{

            setTotal(parseFloat(firstinputdata) + parseFloat(secondinputdata))

        }
    }


    //substract operation
    const Substract = () => {
        console.log(`You referenced  Substract Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')
        }else{
           setTotal(parseFloat(firstinputdata) - parseFloat(secondinputdata))

        }

        
    }


    //multiply operation
    const Multiply = () => {
        console.log(`You referenced  Multiply Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')
        }else{
            setTotal(parseFloat(firstinputdata) * parseFloat(secondinputdata))
        }


    }


    //divide operation
    const Divide = () => {
        if(firstinputdata == "" || secondinputdata == ""){
            alert('Please Fill Input Data..!!')
        }else{
            setTotal(parseFloat(firstinputdata) / parseFloat(secondinputdata))
        }
    }

    



    return(
        <div>

            <div className='inputs'>
               <h3>First Number</h3>
               <input type="text" className='input' value={firstinputdata} onChange={HandleInput_1}/>
               

            </div>

            <div className='inputs'>
              <h3>Second Number</h3>
              <input type="text" value={secondinputdata} onChange={HandleInput_2}/>
            </div>


            //total passing to display component via using display component's already defined props
            <div className="display-component">
               <Display Total={total}/>
                
            </div>


            <div className='main-operations'>

                
                
                <div className='buttons-operators'>
                    
                    <div className="first-buttons">
                       <button onClick={Adding} className='add'>+</button>
                       <button className='substract' onClick={Substract}>-</button>
                    </div>


                    <div className="second-buttons">
                       <button className='multiply' onClick={Multiply}>*</button>
                       <button className='divide' onClick={Divide}>/</button>
                    </div>
                    
                </div>


                


                
            </div>
        </div>
    )
}


export default MainOperations;