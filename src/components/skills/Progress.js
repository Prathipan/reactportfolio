import React, { useEffect, useState } from "react";
import "./skills.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});
  
  useEffect(()=>{
    const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
  
      setStyle(newStyle);
  },[]);
    

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
