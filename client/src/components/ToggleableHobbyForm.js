import React, { Component } from 'react';
import HobbyForm from './HobbyForm';
import PlusButton from './PlusButton';

class ToggleableHobbyForm extends Component{
    getInitialState=()=> {
        return {
        isOpen: false,
        };
    };

    handleFormOpen=()=>{
        this.setState({isOpen:true});
    };

    state = {
        isOpen:false,
    };

    handleFormClose=()=>{
        this.setState({isOpen:false});
    };

    handleFormSubmit=(hobby)=>{
        // this.props.onFormSubmit(hobby);
        this.setState({isOpen:false});
    };

    render() {
        if (this.state.isOpen) {
            return (
                <HobbyForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            ); 
        }
        else{
            return(
                <PlusButton handleFormOpen={this.handleFormOpen}/>
            );
        }
    }
}

export default ToggleableHobbyForm;