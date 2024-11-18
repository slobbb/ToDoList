import { useState } from "react";
import './Nav.css';

export default function Nav() {
    let time  = new Date().toLocaleTimeString()
    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
    }
    let date = new Date().toLocaleDateString()
    const [cdate, set] = useState(date)
  setInterval(UpdateTime)
    return (
      <nav>
            <div className="name">
              <p>TO-DO List</p>
            </div>
            <div className="time">
                {ctime}
            </div>
            <div className="date">    
                <p>Date: {cdate}</p>
            </div>
        </nav>
    )
}
