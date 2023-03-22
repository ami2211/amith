import { AppBar, Box, Button , Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Homee = () => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>
            Welcome to react
          </Link></Typography>
          <Button color="inherit">
            <Link to="/Addstudents" style={{color:'white', textDecoration:'none'}}>Addstudents</Link></Button>
            <Button color="inherit"> <Link to="/read" style={{color:'white', textDecoration:'none'}}>students</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
