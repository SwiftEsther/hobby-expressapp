import React, { Component } from 'react';
import EditableHobby from './EditableHobby';

class EditableHobbyList extends Component{
    // state = {
    //     hobbies:[],
    // };

    render() {
        const hobbies = this.props.hobbies.map((hobby) => (
            <EditableHobby
                id={hobby._id}
                name={hobby.name}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
            />
        ));
        return(
            <div id='hobbies'>
                {hobbies}
            </div>
        );
    }
}

export default EditableHobbyList;