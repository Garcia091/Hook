import {useState,useEffect,useRef} from 'react'

export const useFetch = (url) => {
   const [state, setstate] = useState({
       data:null,
       loading:true,
       error:null
   })

   const refMound = useRef(true)

   useEffect(() => {
        
    return () => {
        refMound.current = false
        console.log(refMound)
    }
}, [])
    
   useEffect(() => {
    fetch(url)
    .then(resp=>resp.json())
    .then(data =>{

        setTimeout(() => {
        {
            refMound.current
            ?
            (
                setstate({
                    loading:false,
                    error:null,
                    data
                })
            )
            :
            (
                console.log('El setSate no se llamo')  
            )
        }
        }, 1000)
     
       
    });  
}, [url])
return state;
}
