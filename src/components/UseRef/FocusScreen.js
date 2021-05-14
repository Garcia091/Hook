import React, {useRef} from 'react'

function FocusScreen() {

    const refInput = useRef()
    //console.log(ref)

    const handleClick =()=>{
        //document.querySelector('input').focus();
        //document.querySelector('input').select();
        refInput.current.select();
        console.log(refInput)
    }

    return (
        <div className="form-group container text-center">
           <h2>Focus Screen</h2>

           <input
            type="text"
            className="form-control"
            ref={refInput}
             />

            <button className="btn btn-outline-danger mt-3"
            onClick={handleClick}
            > Focus</button>
        </div>
    )
}

export default FocusScreen
