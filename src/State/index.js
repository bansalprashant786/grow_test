import React, {Component} from 'react';
import Homepage from '../Home';

class State  extends Component {

    render(){
        return(
            <Homepage data={ this.props.data[this.props.match.params.id] ? this.props.data[this.props.match.params.id].districts : {}} isState={true}  id={this.props.match.params.id}/>
        )
    }
}

export default State;