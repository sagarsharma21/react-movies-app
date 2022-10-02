import React, {Component} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import logo1 from '../../assets/logo1.svg';
import Modal from 'react-modal';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            modalIsOpen:false,
        }
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    }
    
    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    }

    render(){
        return(
            <div>
                <header className="app-header">
                    <img src={logo1} className="app-logo" alt="logo" />
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
                         
                </Modal>
            </div>
        )
    }
}
export default Header;