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
import PropTypes from 'prop-types';

// const customStyles = {
//     content: {
    // top: '50%',
    // left: '50%',
    // bottom: 'auto',
    // right: 'auto',
    // marginRight: '-50%',
    // Transform: 'translate(-50%,-50%)'
//     }
// };

const TabContainer = function (props) {
    return (
            <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
            {useSlotProps.children}
        </Typography>
    )
} 
TabContainer.PropTypes = {
    children: PropTypes.node.isRequired
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
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        top: '50%',
                        left: '50%',
                        bottom: 'auto',
                        right: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                        <Tab label="Login" />
                        <Tab label="Register" />    
                    </Tabs>     
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" />  
                        </FormControl>
                        <br></br>
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                        <br></br>
                    </TabContainer>
                    }
                </Modal>
            </div>
        )
    }
}
export default Header;