import './custom.css'


//display component(also define props)
const Display = (props) => {
    return(
        <div>

               //access props value(total)
               <h2 >Total : {props.Total}</h2>
            
        </div>
    )
}


export default Display;