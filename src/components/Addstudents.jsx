import { Typography ,TextField ,Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = () => {
  var[addstudents,setstudents]= useState({
    id:"",
    name:"",
    grade:""
  })
  const handlechange =(e)=>{
    const {name, value}=e.target
    setstudents({...addstudents,[name]:value})
    console.log(addstudents)
  }
  const savedata=()=>{
    console.log("Button clicked")
    axios.post("http://localhost:3005/students",addstudents)
    .then(response=>{
      alert("Sucesfully added")
    })
    .catch(errors=>{
      alert("faild")
    })

  }
  return (
    <div>
<Typography>Add Students</Typography><br></br>
<br></br>
<TextField  label="id" variant="outlined" name='id' value={addstudents.id} onChange={handlechange}/><br>
</br><br></br>
<TextField  label="NAME" variant="outlined" name='name'value={addstudents.name} onChange={handlechange} /><br></br>
<br></br>
<TextField  label="GRADE" variant="outlined" name='grade'value={addstudents.grade} onChange={handlechange}/>
<br></br>
<br></br>
<Button variant='contained' onClick={savedata}>SUBMIT</Button>
    </div>
  )
}

export default Addstudents
