import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField, { required, minLength2, maxLength30 } from '../Input'

class RoomEnteranceForm extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(data) {
        this.props.onEnteranceSubmit(data);
    }

    render(){
        const {handleSubmit, isProtected} = this.props
        return(
            <form onSubmit={handleSubmit(this.handleSubmit)}>
            <Field 
              name="name"
              type="text"
              label="Full Name"
              component={renderField}
              validate={[required, minLength2, maxLength30]}
            />

            {isProtected ? <Field
              name="password"
              type="password"
              label="Room Password"
              component={renderField}
              validate={[required, minLength2, maxLength30]}
            /> : ''}
            
            <button type="submit" className="btn btn-block btn-success">Enter Room</button>
          </form>
        )
    }
}

export default reduxForm({
    form: 'RoomEnteranceForm'
})(RoomEnteranceForm);