import React from 'react'
import { useState,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function Tablee() {
  
  const[user,setUsers] = useState([]);
  const navigate = useNavigate();
  
  
 

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data);
      
      setUsers(response.data);
    })
    .catch((error) => console.error("Veri çekme hatası:", error));
}, []);


  return (
    <div> <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell >NAME</TableCell>
          <TableCell >USERNAME</TableCell>
          <TableCell >EMAIL</TableCell>
          <TableCell >USER/STREET</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
              <Button onClick={() => navigate(`/details/${row.id}`)} variant="contained">Contained</Button>

            </TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell >{row.email}</TableCell>
            <TableCell >{row.address.street}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
     
    </div>
  )
}

export default Tablee;
