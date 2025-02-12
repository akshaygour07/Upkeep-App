import React, { useState } from 'react';
import { Box, FormControl, FormLabel, TextField, Button, Grid, Typography, CircularProgress } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BASE_URL } from '../utils/api';

export default function Login() {

  const [loading, setLoading] = useState(false)
  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password: ""
  })

  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginDetails((prevVal) => ({
      ...prevVal,
      [id]: value
    }))
  }


  const handleloginSubmit = async(e) => {
    e.preventDefault()
    try {
    const payload = {...loginDetails}
    const response = await axios.post(`${BASE_URL}/login`, payload)
    const result = response.data
    const access_token = result.access
    sessionStorage.setItem("access_token", access_token)
    if(result){
      navigate("/notes")
      Swal.fire({
        title: "Success!",
        text: "Login Successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      console.error("Try again data not fetched")
    }
    } catch (error) {
      console.error("Error fetching details", error)
    }
    
  }

  const loginPage = () => {
    return(
      <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: 0, padding: 0 }}
    >
      <Box
        component="form"
        onSubmit={handleloginSubmit}
        sx={{
          backgroundColor: '#ffffff',
          padding: 4,
          borderRadius: 4,
          boxShadow: 3,
          width: 600,
          maxWidth: '100%',
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 4 }}>
          Log In
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                fullWidth
                variant="outlined"
                value={loginDetails.email}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                value={loginDetails.password}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              type='submit'
              sx={{
                color: "black",
                padding: 1.5,
                fontWeight: 'bold',
                backgroundColor: "#f5ba13",
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#cd9a09', // darkens the button on hover
                },
              }}
            >
              Login
            </Button>
            <Grid item xs={12}>
            <Typography align='center'>Don't have an account? <Link to="/signup">Signup</Link></Typography>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Typography align="center">
            OR
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                color: "#f5ba13",
                padding: 1.5,
                fontWeight: 'bold',
                border: "1px solid #f5ba13",
                borderRadius: 10,
                '&:hover': {
                  borderColor: '#cd9a09', 
                  color: "#cd9a09"
                },
              }}
            >
              Google Account
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                color: "#f5ba13",
                padding: 1.5,
                fontWeight: 'bold',
                border: "1px solid #f5ba13",
                borderRadius: 10,
                '&:hover': {
                  borderColor: '#cd9a09', 
                  color: "#cd9a09"
                },
              }}
            >
              Microsoft Account
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
    )
  } 

  if(loading){
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress size={50} />
      </Box>
    )
  }

  return (
   loginPage()
  );
}
