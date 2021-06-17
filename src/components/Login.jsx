import {Grid, Paper, Typography, TextField, Button} from "@material-ui/core";
import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useState  } from "react";
import { loginStyles } from "../styles/loginStyles";



export default function Login ({users}) {
    const classes = loginStyles ();
    console.log(users);

    const users_db=[
        {email: 'yira@gmail.com', password: '12345'},
        {email: 'ymptv2803@gmail.com', password: '67890'}
    ]

     const [validation, setValidation] = useState({
        email:false,
        password:false
    });
 

      const[errors, setErrors] = useState({
        email: true,
        password: true
    });

    const [user, setUser] = useState({
       email:'',
       password:''
    });

   
     const {email, password} = user;


    useEffect(()=>{
        let object = users_db.filter(item => item.email === email);
        let emailValidation = object[0];
      if(emailValidation?.length !== 0 ){
           setValidation({...validation, email:true});
          if(emailValidation?.password === password){
              console.log('Si es el password del usuario');
          }else{
              console.log('No es el password de usuario');
          }

      }else{
          setValidation({ ...validation, email:false});
      }       
            },[user]);




//Escuchar el cambio
    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value   
        });
    };


        
    useEffect(()=>{
            if(email.trim().length !== 0){
                setErrors({...errors, email:false});
    
            }else{
                setErrors({...errors, email:true});
            }

        },[user]);    

    
//Evento Botón
    const handleClick=()=>{
         if(validation.email && validation.password){
            alert('Sesión Iniciada')
  
          }else{
              alert("Correo o Clave Incorrectos")
          }
    };

    return (
        <Grid container justify='center' className={classes.root}> 
             <Grid item xs={12} md={4}>
            <Grid container className={classes.mainContainer}>
                <Grid item xs={12} >
                <Paper elevation={20} className={classes.paper} >
                    <Grid container className={classes.mainContainer}>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography className={classes.tittle} variant="h4" color="secondary">
                            <h1>Login</h1>
                            </Typography>
                        </Grid>


                        
                        <Grid container className={classes.inputContainer} spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField error={errors.email} onChange={handleChange} name="email" value={user.email} label='E-mail' color='secondary'  type='email' variant='outlined'></TextField>
                                               
                                                 
                                                     </Grid>
                                                    
                                                     <Grid item md={12} sm={12} xs={12}>
                                                     {errors.email? (
                                                     <Typography style={{ color:'red'}}>
                                                         No ha llenado el campo email
                                                     </Typography>
                                                     ):null}
                                                     </Grid>
                       
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField name="password"  value={user.password} onChange={handleChange}  label='Password' color='secondary' type='password' variant='outlined'></TextField>
                             
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} className={classes.PaddingButton}>
                           
                            <Button fullWidth variant='contained' onClick={handleClick} color='primary' className={classes.button}>
                                <typography color='secondary'>
                                    Login
                                </typography>
                            </Button>
                             
                        </Grid>
                        </Grid>
                        
                    
                    </Grid>
                </Paper>
                </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

