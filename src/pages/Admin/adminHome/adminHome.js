import './adminHome.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Paper, Typography, Grid, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog';


import { useFormik } from 'formik';

const AdminHome = () => {

    const [file, setFile] = useState("");

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e) => {
        console.log("file", e.target.files[0]);
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded
            reader.readAsBinaryString(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setBase64(btoa(binaryString))
    }

    const onFileSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault()
        console.log("bine", base64)
        let payload = { image: base64 }
        console.log("payload", payload)

        setTimeout(() => {
            setIsLoading(false)
        }, 2000)

    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };
    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        console.log("reader", reader)
        console.log("file", file)
        if (reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                setFile(file)
                setSize(file.size);
                setName(file.name)
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    const remove = () => {
        setFile("")
        setImagePreview("")
        setBase64("")
        setName("")
        setSize("")
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Name is required'),
        mobilenumber: Yup.string().required('Mobile Number is required').matches(phoneRegExp, 'Phone number is not valid'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        comments: Yup.string().required('Comments are required')
    });


    const formik = useFormik({
        initialValues: {
            fullname: '',
            mobilenumber: '',
            email: '',
            comments: ''
        },
        validationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (data) => {
            console.log(JSON.stringify(data, null, 2));
        },
    });
    const [data, setdata] = useState([])
    const [id, setid] = useState("")
    const [cardHeader, setCardHeader] = useState("")
    const [cardContent, setCardContent] = useState("")
    const [imagePreview, setImagePreview] = useState("");
    const [base64, setBase64] = useState();

    const [reqId, setreqId] = useState("")
    const [reqHeader, setreqHeader] = useState("")
    const [reqContent, setreqContent] = useState("")
    const [reqCardImage, setreqCardImage] = useState("")

    const [btnText, setbtnText] = useState("Submit")

    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        fetch("http://localhost:8080/Carousel").then((response) => response.json())
            .then((result) => {
                setdata(result)
            })
    }
    const submit = (e) => {
        e.preventDefault();
        resetErrorMessage();
        if (Validate()) {
            if (btnText === "Submit") {
                onFileSubmit(e)
                fetch('http://localhost:8080/Carousel/', {
                    method: 'POST',
                    body: JSON.stringify({
                        id: id,
                        cardHeader: cardHeader,
                        cardContent: cardContent,
                        cardImage: imagePreview,

                    }),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }).then((response) => response.json()).then((result) => {
           
                    toast.success('record inseted',{
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",})
                    getData()
                    resetform();
                    resetErrorMessage();
                    remove();
                    handleClose();
                })
            }
            else {
                fetch('http://localhost:8080/Carousel/' + id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        cardHeader: cardHeader,
                        cardContent: cardContent,
                        cardImage: imagePreview,

                    }),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }).then((response) => response.json()).then((result) => {

                    toast.success('record updated',{
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"})
                    getData()
                    resetform();
                    remove();
                    resetErrorMessage();
                    handleClose();
                })
            }
        }
        // console.log(name,country,comment,tandc)
    }
    const Validate = () => {
        if (id.trim() === "") setreqId("required")
        else if (cardHeader.trim() === "") setreqHeader("required")
        else if (cardContent.trim() === "") setreqContent("required")
        else return true
    }
    const resetErrorMessage = () => {
        setreqId(""); setreqHeader(""); setreqContent(""); setreqCardImage("");
    }
    const resetform = () => {
        setid(""); setCardHeader(""); setCardContent(""); setImagePreview(""); setbtnText("Submit");
    }
    const deleterecord = (id) => {
        fetch("http://localhost:8080/Carousel/" + id, { method: 'DELETE' }).then((response) => response.json())
            .then((result) => {
                toast.success('record deleted',{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",})
                getData()
            })
    }
    const editrecord = (item) => {
        handleClickOpen()
        setid(item.id)
        setImagePreview(item.cardImage)
        setCardHeader(item.cardHeader)
        setCardContent(item.cardContent)
        setbtnText("Update")
    }

    return (
        <Paper sx={{ width: '80%', position: 'relative', left: '15%', top: '25%', height: '600px' }}>
            <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;' > Carousel </Typography>
            {/* <Box px={3} py={2}>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <div className="form-group">
                            <label htmlFor="fullname"> Header</label>
                            <input
                                name="fullname"
                                type="text"
                                className={
                                    'form-control' +
                                    (formik.errors.fullname && formik.touched.fullname
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.fullname && formik.touched.fullname
                                    ? formik.errors.fullname
                                    : null}
                            </div>
                        </div>


                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="form-group">
                            <label htmlFor="comments"> Button value</label>
                            <input
                                name="fullname"
                                type="text"
                                className={
                                    'form-control' +
                                    (formik.errors.fullname && formik.touched.fullname
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.fullname && formik.touched.fullname
                                    ? formik.errors.fullname
                                    : null}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="form-group">
                            <label htmlFor="comments"> Header Content</label>
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
                    <Grid item xs={12} sm={6}>
                        <div className="form-group">
                            <label htmlFor="comments"> Background Image</label>
                            <input type='file' />
                        </div>
                    </Grid>




                </Grid>


                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={formik.handleSubmit}>
                        Register
                    </button>

                </div>
            </Box> */}
            <Button sx={{ width: 100, position: 'relative', left: '82%' }} variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon />} >
                Create
            </Button>

            <Box px={3} py={2}>

                <table className="users-table">
                    <tbody>
                        <tr>
                            <th>Id </th>
                            <th>Card Image </th>
                            <th>Card Header</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {data ? data.map((item, index) =>
                            <tr key={index}>
                                <td>{item.id} </td>
                                <td> <img className='carouselImage' src={item.cardImage} alt={item.cardImage} /></td>
                                <td>{item.cardHeader} </td>
                                <td>
                                    <Button sx={{ width: '100px' }} variant="outlined" onClick={(e) => { editrecord(item) }} startIcon={<EditIcon />}>
                                        Edit
                                    </Button> </td>
                                <td> <Button sx={{ width: '100px' }} variant="outlined" startIcon={<DeleteIcon />} onClick={(e) => { deleterecord(item.id) }}>
                                    Delete
                                </Button></td>

                            </tr>
                        ) : null}
                    </tbody>
                </table>

            </Box>
            <Dialog open={open} onClose={handleClose} >
                <Typography fontSize={42} textAlign='center' fontWeight={400} variant="h2" color='#1976d2;' >Carousel Create </Typography>
                <Box px={3} py={2}>

                    <Grid container spacing={1}>
                        <Grid item xs={10} sm={5}>
                            <div className="form-group">
                                <label htmlFor="id">Card Id</label>
                                <input
                                    name="id"
                                    type="text"
                                    className={'form-control'}
                                    onChange={(e) => setid(e.target.value)}
                                    value={id}
                                />
                                <br />
                                {reqId === "required" && <span className="txt-red">Please enter id</span>}
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={5}>
                            <div className="form-group">
                                <label htmlFor="cardHeader"> Card Header</label>
                                <input
                                    name="cardHeader"
                                    type="text"
                                    className={
                                        'form-control'
                                    }
                                    onChange={(e) => setCardHeader(e.target.value)}
                                    value={cardHeader}
                                />
                                <br />
                                {reqHeader === "required" && <span className="txt-red">Please Enter Header</span>}
                            </div>


                        </Grid>

                        <Grid item xs={10} sm={5}>

                            <div className="form-group">
                                <label htmlFor="cardContent"> Card Content</label>
                                <textarea
                                    name="cardContent"
                                    type="text"
                                    className={
                                        'form-control'
                                    }
                                    onChange={(e) => setCardContent(e.target.value)}
                                    value={cardContent}
                                    rows="4" cols="38"
                                ></textarea>
                                <br />
                                {reqContent === "required" && <span className="txt-red">Please Enter Content</span>}
                            </div>

                        </Grid>
                        <Grid item xs={10} sm={5}>

                            <div className="form-group" onChange={(e) => onChange(e)}>
                                <label htmlFor="cardImage"> Card Background Image</label>
                                <input type='file' onChange={photoUpload} src={imagePreview}
                                />
                                {imagePreview === "" ?
                                    " " :
                                    <img src={imagePreview} alt="Icone adicionar" />
                                }

                            </div>

                        </Grid>




                    </Grid>


                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={submit} value={btnText} >
                            {btnText}
                        </button>

                    </div>
                </Box>
            </Dialog>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                
            />
            {/* Same as */}
            <ToastContainer />
        </Paper>
    )
}
export default AdminHome;