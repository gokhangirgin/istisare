import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types"

import NewRoomForm from '../NewRoomForm';
import {createRoom} from '../../actions/RoomActions'
import { values } from 'redux-form';

const initialState = {
  room: {},
  isSubmitting: false,
  isProtected: false,
  isCreated: false,
  isExists: false
};

class NewRoom extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.onSubmit = this.onSubmit.bind(this);
    this.handleProtection = this.handleProtection.bind(this);

  }

  handleProtection(e){
    this.setState({isProtected: e.target.checked});
  }

  onSubmit(data){
    const room = {room: data};
    this.props.createRoom(room);
  }
  
  render(){
    return(
       <NewRoomForm 
          isSubmitting={this.state.isSubmitting}
          isProtected={this.state.isProtected}
          onSubmit={this.onSubmit}
          handleProtection={this.handleProtection} />
    )
  }
}



export default connect(null, { createRoom })(NewRoom);
