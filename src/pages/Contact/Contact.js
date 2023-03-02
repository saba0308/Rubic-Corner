import { Card, CardContent, Stack, Typography } from "@mui/material";

import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Contact.css'
import {
  Paper,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material';
const Contact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Name is required'),
    mobilenumber: Yup.string().required('Mobile Number is required').matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    comments: Yup.string().required('Comments are required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className='homeContainer'>
      <Stack direction={"column"} spacing={4}>
        
     
          <Stack direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }} >
            <Fragment>
              <Paper sx={{ width:350,position:'relative',left:'50px' }}>
              <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;'>Contact Us</Typography>
                <Box px={3} py={2}>

                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="fullnames1111"
                        name="fullname"
                        label="Name"
                        fullWidth
                        margin="dense"
                        {...register('fullname111')}
                        error={errors.fullname ? true : false}
                      />
                      <Typography variant="inherit" color="red">
                        {errors.fullname?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="mobilenumber"
                        name="mobilenumber"
                        label="Mobile Number"
                        fullWidth
                        margin="dense"
                        {...register('mobilenumber')}
                        error={errors.mobilenumber ? true : false}
                      />
                      <Typography variant="inherit" color="red">
                        {errors.mobilenumber?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="email"
                        name="email11111"
                        label="Email"
                        fullWidth
                        margin="dense"
                        error={errors.email ? true : false}
                      />
                      <Typography variant="inherit" color="red">
                        {errors.email?.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="comments"
                        name="comments"
                        label="Comments"
                        fullWidth
                        margin="dense"
                        {...register('comments')}
                        error={errors.comments ? true : false}
                      />
                      <Typography variant="inherit" color="red">
                        {errors.comments?.message}
                      </Typography>
                    </Grid>
                  
                  </Grid>

                  <Box  mt={3} py={2}>
                    <Button sx={{width:'100%'}}
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Register
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Fragment>
            <img className="contact" src="/images/Contact.png" alt="contact" />
          </Stack>
       
   
          <Stack sx={{position:'relative',left:'50px'}} direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} >
            <Card sx={{ minWidth: 250 }}>
              <CardContent>

                <Typography variant="h5" color='#1976d2;' component="div">
                  Development Center I
                </Typography>

                <Typography sx={{ textOverflow: 'ellipsis' }} variant="p">
                  <br />
                  # 21, First Floor, Rubic Complex,Chennai
                </Typography>
              </CardContent>

            </Card>
            <Card sx={{ minWidth: 250 }}>
              <CardContent>

                <Typography color='#1976d2;' variant="h5" component="div">
                  Development Center  II
                </Typography>

                <Typography sx={{ textOverflow: 'ellipsis' }} variant="address">
                  <br />
                  # 37, Third Floor, Rubic Complex,Bangalore
                </Typography>
              </CardContent>

            </Card>
            <Card sx={{ minWidth: 250 }}>
              <CardContent>

                <Typography color='#1976d2;' variant="h5" component="div">
                  Head Office
                </Typography>

                <Typography sx={{ textOverflow: 'ellipsis' }} variant="address">
                  <br />
                  # 22, Second Floor, Rubic Complex,Bangalore
                </Typography>
              </CardContent>

            </Card>
          </Stack>


      </Stack>
    </div>
  );
};

export default Contact;