import { useState } from 'react';
import './custom.css'
import Display from './DisplayOutput';

const MainOperations = () => {

    const [firstinputdata, setFirstInputData] = useState('')

    const [secondinputdata, setSecondInputData] = useState('')

    const [total, setTotal] = useState(Number)

    const HandleInput_1 = (e) => {
        return setFirstInputData(e.target.value)
    }

    const HandleInput_2 = (e) => {
        return setSecondInputData(e.target.value)
    }

    const Adding = () => {
        console.log(`You referenced Adding Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')

        }else{

            setTotal(parseFloat(firstinputdata) + parseFloat(secondinputdata))

        }
    }

    const Substract = () => {
        console.log(`You referenced  Substract Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')
        }else{
           setTotal(parseFloat(firstinputdata) - parseFloat(secondinputdata))

        }

        
    }
 
    const Multiply = () => {
        console.log(`You referenced  Multiply Process..!!`)

        if(firstinputdata == '' || secondinputdata == ''){
            alert('Please Fill Input Data..!!')
        }else{
            setTotal(parseFloat(firstinputdata) * parseFloat(secondinputdata))
        }


    }


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