import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import NewRoomForm from '../NewRoomForm';
import {createRoom} from '../../actions/RoomActions';
import { values } from 'redux-form';

class NewRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {isProtected: false};
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
          isSubmitting={this.props.isSubmitting}
          isProtected={this.state.isProtected}
          onSubmit={this.onSubmit}
          handleProtection={this.handleProtection} />
    )
  }
}

function mapStateToProps(state) {
  return state.roomReducer;
}

export default connect(mapStateToProps, {createRoom})(NewRoom);
