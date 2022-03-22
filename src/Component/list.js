import React, {useState, useEffect} from 'react';

const List = () =>{
    const [firstInputValue, setFirstInputValue] = useState();
    const [secondInputValue, setsecondInputValue] = useState();
    const [operationValue, setOperationValue] = useState("div");
    const [totalValue, setTotalValue] = useState();
    const [inputFieldCount, setinputFieldCount] = useState(2);   
    let [values, setValues] = useState({});
    let [operations,setOperations] = useState({});

 

    const inputCal = () =>{
        if(firstInputValue != null && firstInputValue >=1 && secondInputValue != null && secondInputValue >=1 ){
           
                    if(operationValue === "add"){
                        setTotalValue( parseInt(firstInputValue)  + parseInt(secondInputValue) ); 
                    }else if (operationValue === "sub"){
                        setTotalValue(firstInputValue - secondInputValue); 
                    }
                    else if (operationValue === "mul"){
                        setTotalValue(firstInputValue * secondInputValue); 
                    }
                    else if (operationValue === "div"){
                        setTotalValue(firstInputValue / secondInputValue); 
                    }
                }
    }
    const addInputField = () =>{
        setinputFieldCount(inputFieldCount + 1);
     
    } 

    let inputChange = (event) =>{
        values = {...values, [event.target.id]: event.target.value}
        setValues(values);
        // console.log(values);
    }
    const viewOperation = (event) =>{
        operations = {...operations, [event.target.id]: event.target.value}
        setOperations(operations);
        console.log(operations);
    }

    return(
        <div>
            <div>
                <label>Enter Value</label>
                {/* <input type="text" value={firstInputValue}   onChange={setFirstNumber} /> */}
                {Array.from(Array(inputFieldCount)).map((c, index) => {
                    return <input key={c} type="text" id={ 'inputFieldValue'+inputFieldCount} onChange={inputChange}
                    ></input>;
                })}
               
                <button type='submit' onClick={addInputField}>+</button>
                {/* <input type="text" value={secondInputValue} onChange={setSecondNumber}/> */}
                {/* onChange={(e) => setOperationValue(e.target.value) */}
               <select  value={operations} onChange={viewOperation}>
                   <option>Select Operation</option>
                    <option value='div' id="div">Divide</option>
                    <option value='add' id="add" >Add</option>
                    <option value='sub' id="sub">Sub</option>
                    <option value='mul' id="mul">Multiple</option>
                   
                </select>
                <button type='submit' onClick={inputCal} disabled={!firstInputValue || !secondInputValue}>Submit</button>
                <textbox> {totalValue || 0}</textbox>
            </div>
           
        </div>
    );
};

export default List;