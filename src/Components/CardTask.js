import React from 'react'
import { Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux/es/exports'
import { handelEdit } from '../Redux/Action'


const CardTask =({task})=>{
    const dispatch =useDispatch()
  return (
     <Card style={{ width: '18rem',marginLeft:'790px'}}>
      <Card.Body style={{textAlign :'center', display:'flex', flexDirection:'row' ,justifyContent:'space-between'}}>
        <Card.Title>{task.title}</Card.Title>
        <Card.Title>{task.isDone ? 'true':'false'}</Card.Title>
        <Button onClick={()=>dispatch(handelEdit(task.id))} variant="outline-primary">{task.isDone? 'undone':'done'}</Button>{' '}
        {/* <Button onClick={()=>dispatch(handelEdit(task.id))} variant="secondary">{task.isDone? 'undone':'done'} </Button>{' '} */}
      </Card.Body>
     </Card>
  )
}

export default CardTask