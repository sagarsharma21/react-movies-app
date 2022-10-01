import React, {Component} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import logo1 from '../../assets/logo1.svg';

class Header extends Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="default">Login</Button>
                <Button></Button>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default">
                            Login
                        </Button>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;