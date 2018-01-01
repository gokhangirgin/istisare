import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';
import PropTypes from "prop-types"

class NewRoomForm extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-group"></i>
              </span>
              <input className="form-control form-control-lg" id="roomName" name="roomName" placeholder="Room name" type="text" value={this.props.roomName} onChange={this.props.handleChange} />
            </div>
        </div>
        <div className="form-group form-group-info">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" checked={this.props.isProtected} onChange={this.props.handleProtection} />
              <span className="ml-4" style={{fontWeight: 'normal'}}>Protect Room</span>
            </label>
          </div>
        </div>
        <div className={this.props.isProtected ? 'form-group' : 'form-group hide'}>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input className="form-control" id="roomPassword" name="roomPassword" placeholder="Room password" type="password" value={this.props.roomPassword} onChange={this.props.handleChange} />
            </div>
        </div>

        <button type="submit" className="btn btn-block btn-success" disabled={this.props.submitting} onClick={this.props.handleSubmit}>
          {!this.props.isSubmitting ? 'Create Room' : 'Creating Room...'}
        </button>
      </form>
    )
  };
}

NewRoomForm.propTypes = {
  roomName: PropTypes.string,
  isSubmitting: PropTypes.bool,
  isProtected: PropTypes.bool,
  roomPassword: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleProtection: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NewRoomForm;
