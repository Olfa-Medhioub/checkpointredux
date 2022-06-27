import {useState} from "react"
import { useSelector } from "react-redux/es/exports"
import CardTask from "./CardTask"
const ListTask=()=>{
    const tasks= useSelector(state=>state.tasks)
    const [marwa, setMarwa]= useState('all')
    return(
        <div className="list">
        <button onClick={()=>setMarwa('all')}>ALL</button>
        <button onClick={()=>setMarwa('done')}>Done</button>
        <button onClick={()=>setMarwa('undone')}>Not Done</button>
        {
            marwa=='all'?
            tasks.map(task=> <CardTask task={task}/>)
            : marwa=='done'?
            tasks.filter(task=>task.isDone==true).map(task=> <CardTask task={task}/>)
            : 
            tasks.filter(task=>task.isDone==false).map(task=> <CardTask task={task}/>)

        }
    </div>
         )
}
export default ListTask