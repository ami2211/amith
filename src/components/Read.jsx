import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Teachers from './Teachers'

const Read = () => {
  const deletestudent=(id)=>{
    console.log("delete clicked" +id);
    axios.delete("http://localhost:3005/students/"+id)
    .then(response =>{
      alert("delete")
      window.location.reload(false)
    })
  }
    var[students,setstudents]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err))
    })
  return (
    <div>
      <Typography variant='h3'>Welcome to my app</Typography>
      <TableContainer>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Update</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell>
                          <Button onClick={()=>deletestudent(value.id)}>Delete</Button>                                                
                        </TableCell>
                        <TableCell>
                          <Button>Update</Button>
                        </TableCell>
                    </TableRow>
                })}    
            </TableBody>
            </Table>
      </TableContainer>
    </div>
  )
}

export default Read
