import React, { useState } from 'react';
import { Box, FormControl, FormLabel, TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../utils/api';

const SocialButton = ({text}) => {
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
    {text}
  </Button>
}

export default function SignUp() {

  const [userdetails, setUserdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: ""
  })

  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserdetails(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmitClick = async(e) => {
    e.preventDefault();
    const payload = {...userdetails}
    try {
      const response = await axios.post(`${BASE_URL}/register`, payload)
      const result = response.data

      if(result.success){
        navigate('/')
        console.log("User Registration successfully")
      } else {
        console.log(result.message)
      }
    } catch (error) {
      console.error("Error fetching details", error)
    }     
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: 0, padding: 0 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmitClick}
        sx={{
          backgroundColor: '#ffffff',
          padding: 4,
          borderRadius: 4,
          boxShadow: 3,
          width: 700,
          maxWidth: '100%',
        }}
      >
        <Typography variant="h5" align="center" sx={{ marginBottom: 4 }}>
          Sign Up
        </Typography>

        <Grid container spacing={2}>
       
          
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                fullWidth
                variant="outlined"
                value={userdetails.firstName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                fullWidth
                variant="outlined"
                value={userdetails.lastName}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

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
                value={userdetails.email}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
              <TextField
                id="mobile"
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
                fullWidth
                variant="outlined"
                value={userdetails.mobile}
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
                value={userdetails.password}
                onChange={handleChange}
                required
                size="small"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              type='submit'
              fullWidth
              sx={{
                color: "black",
                padding: 1.5,
                fontWeight: 'bold',
                backgroundColor: "#f5ba13",
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#cd9a09', 
                },
              }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center'>Already have an account? <Link to="/">Login</Link></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">OR</Typography>
          </Grid>
          <Grid item xs={6}>
            <SocialButton text="Google Account" />
          </Grid>
          <Grid item xs={6}>
            <SocialButton text="Microsoft Account" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
