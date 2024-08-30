import React,{useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  const handleUpClick=(()=>{
    // console.log("Uppercase was clicked"+ text);
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success");
    
    
  });

  const handleLowClick=(()=>{
    // console.log("Uppercase was clicked"+ text);
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
    
    
  });

  const handleClearClick=(()=>{
    // console.log("Uppercase was clicked"+ text);
    
    setText(" ");
    props.showAlert("Text Cleared","Success");
    
    
  });

  const cut = (()=>{
    setText(" ");
  });


  const handleOnChange=((event)=>{
    // console.log("on Change");
    setText(event.target.value);
  });

  const handleCopy=(()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","Success");
    
  });

  const handleExtraSpaces=(()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","Success");
    
  })

  return ( 
  <>
  <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}> 
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onClick={cut} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
  </div> 
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something"}</p>
  </div>
  </>  
  )
}
