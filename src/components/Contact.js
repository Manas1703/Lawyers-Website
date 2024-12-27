import "../index.css";
import React from 'react';
// import social data
import {social } from '../data';
const Contact = () => {

function Submit(e){
    const formEle = document.querySelector("SubmitButton")
    console.log("Submitted")



    const formData = new FormData(document.getElementById(formEle))
    fetch("https://script.google.com/macros/s/AKfycbyZMTdwFZUFXf--tj0ejw_bfmslh7hCh7sHcBv2QaVMpTEUy7tnhK7BkRa3bAIbaW0m/exec",{
        method : "POST",
        body: formData
    }).then((res)=>res.json()).then((data)=>{
        console.log(data)
    }).catch((error)=>console.log(error))
}
//this is from the video https://www.youtube.com/watch?v=ZA6j2PhXSUg



return (
<section
id='contact'
className='bg-primary Itext-white min-h-[732px]
section'
>

<div className='container mx-auto text-center'>
<h2 className='text-5x1 font-primary
font-extrabold mb-4 text-white'>
Contact us
</h2>
<p className='max-w-[540px] mx-auto px-6
lg:px-0 mb-[64px] text-white'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
reiciendis rerum minima pariatur placeat
corporis suscipit consectetur
aperiam expedita exercitationem.
</p>

<form className='px-8 lg: px-0 max-w-[600px]
mx-auto flex flex-col space-y-6 mb-[46px]' onSubmit={(e)=>Submit(e)}

// action = "https://script.google.com/macros/s/AKfycbybkwVJa0uMx47Kf9sLV_n5zRa4ibIgloi3vVmgxW-DaFuKiO-UbJNrT_icyZegAfwM/exec"
// method="POST"
>
<input className='form-control'
placeholder='Your name' type='text' />

<input className='form-control'
          placeholder='Phone number' type='text' />

<input
className='form-control'
placeholder='Email address'
type='email' />
<textarea className='textarea'
placeholder='Message'></textarea>
<button id="SubmitButton" className='btn bg-accent
hover:bg-accent-hover transition-all' type='submit'>
Send message
</button>
</form>

//type='submit' is also from the video https://www.youtube.com/watch?v=ZA6j2PhXSUg

{/* EXPERIMENT */}
{/* <form className="form" onSubmit={(e)=>Submit(e)} >
<input placeholder="Name" name="Name" type="text" />
<input placeholder="Email" name="Email" type="email" />
<input placeholder="Message" name="Message" type="text" />
<input className="button" type="submit" />
</form> */}
{/* EXPERIMENT */}



{/* socials */}
<div className='flex items-center
justify-between max-w-[205px] mx-auto'>
{social.map((item, index) => {
return (
<a href='#' key={index}>
<img src={item.icon} alt='' />
</a>
);
})}
</div>

</div>

</section>
);
};
export default Contact; 