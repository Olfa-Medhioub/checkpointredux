import React from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch } from "react-redux"
import {useState} from "react"
import { handelAdd } from "../Redux/Action"
const AddTsk=()=>{
    const dispatch = useDispatch()
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')

    return(
    <div className='add'>
     <input onChange={(e)=>setTitle(e.target.value)} type='Text' placeholder="Add items..."/>
     <Button onClick={()=>dispatch(handelAdd({title,id:Math.random(),description,isDone: false}))} variant="primary">Add</Button>{' '}
     </div>
        )
}
export default AddTsk