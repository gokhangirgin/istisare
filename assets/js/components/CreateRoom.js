import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { css, StyleSheet } from 'aphrodite';


type Props = {
  onSubmit: () => void,
  handleSubmit: () => void,
  submitting: boolean
}

class CreateRoom extends Component {

    props: Props

    render() {
      const { handleSubmit, submitting } = this.props;

      return (
        <div className="card">
          <div className="card-block">
            <form on>
              <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-group"></i>
                    </span>
                    <input className="form-control" id="roomName" name="roomName" placeholder="Room name" type="text" />
                  </ div>
              </div>
              <button type="submit" disabled={submitting} className="btn btn-block btn-primary">
                {submitting ? 'Creating room...' : 'Create room'}
              </button>
            </form>
          </div>
        </div>

      )
  }
}

export default CreateRoom
