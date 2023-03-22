import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Read from './Read'

const Teachers = () => {
    var [page,setpage]= useState("")
    const Read=()=>{
        setpage("Go to students")
    }
    var[students,setstudents]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/teachers")
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
                <TableCell>Name</TableCell>
                <TableCell>Class</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.class}</TableCell>
                        
                    </TableRow>
                })}    
            </TableBody>
            </Table>
      </TableContainer>
      <br></br>
      <Button variant='contained' onClick={Read}>Go to students</Button>
    </div>
  )
}

export default Teachers
