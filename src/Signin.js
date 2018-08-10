import React, { Component } from 'react';
import 'tachyons';

class Signin extends Component {
  constructor(props)
  {
    super();
   this.state ={
    email :'',
    passwd :''
    }
  }

  onEmailChange =(event)=> {
this.setState({ email :event.target.value})
  }

  onPasswdChange =(event)=>{
   this.setState({passwd:event.target.value})
  }
    onSubmit= () =>
        {
console.log(this.state);
this.props.onRouteChange('home');
    }

    render() {
      const {onRouteChange} =this.props;

  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
<main className="pa4 black-80">
  <form className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange ={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange ={this.onPasswdChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      
    </fieldset>
    <div className="">
      <input onClick ={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
   
  </form>
</main>
</article>);
}
}
export default Signin;