import Profilepic from '../assets/Profilepic-circle2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faPhone, faAt, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
function Contact(){
    return (<>
    <div className=''>
      <img  className="h-[150px]" src={Profilepic}  alt="Mohammad Arsh - Full Stack Developer specializing in React, Node.js, and MongoDB" />


 <div className=' mt-8 break-inside-avoid'>

      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faEnvelope} /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Contacts</h1>
         </div>

         

        
           

    </div>

<div>
   <div className=' flex mt-2'>
    <div>
  {/* <h1 className=' rounded-md ml-2 py-0' ><FontAwesomeIcon icon={faPhone} className='text-[#4d9c77] text-sm py-0' /></h1> */}
 
    </div>
        <h4 className='text-xs text-[#124f44]' > Phone</h4>
         <h1 className='  pl-1 text-[12px] p-data '>+91-9335596042</h1>
         </div>

         <div className=' flex mt-1'>
       
          <div>
  {/* <h1 className=' rounded-md ml-2' ><FontAwesomeIcon icon={faAt} className='text-[#4d9c77] text-sm' /></h1> */}
  
    </div>
    <h4 className='text-xs text-[#124f44]' > Email</h4>
         <h1 className='   pl-1   text-[12px] p-data break-words'>mohammadarsh573380@gmail.com</h1>
         </div>


         <div className=' flex mt-1'>
        
          <div>
 {/* <h1 className=' rounded-md ml-2' ><FontAwesomeIcon icon={faLinkedinIn} className='text-[#4d9c77] text-sm' /></h1> */}
 
    </div>
     <h4 className='text-xs text-[#124f44]' >LinkedIn</h4>
         <h1 className='    pl-1 text-[12px] p-data '>arsh-sid-b645b62b2</h1>
         </div>


         <div className=' flex mt-1 '>
        
          <div>
 {/* <h1 className=' rounded-md  ml-2' ><FontAwesomeIcon icon={faGithub} className='text-[#4d9c77] text-sm' /></h1> */}

    </div>
      <h4 className='text-xs text-[#124f44]' >GitHub</h4>
         <h1 className='  pl-1 text-[12px] p-data '>arshsid274</h1>
         </div>


         <div className=' flex  mt-1'>
         
         <div>
 {/* <h1 className=' rounded-md ml-2 ' ><FontAwesomeIcon icon={faLocationDot} className='text-[#4d9c77] text-sm' /></h1> */}
  
    </div>
    <h4 className='text-xs text-[#124f44]' >Address</h4>
         <h1 className='   pl-1 text-[12px] p-data '>U 35/2 DLF phase3,Gurgaon,Haryana,122002</h1>
         </div>


         <div className=' flex mt-1'>
          <div>
{/* <h1 className=' rounded-md ml-2' ><FontAwesomeIcon icon={faGlobe} className='text-[#4d9c77] text-sm' /></h1> */}

    </div>
          
           <h4 className='text-xs text-[#124f44]' >Portfolio</h4>
         <h1 className='    pl-1 text-[12px] p-data break-words '> <a href="https://vercel.com/arshs-projects-ee90e7e4/my-vite-app" className="text-blue-600 underline text-sm">
  https://vercel.com/arshs-projects-ee90e7e4/my-vite-app
</a></h1>
         </div>
</div>

    </div>
    
    </>);
}

export default Contact;