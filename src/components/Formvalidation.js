import React,{Component} from 'react';
class Formvalidation extends Component {
    constructor (props) {
      super(props)
   
      this.state = {
        email: '',
        valid: true
      }
      this.handleEmailChange = this.handleEmailChange.bind(this)
    }
    
    validateEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
    
    handleEmailChange(e) {
        const email = e.target.value
        const emailValid = this.validateEmail(email) 
  
        this.setState({
          email: e.target.value,
          valid: emailValid
        })
    }
    
    render() {
      let fieldContainerClass = 'field-container'
      const { email, valid } = this.state
      
      if (!valid) {
        fieldContainerClass += ' error'
      }
      
      return <div>
        <h1>Simple React form validation</h1>
        <div className={fieldContainerClass}>
          <input type='email' value={this.state.email} onChange={this.handleEmailChange} placeholder='Email' />
          <span>Invalid e-mail address</span>
        </div>
      </div>
    }
  }
  
 export default Formvalidation;