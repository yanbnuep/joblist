import React, {Component} from 'react';

class DetailView extends React.Component {
    render(){
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default DetailView;