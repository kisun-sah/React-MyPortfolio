import { useState } from 'react';
import FloatingInput from './FloatingInput'; // Ensure the correct import path
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const Contact = () => {

    const form = {
        name:"",
        email:"",
        phone:"",
        message:""
    }
    const [formData , setFormDAta] = useState(form);
    const handleChange = (id:string , value:string)=> {
        setFormDAta({...formData , [id]:value});
    }
  return (
    <div className="px-16 mx-20 my-10 mb-28 font-mono" id="Contact">
      <h1 className="text-4xl mb-10 text-center font-bold text-white">
        <span className="text-primaryColor">05 &nbsp;</span> Contact
      </h1>

      <div className="flex flex-col m-auto w-[70%] border border-primaryColor     shadow-[0_0_10px_0_#64FFDA]  rounded-3xl p-8 gap-4">
        <div className="text-3xl text-white font-semibold">Let's Connect</div>

        <FloatingInput id="name" name="Name" value={formData.name} handleChange = {handleChange } />

        <FloatingInput id="email" name="Email" value={formData.email} handleChange = {handleChange } />

        <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange = {handleChange } />

        <FloatingInput id="message" name="Message" value={formData.message} handleChange = {handleChange } />

        <Button fullWidth rightSection={<IconArrowRight size={20}/>} className='!text-bgColor !font-bold text-2xl' variant='filled' size='lg' radius='lg' color='#64FFDA' >Send</Button>


      </div>
    </div>
  );
}

export default Contact;
