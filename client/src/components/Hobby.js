import React, {Component} from 'react';
import axios from 'axios';

class Hobby extends Component{

    handleDeleteHobbies = (e)=>{
        e.preventDefault();
        axios.delete(`/api/hobbies/${this.props.id}`)
        .then((res)=>{
            this.setState({
                hobbies: this.state.res.filter(hobby => hobby.id !== this.props.id),
            });
        console.log(res);
    }).catch((error)=>{
      console.log(error);
    })
    }

    render(){
        return(
            <div className='ui centered card'>
                <div className='header'>
                    {this.props.name}
                </div>
                <div className='extra content'>
                    {/* <span className='right floated edit icon'>
                        <i className='edit icon' onClick={this.props.onEditClick}/>
                    </span> */}
                    <span className='right floated trash icon del-button'>
                        <i className='trash icon'
                            onClick={this.handleDeleteHobbies}
                        />
                    </span>
                </div>
            </div>
        );
    }
}

export default Hobby;