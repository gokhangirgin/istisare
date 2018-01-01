import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types"

import NewRoomForm from './NewRoomForm';
import * as RoomActions from '../actions/RoomActions'

const initialState = {
  room: {},
  roomName: '',
  isSubmitting: false,
  isProtected: false,
  roomPassword: '',
  isCreated: false,
  isExists: false
};

class NewRoom extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProtection = this.handleProtection.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleProtection(e){
    //this.state.isProtected = e.target.checked;
    this.setState({isProtected: e.target.checked});
  }

  handleChange(e){
    const obj = {};
    obj[e.target.id] = e.target.value;
    this.setState(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.roomName.length) return;

    var createRoom = {room: {}};
    createRoom["room"]["name"] = this.state.roomName;
    if(this.state.isProtected && !this.state.roomPassword.length) return;

    if(this.state.roomPassword.length) {
      createRoom["room"]["password"] = this.state.roomPassword;
    }
    this.setState({isSubmitting: true});
    this.props.actions.createRoom( createRoom );
  }

  render(){
    return(
      <NewRoomForm
        roomName={this.state.roomName}
        roomPassword={this.state.roomPassword}
        isSubmitting={this.state.isSubmitting}
        isProtected={this.state.isProtected}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleProtection={this.handleProtection} />
    )
  }
}

NewRoom.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  console.log(state.roomReducer);
  return state.roomReducer;
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(RoomActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRoom);
