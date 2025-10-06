import React, { useEffect, useState } from "react";

const Trafficlight = () => {

   const [num , setNum] = useState(30)
   const [red,setRed] = useState("opacity-25")
   const [yellow,setYellow] = useState("opacity-25")
   const [green,setGreen] = useState("opacity-25")
   const [mean,setMean] = useState("")

   useEffect(()=>{

    if(num==0){
      setNum(30)
    }
    else if(num>=20){
      setRed("opacity-100")
      setYellow("opacity-25")
      setGreen("opacity-25")
      setMean("Stop")
       }
    else if(num>=10 && num <=20){
      setRed("opacity-25")
      setYellow("opacity-100")
      setGreen("opacity-25")
      setMean("Ready")
      }
    else if(num>=0 && num <=10){
      setRed("opacity-25")
      setGreen("opacity-100")
      setYellow("opacity-25")
      setMean("Go")
    }
    setTimeout(() => {
      setNum(num=>num -1)
      
    },1000);


   },)


  return (

     
    <div className="d-flex vh-100 bg-dark flex-column text-white align-items-center justify-content-center">

        <h3 > Trafficlight time:{num}</h3>

        <h3 className="mb-5" >{mean}</h3>
     
        <div className="bg-secondary p-3 rounded-4 d-flex flex-column align-items-center gap-3"  style={{ width: "120px" }}>
       
          <div className={`rounded-circle ${red}`} style={{ width: "70px", height: "70px",backgroundColor: "red"}} />
              
          <div className={`rounded-circle ${yellow}`}  style={{width: "70px",height: "70px", backgroundColor: "yellow" }}/>
            
          <div className={`rounded-circle ${green}`}  style={{width: "70px",height: "70px",backgroundColor: "green" }}/>
          
      </div>
    </div>

    
  );
};

export default Trafficlight;




