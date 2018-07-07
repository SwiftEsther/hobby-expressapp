import React, { Component } from 'react';
import Hobby from './Hobby';
import HobbyForm from './HobbyForm';

class EditableHobby extends Component{
    getInitialState = ()=>{
        return{editFormOpen:false,}
    };

    state = {
        editFormOpen:false,
    };

    handleFormClose= ()=>{
        this.closeForm();
    };

    handleSubmit=(hobby)=> {
        this.props.onFormSubmit(hobby);
        this.closeForm();
    };

    closeForm=()=>{
        this.setState({editFormOpen:false});
    };

    render() {
        if (this.state.editFormOpen) {
            return (
                <HobbyForm
                    id = {this.props.id}
                    name={this.props.name}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                >{this.props.name}</HobbyForm>
            );
        }
        else
        return (
            <Hobby
                id = {this.props.id}
                name={this.props.name}
            />
        );
    }
}

export default EditableHobby;