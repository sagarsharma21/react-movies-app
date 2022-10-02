import React, {Component} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import logo1 from '../../assets/logo1.svg';
import Modal from 'react-modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
                    onRequestClose={this.closeModalHandler}>
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />    
                    </Tabs>     
                </Modal>
            </div>
        )
    }
}
export default Header;