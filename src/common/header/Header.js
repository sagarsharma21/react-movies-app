import React, {Component} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import logo1 from '../../assets/logo1.svg';
import Modal from 'react-modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { useSlotProps } from '@mui/base';

// const customStyles = {
//     content : {
//         import  { Component } from 'react',
//         import './Header.css',
//         import Button from '@mui/material/Button';
//         import logo from '../../assets/logo1.svg';
//     }
// };

const TabContainer = function () {
    return (
        <Typography component="div" style={{padding:0}}>
            {useSlotProps.children}
        </Typography>
    )
} 

class Header extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
            value:0
        }
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }
    
    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    }

    tabChangeHandler = (event, value) => {
        this.setState({value});
    }

    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo1} className="app-logo" alt="Movies App logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onCLick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
           
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    // style={customStyles}
                    >
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        top: '50%',
                        left: '50%',
                        bottom: 'auto',
                        right: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                        <Tab label="Login" />
                        <Tab label="Register" />    
                    </Tabs>     
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" />  
                        </FormControl>

                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                    </TabContainer>
                </Modal>
            </div>
        )
    }
}
export default Header;