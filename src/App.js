import { ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/themePalette';
import Login from './components/Login';
import {useState, useEffect} from 'react';

function App(){

   // const [users, setUsers] = useState([]);
   const obtenerUsuarios = async() =>{
       const data = await fetch ('https://jsonplaceholder.typicode.com/users');
       const response = await data.json();
       console.log(response);
    };

    useEffect(()=>{
        obtenerUsuarios();

    }, [])

return(
<>
<ThemeProvider theme={theme}> 
    <Login/>
</ThemeProvider>
</>

);


}

export default App;