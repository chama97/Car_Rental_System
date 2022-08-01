import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../components/sidebar";
import AdminNavbar from "../../components/adminNavbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SubmitButton from '../../components/Button';
import CategoryService from "../../services/CategoryService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ToyotaCorolla from '../../assets/img/Premium/Toyota Corolla Axio/002_2.jpg';
import ToyotaAxioNKR165 from '../../assets/img/Premium/Toyota Axio NKR 165/LK21210300-01-E.webp';
import ToyotaAllionNZT260 from '../../assets/img/Premium/Toyota Allion NZT 260/images_toyota_allion_2010_1_b.jpg';
import PeroduaBezzaPrime from '../../assets/img/Premium/Perodua Bezza Prime Sedan/Proton-Persona-1.6-A.webp';


class Category extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                regId: '',
                description: '',
                frontView: null,
                backView: null,
                sideView: null,
                interiorView: null 
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [],
            btnLabel: 'save',
            btnColor: 'success',
        }
    }

    // state = {
    //     selectedFile : null
    // }

    // frontFileSelect = (e) =>{
    //     console.log(e.target.files[0]);
    // }

    // frontFileUpload = () =>{
    // }

    // frontFileSelect = (e) =>{
    //     this.setState({
    //         selectedFile : e.target.files[0]
    //     })
    // }


    deleteCategory = async (regId) => {
        let params = {
            regId: regId
        }
         let res = await CategoryService.deleteCategory(params);

         if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
         } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
         }
    };

    updateCategory = (data) => {
         console.log(data)

         this.setState({ 
            btnLabel: 'update',
            btnColor: 'primary',
            formData: {
                regId: data.regId,
                description: data.description,
                frontView: data.frontView,
                backView: data.backView,
                sideView: data.sideView,
                interiorView: data.interiorView 
            }  
        });
    };


    clearFields = () => {
        this.setState({
            formData: {
                regId: '',
                description: '',
                frontView: null,
                backView: null,
                sideView: null,
                interiorView: null 
            }
        });
    };


    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)  
        })
    };

    loadData = async () => {
        let res = await CategoryService.fetchCategory();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)   

        this.exampleForMap()

    };

    submitCategory = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await CategoryService.postCategory(formData);

            console.log(res)    //print the promise
    
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await CategoryService.putCategory(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    componentDidMount() {
        this.loadData();
    }

    
    render(){
        let { classes } = this.props
        return(
            <Fragment>
                <div className={classes.container}>

                    <div className={classes.leftSide}>
                        <Sidebar />
                    </div>
                    
                    <div className={classes.center}>

                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>

                        <div className={classes.boxes}>

                        <div className={classes.widgets}>

                        <div className={classes.lblcustomer}><span>Car Categories</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.submitCategory} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Reg Id"
                                            size="small"
                                            value={this.state.formData.regId}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.regId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px',display: 'flex', justifyContent:"flex-end"}} >
                                        <Stack spacing={1} direction="row">

                                            <Button variant="outlined" component="label">
                                                Front View
                                                <input hidden accept="image/*" multiple type="file" 
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.frontView= e.target.files[0]
                                                        this.setState({ formData })
                                                    }}/>
                                            </Button> 
                                            <Button variant="outlined" component="label">
                                                Back View
                                                <input hidden accept="image/*" multiple type="file" 
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.backView = e.target.files[0]
                                                        this.setState({ formData })
                                                    }}/>
                                            </Button>
                                            <Button variant="outlined" component="label">
                                                Side View
                                                <input hidden accept="image/*" multiple type="file" 
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.sideView = e.target.files[0]
                                                        this.setState({ formData })
                                                    }}/>
                                            </Button>
                                            <Button variant="outlined" component="label">
                                                Inter View
                                                <input hidden accept="image/*" multiple type="file" 
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.interiorView = e.target.files[0]
                                                        this.setState({ formData })
                                                    }}/>
                                            </Button>

                                            {/* <button variant="contained"label="Login"  
                                                onClick={() => {
                                                    this.frontFileUpload()
                                                }}
                                             > Login</button>
                                
                                            <input type="file"  onChange={(e) => {this.frontFileSelect(e)}}/> */}

                                        </Stack>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Description"
                                            size="small"
                                            value={this.state.formData.description}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.description = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%',hight: '100px' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                            <Button variant="outlined">Search</Button>
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <SubmitButton variant="contained" label={this.state.btnLabel} type="submit" color={this.state.btnColor} />
                                            
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                        </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>          
                           
                                <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                                <TableContainer component={Paper} sx={{maxHeight:'100%'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="Category table">
                            <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> Car Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Description</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> FrontView</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> BackView</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> SideView</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> InteriorView</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.regId}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="left">{row.frontView}</TableCell>
                                            <TableCell align="left">{row.backView}</TableCell>
                                            <TableCell align="left">{row.sideView}</TableCell>
                                            <TableCell align="left">{row.interiorView}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton 
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCategory(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCategory(row.email)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                                </Grid>
                        
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Category) 