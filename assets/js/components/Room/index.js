import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoomEnteranceForm from '../RoomEnteranceForm';

class Room extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div>
                {this.props.room.name}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.roomReducer;
}