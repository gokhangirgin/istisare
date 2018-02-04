import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoomEnteranceForm from '../RoomEnteranceForm';
import { joinRoom } from '../../actions/RoomActions';

class Room extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render(){
        const {room, participants, name} = this.props;
        var component;

        if( !name.length ){
            component = <RoomEnteranceForm isProtected={ room.is_protected } />
        }
        else {
            component = <div>{ room.name }</div>
        }
        return(
            component
        )
    }
}

function mapStateToProps(state) {
    return state.roomReducer;
}

export default connect(mapStateToProps, { joinRoom })(Room);