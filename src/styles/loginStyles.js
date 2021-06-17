import { makeStyles } from '@material-ui/core/styles';
import {primaryColor} from './themePalette';


export const loginStyles = makeStyles((theme)=>({
/*root:{
    minHeight:'100vh',
    //minHeight: '100%',
   // backgroundColor: '#e9ecef'
   backgroundColor: primaryColor
}*/

root:{
    paddingTop:'100px',

},

paper:{
    borderRadius: '20px',
    height: '600px',
},

mainContainer:{
   // backgroundColor: primaryColor,
    padding: theme.spacing(4,4,4,4),
},
tittle:{
    textAlign: 'center'
    
},

inputContainer:{
    padding: theme.spacing(4,8,4,8),
},

button:{
    textTransform:'none',
    padding: theme.spacing(0,5,0,5),//Función MakeStyles
},
paddingButton:{
    padding: theme.spacing(0,5,0,5),
},



}));

