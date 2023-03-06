import { Card, CardContent, Stack, Typography } from "@mui/material";

import React, { Fragment, useRef } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import './Contact.css'
import {
  Paper,
  Grid

} from '@mui/material';
import { useFormik } from 'formik';
const Contact = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = Yup.object().shape({
    to_name: Yup.string().required('Name is required'),
    mobilenumber: Yup.string().required('Mobile Number is required').matches(phoneRegExp, 'Phone number is not valid'),
    to_email: Yup.string().required('Email is required').email('Email is invalid'),
    comments: Yup.string().required('Comments are required')
  });

  const form = useRef();
  const formik = useFormik({
    initialValues: {
      to_name: '',
      mobilenumber: '',
      to_email: '',
      comments: ''
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {

      console.log(JSON.stringify(data, null, 2));
      emailjs.sendForm('service_tjzyjbr', 'template_qf80sce', form.current, 'qdIOGRYOm4F8r9TGU')
        .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
          console.log(error.text);
        });
    },
  });



  return (
    <div className='homeContainer'>
      <Stack direction={"column"} spacing={4}>


        <Stack direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }} >
          <Fragment>
            <Paper sx={{ width: 350, position: 'relative', left: '50px' }}>



              <form ref={form} id="contactForm">
                <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;'>Contact Us</Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                    <div className="form-group">
                      <label htmlFor="to_name"> Name</label>
                      <input
                        name="to_name"
                        type="text"
                        className={
                          'form-control' +
                          (formik.errors.to_name && formik.touched.to_name
                            ? ' is-invalid'
                            : '')
                        }
                        onChange={formik.handleChange}
                        value={formik.values.to_name}
                      />
                      <div className="invalid-feedback">
                        {formik.errors.to_name && formik.touched.to_name
                          ? formik.errors.to_name
                          : null}
                      </div>
                    </div>


                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className="form-group">
                      <label htmlFor="mobilenumber"> Mobile Number </label>
                      <input
                        name="mobilenumber"
                        type="text"
                        className={
                          'form-control' +
                          (formik.errors.mobilenumber && formik.touched.mobilenumber
                            ? ' is-invalid'
                            : '')
                        }
                        onChange={formik.handleChange}
                        value={formik.values.mobilenumber}
                      />
                      <div className="invalid-feedback">
                        {formik.errors.mobilenumber && formik.touched.mobilenumber
                          ? formik.errors.mobilenumber
                          : null}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className="form-group">
                      <label htmlFor="to_email"> Email </label>
                      <input
                        name="to_email"
                        type="email"
                        className={
                          'form-control' +
                          (formik.errors.to_email && formik.touched.to_email ? ' is-invalid' : '')
                        }
                        onChange={formik.handleChange}
                        value={formik.values.to_email}
                      />
                      <div className="invalid-feedback">
                        {formik.errors.to_email && formik.touched.to_email
                          ? formik.errors.to_email
                          : null}
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className="form-group">
                      <label htmlFor="comments"> Comments</label>
                      <textarea
                        name="comments"
                        type="text"
                        className={
                          'form-control' +
                          (formik.errors.comments && formik.touched.comments
                            ? ' is-invalid'
                            : '')
                        }
                        onChange={formik.handleChange}
                        value={formik.values.comments}
                        rows="4" cols="38"
                      ></textarea>
                      <div className="invalid-feedback">
                        {formik.errors.comments && formik.touched.comments
                          ? formik.errors.comments
                          : null}
                      </div>
                    </div>
                  </Grid>

                </Grid>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary" onClick={formik.handleSubmit}>
                    Subscribe
                  </button>
                  {/* <button
    type="button"
    className="btn btn-warning float-right"
    onClick={formik.handleReset}
  >
    Reset
  </button> */}
                </div>
              </form>

            </Paper>
          </Fragment>
          <img className="contact" src="/images/Contact.png" alt="contact" />
        </Stack>


        <Stack sx={{ position: 'relative', left: '50px' }} direction={{ xs: 'column', sm: 'row' }}
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