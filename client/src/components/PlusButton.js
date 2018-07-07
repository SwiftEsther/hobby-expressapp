import React, {Component} from 'react';

class PlusButton extends Component{
    render(){
        return(
            <div className='ui basic center aligned segment'>
                <button className="ui animated blue button"
                    onClick={this.props.handleFormOpen}
                >
                    <div className="visible content">Add</div>
                    <div className="hidden content">
                        <i aria-hidden="true" className="right plus icon"></i>
                    </div>
                </button>
            </div>
        );
    }
}

export default PlusButton;