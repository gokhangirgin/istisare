import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { css, StyleSheet } from 'aphrodite';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const CreateRoomForm = () => {
  let input;
  console.log(this);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
    console.log(input.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-group"></i>
            </span>
            <input ref={ node => { input=node }} className="form-control" id="roomName" name="roomName" placeholder="Room name" type="text" />
          </ div>
      </div>
      <button type="submit" className="btn btn-block btn-primary">
        Create Room
      </button>
    </form>
  )
}

const ShowRoomInfo = ({ status = null }) => {
    switch (status) {
      case "CREATED":
        return(
          <div>
            Room has been created
          </div>
        )
        break;
      case "EXISTS":
        return(
          <div>
            Room already exists
          </div>
        )
        break;
      default:
        return('')
    }
}

const CreateRoom = () =>  (
  <div className="card">
    <div className="card-block">
        <CreateRoomForm />
        <ShowRoomInfo />
    </div>
  </div>
)

export default CreateRoom
