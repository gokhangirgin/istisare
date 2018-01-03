import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField, { required, minLength2, maxLength30 } from '../Input'
import renderCheckboxField from '../Input/checkbox'

class NewRoomForm extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    this.props.onSubmit(data);
  }
  render(){
    const {handleSubmit, isSubmitting, isProtected, handleProtection} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Field 
          name="name"
          type="text"
          label="Room name"
          component={renderField}
          validate={[required, minLength2, maxLength30]}
        />

        <Field
          name="is_protected"
          type="checkbox"
          label="Protect room with password"
          component={renderCheckboxField}
          onChange={handleProtection}
        />
        {isProtected ? <Field
          name="password"
          type="password"
          label="Room Password"
          component={renderField}
          validate={[required, minLength2, maxLength30]}
        /> : ''}
        
        <button type="submit" className="btn btn-block btn-success" disabled={isSubmitting}>
          {!isSubmitting ? 'Create Room' : 'Creating Room...'}
        </button>
      </form>
    )
  };
}

export default reduxForm({
  form: 'NewRoomForm'
})(NewRoomForm);
