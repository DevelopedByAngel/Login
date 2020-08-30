import React,{Component} from 'react';
import '../Signin/Signin.css'
class Register extends Component 
{
	constructor(props)
	{
		super(props)
		this.state = {
			email:'',
			name:'',
			password:''
		}
	}
	onNameChange(e)
	{
		this.setState({name:e.target.value})
	}
	onEmailChange(e)
	{
		this.setState({email:e.target.value})
	}
	onPasswordChange(e)
	{
		this.setState({password:e.target.value})
	}
	onSubmitRegister=(event)=>
	{
		event.preventDefault();//to prevent post this port
		fetch("https://loginspindle-api.herokuapp.com//register",{
			method: "POST",
			headers: {'Content-Type': 'application/json'},
    	  	body: JSON.stringify({
	        email: this.state.email,
	        name: this.state.name,
	        password: this.state.password
	      })
	    })
      .then(response => response.json())
      .then(user => {
      	console.log(user)
          if (user.name) {
			this.props.onRouteChange('home');
			this.props.enter('Register')
			}
		   else
		   {
		   	alert('Account with this email already exists')
		   }
		})
	}
	render()
	{
		const {onRouteChange}=this.props;
		return (
			<div className="main">
			<main className="pa4 black-80 br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
			  <form className="measure center" onSubmit={(e)=>this.onSubmitRegister(e)}>
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0" >Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
			        <input className="pa2 input-reset ba bg-transparent  hover-white w-100 hover-bg" type="text" name="name" required id="name" onChange={(e)=>this.onNameChange(e)}/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent  hover-white w-100 hover-bg" type="email" name="email-address" required  id="email-address" onChange={(e)=>this.onEmailChange(e)}/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent  hover-white w-100 hover-bg" type="password" name="password" required id="password" onChange={(e)=>this.onPasswordChange(e)}/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
			    </div>
			    <div className="lh-copy mt3">
			      <p  className="f6 pointer dim black db" onClick={()=>onRouteChange('signin')}>Sign in</p>
			    </div>
			  </form>
			</main>
			</div>
			)
	}
}

export default Register;
