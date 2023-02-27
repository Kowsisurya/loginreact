import { useState } from "react";

const ToggleButton = (props) => {
    // console.log(props);
    const [isActive, setActive] = useState(props.status);
    // const ToggleClass = () => {
    //     setActive(!isActive); 
    // };
    return(
        <>
        {
            props.clickoption ?
            <>
                {
                    isActive ?
                    <span onClick={() => setActive(!isActive)} className={props.newclass+" asset-symble"}>+</span> :
                    <span onClick={() => setActive(!isActive)} className={props.newclass+" asset-symble"}>-</span>
                }
            </> :
            <>
                {
                    isActive ?
                    <span className={props.newclass+" asset-symble"}>+</span> :
                    <span className={props.newclass+" asset-symble"}>-</span>
                }
            </>
        }
        
            
        </>
    )
}
export default ToggleButton;