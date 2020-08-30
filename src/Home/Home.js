import React from 'react';
import './Home.css'
import $ from 'jquery';
const say=(e)=>
{
	if(e=='Login')
		return 'Logged in successfully';
	else
		return 'Registered successfully';
}
const Home=(props)=>
{
	const {onRouteChange, isSignedIn,enter}=props;
	$(document).ready(function(){
		$('body').css('background-color','#B1ADFF');
	if($(window).width()<1000)
	{
		$('.imgimg').css('width','100%');
		$('.signout,.modal').css('font-size','0.7rem');
		$('.modal').css('width','50%');
	}
	setTimeout(function()
		{
			$('.modal').css('display','none');
		},2000)


});


	const send=say(enter);
	console.log(send)
	$('.particles').css('display','none')
	if(isSignedIn)
		return(
			<div className="home">
			<div class="modal">
			<div></div>
			<p>{send}</p>
			</div>
			<nav  style={{display:'flex',justifyContent:'flex-end'}}>	
			<p className='signout grow' onClick={()=>onRouteChange('signin')}>Log Out</p>
		</nav>
		<div className='img'>
		<img class="imgimg" src="https://ci5.googleusercontent.com/proxy/1WMD2Ct_vr6IQEpMB4iU_TdAXewh7WlI0pp9L0I8xEhu6RXZcjgJZ4Qz50ttsfhezRnpfJH2tu3gN9JqBlcYfVyqfnlkFQUD-TLaue1Od7CU95eM4EXQ5hvcP63C=s0-d-e1-ft#https://assets-studymonk.s3.ap-south-1.amazonaws.com/assets/png/signup.png"/>
		</div>
		</div>
			)
}
export default Home;