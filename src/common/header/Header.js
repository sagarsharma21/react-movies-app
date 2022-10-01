import React, {Component} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Header extends Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="default">Login</Button>
                <Button></Button>
            </div>
        )
    }
}
export default Header;