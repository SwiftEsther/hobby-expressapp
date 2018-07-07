import React, { Component } from 'react';
import axios from 'axios';

class HobbyForm extends Component{
    state = {
        value: ''
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    handleAddHobbies = (e)=>{
        e.preventDefault();
        axios.post('/api/hobbies',{name:this.state.value}).then((res)=>{
        console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
    }

    handleSubmit = () => {
            this.props.onFormSubmit({
            id:this.props.id,
            name:this.state.value,
        });
    };

    render() {
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <form className='ui form' onSubmit={this.handleAddHobbies}>
                        <div className='field'>
                            <label>Hobby: </label>
                            <input type="text" ref="name"
                                defaultValue={this.props.name}
                                onChange={(e) => this.setState({value: e.target.value})}
                                required = {true}/>
                            <div className="attached-buttons">
                                <button type="button"
                                    className="ui teal button"
                                    onClick={this.handleAddHobbies}
                                >
                                    Save
                                </button>
                                <button type="button"
                                    className="ui red button"
                                    onClick={this.props.onFormClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default HobbyForm;