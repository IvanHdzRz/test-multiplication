import { useEffect, useRef, useState } from 'react'

export const useTemporizator = ({initialTime=3}) => {
    const timeInterval=useRef(null)

    const [state, setstate] = useState({currentTime:initialTime,isRunning:false})
     const {currentTime,isRunning}=state

    //cuando inicia el temporizador se cambia isRunning a true
    //se estable intervalo para actualizar el temporizador
    const startTemp=()=>{
        setstate((prev)=>({...prev,isRunning:true}))
        timeInterval.current=setInterval(()=>{
            setstate((prev)=>({...prev,currentTime:prev.currentTime-1}))
        },1000)
    }
    
    //detiene el temporizador
    const stopTemp=()=>{
            if(isRunning){
                clearInterval(timeInterval.current);
                setstate((prev)=>({...prev,isRunning:false}))
            }
        
    }
    //reinicia el temporizador
    const resetTemp=()=>{
        if(isRunning){
            clearInterval(timeInterval.current);
        }
        setstate({isRunning:false,currentTime:initialTime})

    }
    //cada vez que se cambie el tiempo actual comprueba
    useEffect(() => {
        //si el temporizador llega a 0 entonces detenlo
        if(currentTime<=0){
            stopTemp();
        }
        
    }, [currentTime,stopTemp])

    //al demontar el componente elimina el temporizador 
    useEffect(() => {
        return () => {
            clearInterval(timeInterval.current)
        }
    }, [])
    
    return [currentTime,startTemp,stopTemp,resetTemp,isRunning]
}
