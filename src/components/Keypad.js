// Code Keypad Component Here

function Keypad (){
    function keypad(event) {
        event.preventDefault()
        console.log('Entering password...')
    }

    return (
        <div>
            <input onChange={keypad} type="password" 
            placeholder="enter password..." /> 
            
        </div>
    )
}

export default Keypad;