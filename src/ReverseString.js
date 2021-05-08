import React, {useState} from 'react';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const ReverseString = () => {

    const [strings, setStrings] = useState("");
    const [num, setNum] = useState("");
    const [output, setOutput] = useState("");

const Reverse = () =>
{
    
   
   
    
    var main_sent = []
        
         console.log(strings);
         var p = strings.split(".");
         for (var i = 0 ; i < p.length  ; i++) {
         var a = p[i].split(" ")
         
         var l = (a.length);
        
        if ( l > num) {      
   
    var new_sentence = []
   for (var j=0; j<l;j++){
   if(j>(l-num-1)){
   new_sentence[j] = a[j]
   }else{
   new_sentence[j] = a[l-num-j-1]
   }
   }
  
   main_sent.push(new_sentence.join(" "))
   
        }
        else {
   
   main_sent.push(a.join(" "))
    
       }
      
       }
       var answer = main_sent.join(".")
       setOutput(answer);
   
   
    
   
   
};

    return (
        <div  className="mydiv">
       
      <h3>Input String</h3>
       
      <TextareaAutosize name= "inputs" aria-label="minimum height" rowsMin={3} placeholder="Please Enter String"  onChange = { (e) => setStrings(e.target.value)} />
      <p>Skip Last <TextField className="mytext" name="numbers" size="small" variant="outlined" onChange = { (e) => setNum(e.target.value)}></TextField> 
      Words in a sentence </p>
      <Button variant="contained" color="primary"  onClick={() =>{ Reverse()}}>
  Run
</Button>
<div></div>
<TextareaAutosize name= "inputs" aria-label="minimum height" rowsMin={3} value={output}  />
        
       
        </div>
    )
}

export default ReverseString;
