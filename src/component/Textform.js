import React,{useState} from 'react'

export default function Textform(props  ) {
  const handleUpClick=()=>{
console.log("Upper case click"+text)
let newText=text.toUpperCase();
   setText(newText)
   props.showalert("convert in Uppercase!","Success")
  }
  const handleloClick=()=>{
    console.log("Upper case click"+text)
    let newText=text.toLowerCase();
       setText(newText)
       props.showalert("convert in Lowercase!","Success")
      }


  const handleonchange=(event)=>{
    console.log("on change")
    setText(event.target.value)
      }

    const[text,setText]=useState('');


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#10183e'}}>
       
        <h1>{props.heading}</h1>
            <div className="mb-3" >
     
     
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#10183e'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary  mx-2" onClick={handleloClick}>convert to lowercase</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#10183e'}}>
      <h2>your  text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
     <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text for preview"}</p>
      </div>

    </>
  )
}
