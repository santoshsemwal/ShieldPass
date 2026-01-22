import React, { useState } from "react";
import './App.css'
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { Lowercase, number, Uppercase ,specialcharacter} from "./Character.jsx/char";


function App(){

    let[uc,setuc]=useState(false)
    let[lc,setlc]=useState(false)
    let[sc,setsc]=useState(false)
    let[num,setnum]=useState(false)
    let[passl,setpassl]=useState()
    let[fpass,setfpass]=useState('')

    let createpass=()=>{
        let charset=""
        // alert("Hello")
        let finalpass=''
        if(uc || sc|| lc|| num){
            if(uc)charset+=Uppercase;
            if(lc)charset+=Lowercase;
            if(sc)charset+=specialcharacter;
            if(num)charset+=number;
            // alert(charset)
            for(let i=0;i<passl;i++){
                finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
            }
            setfpass(finalpass)
        }
        else{
            toast("Select Atleast One....")
        }
    }

    let copypass=()=>{
        navigator.clipboard.writeText(fpass)
        toast("Copied")
    }

    return(
        <>
        <div className="pass"> 
            <h2>Password Generator </h2>
            <br />
            <div className="passboxin">
                <input type="text" readOnly  value={fpass}/> 
                <button  onClick={copypass}   > <MdOutlineContentCopy /></button>
                <ToastContainer />
            </div>
            <div className="passlength">
                <label htmlFor="">Password Length </label>
                <input type="number" max={20}  min={10} value={passl} onChange={(event)=>setpassl(event.target.value)}   className="box"/>
            </div>
            <div className="passlength">
                <label htmlFor="">Include Uppercase</label>
                <input type="checkbox"  checked={uc} onChange={()=>setuc(!uc)}/>
            </div>
            <div className="passlength">
                <label htmlFor="">Include Lowercase</label>
                <input type="checkbox" checked={lc} onChange={()=>setlc(!lc)} />
            </div>
            <div className="passlength">
                <label htmlFor="">Include Number</label>
                <input type="checkbox"  checked={num} onChange={()=>setnum(!num)}  />
            </div>
            <div className="passlength">
                <label htmlFor="">Include Special characters</label>
                <input type="checkbox" checked={sc} onChange={()=>setsc(!sc)} />
            </div>
            <br />
            <button   onClick={createpass} className="btn">
                Generate Password
            </button>
            <ToastContainer />

        </div>
        </>
    )
}

export default App;