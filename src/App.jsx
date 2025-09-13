import Contact from './Components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faAt, faLocationDot, faGlobe , faUserTie, faFileZipper, faUserGraduate,faRocket,faLanguage,faDesktop,faGear,faMicrochip,faToolbox} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn,faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {


  return (
    <>
 <div className='grid grid-cols-6  '>
  <div className='col-span-2  p-4 mt-4 '>
    <Contact/>
    


<div>
  <div className='mt-4'>
  <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faRocket} /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Skills</h1>
         </div>
         <div >
          <h1 className='bg-[#8ebda7] text-xs font-bold  mt-2 rounded-xl flex text-center items-center justify-center
          '><FontAwesomeIcon className='mr-2' icon={faDesktop}/>Frontend</h1>
          <div className='flex gap-1 mt-2 text-xs font-bold justify-center'>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Html</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Css</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Tailwindcss</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Bootstrap</h3>
         </div>
         </div>
        

<h1 className='bg-[#8ebda7]  text-xs font-bold  mt-2 rounded-xl flex text-center items-center justify-center
          '><FontAwesomeIcon className='mr-2' icon={faGear}/>Backend</h1>
         <div  className='flex gap-1 mt-2 text-xs font-bold justify-center'>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Javascript</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Node</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Express</h3>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Mongo</h3>
          
         </div>

         <h1 className='bg-[#8ebda7] text-xs font-bold  mt-2 rounded-xl flex text-center items-center justify-center
          '><FontAwesomeIcon className='mr-2' icon={faReact}/>Framework</h1>

             <div  className='flex gap-1 mt-2 text-xs font-bold justify-center'>
          
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>React</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Angular</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Vue</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>React Native</h3>
          
         </div>

          <h1 className='bg-[#8ebda7] text-xs font-bold mt-2 rounded-xl flex text-center items-center justify-center
          '><FontAwesomeIcon className='mr-2' icon={faMicrochip}/>Hardware & Tools</h1>
          <div  className='flex gap-1 mt-2 text-xs font-bold justify-center'>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Esp32</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Github</h3>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Postman</h3>
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Seo</h3>
         
          
         </div>

 <h1 className='bg-[#8ebda7] text-xs font-bold  mt-2 rounded-xl flex text-center items-center justify-center
          '><FontAwesomeIcon className='mr-2' icon={faToolbox}/>Operating System</h1>

         
          <div  className='flex gap-1 mt-2 text-xs font-bold justify-center '>
           
         
          <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Linux</h3>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Macos</h3>
           <h3 className='rounded-sm px-1 py-1 bg-[#8ebda7]'>Windows</h3>
         
          
         </div>
          
</div>
  <div className=' mt-8'>
      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faFileZipper} /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Projects</h1>
         </div>

         <div>
 <h2 className='subtitle-headings-Bold text-base mt-2'>Banquet Mangement (FullStack)</h2>
         <p className='text-xs p-data'>Developed an full stack App Frontend and Backend with rest Api . Contributed in Pharmaceutical Data Analytics Tools in cretaing a dynamic Ui components api calling </p>
        <a href="https://github.com/arshsid274/Budha-Avenue-Frontend" className="text-blue-600 underline text-sm">
  https://github.com/arshsid274/<br />Budha-Avenue-Frontend
</a>
         </div>


       

          <div className='mt-2'>
 <h2 className='subtitle-headings-Bold text-base '>Vaslai</h2>
         <p className='text-xs p-data'>Contributed in Pharmaceutical Data Analytics Tools in cretaing a dynamic Ui components api calling and real-time data integration . By creating Components props drilling creating a hero page , login page ,search bar  </p>
        <a href="https://github.com/arshsid274/Budha-Avenue-Frontend" className="text-blue-600 underline text-sm">
  https://github.com/arshsid274/<br />Budha-Avenue-Frontend
</a>
         </div>




        <div className='mt-8'>
  <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md  text-center items-center flex' ><FontAwesomeIcon icon={faFileZipper} /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Personal Projects</h1>
         </div>
</div>
      <div>

 <h2 className='subtitle-headings-Bold text-base mt-2'>Banquet Mangement (FullStack)</h2>
         <p className='text-xs p-data'>Developed an full stack App Frontend and Backend with rest Api . Contributed in Pharmaceutical Data Analytics Tools in cretaing a dynamic Ui components api calling </p>
        <a href="https://github.com/arshsid274/Budha-Avenue-Frontend" className="text-blue-600 underline text-sm">
  https://github.com/arshsid274/<br />Budha-Avenue-Frontend
</a>
          </div>

          <div className='mt-8'>
  <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faFileZipper} /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Certifications</h1>
         </div>
</div>
      <div>

 <h2 className='subtitle-headings-Bold text-base mt-2'>Banquet Mangement (FullStack)</h2>
         <p className='text-xs p-data'>Developed an full stack App Frontend and Backend with rest Api . Contributed in Pharmaceutical Data Analytics Tools in cretaing a dynamic Ui components api calling </p>
        <a href="https://github.com/arshsid274/Budha-Avenue-Frontend" className="text-blue-600 underline text-sm">
  https://github.com/arshsid274/<br />Budha-Avenue-Frontend
</a>
          </div>

          


         

        
           

    </div>
    

</div>


   
  </div>
  <div className='col-span-4  p-4 '>
    <h1 className='text-5xl heading uppercase'>Mohammd Arsh</h1>
    <div className='bg-[#8ebda7]  rounded-2xl mt-2'>
      <p className='uppercase text text-xl pl-2 pt-2'>Full Stack Developer | Web</p>
      <p className='uppercase text text-xl pl-2 pb-2'>Developer | Javascript | Mern</p>
    </div>
    
    <div className=' mt-8'>
      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faUser}  /></h1>
         <h1 className='uppercase text-xl Headings text-[#124f44] pl-2'>Summary</h1>
         </div>
           <p className='text-xs mt-2 p-data'>Energetic Full Stack Developer with hands-on experience in building dynamic and responsive web applications using <span className='font-bold'>JavaScript, React, Node.js, Express, and MongoDB</span> . Completed 2 internships in web development, gaining strong skills in frontend and backend development. Experienced in API integration, CRUD operations, and SEO-friendly website design. Passionate about exploring <span className='font-bold'>cybersecurity and AI applications</span>, with a strong foundation in problem-solving and secure coding practices.</p>

    </div>

    <div className=' mt-8'>
      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faUserTie}  /></h1>
         <h1 className='uppercase text-base Headings text-[#124f44] pl-2'>Experience</h1>
         </div>
           <div className='text-sm mt-2 grid grid-cols-2'>
            <div><h2 className=' subtitle-headings-Bold text-base'>Shine Infosolutions</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-26'>Gorakhpur,India</h2></div>
           </div>

            <div className='text-sm  grid grid-cols-2'>
            <div><h2 className=' subtitle-headings text-base'>Full stack Intern</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-25'>03/2025 - Present</h2></div>
           </div>

           <div>
              <ul className="list-disc ml-4 text-xs p-data ">
    <li>Built a <span className='font-bold'>mobile-responsive UI</span> for Buddha Avenue Banquet App and  enhancing user experience across devices.</li>
    <li>Contributed to <span className='font-bold'>backend development </span>with <span className='font-bold'>role-based CRUD operations </span>role-based CRUD operations and implemented <span className='font-bold'>dynamic Node.js APIs</span> for decryption, signing.</li>
    <li>Assisted in <span className='font-bold'>optimizing and creating static websites</span> for local businesses, including <span className='font-bold'
    >SEO enhancements </span>to improve visibility.</li>
    <li>Gained valuable experience in <span className='font-bold'>React, Angular, API integration, UI development, and SEO,</span> while also supporting the team lead in mentoring two interns.</li>
    <li>Supported the team with <span className='font-bold'>technical suggestions,</span> including a Raspberry Pi–powered local server to maintain app availability offline with auto-sync to the cloud.</li>
  </ul>
           </div>

            <div className='text-sm mt-2 grid grid-cols-2'>
            <div><h2 className=' subtitle-headings-Bold text-base'>Vasl Ai</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-10'>(Remote)Hyderabad,India</h2></div>
           </div>

            <div className='text-sm  grid grid-cols-2'>
            <div><h2 className=' subtitle-headings text-base'>Front End Intern</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-25'>06/2025 - 12/2020</h2></div>
           </div>

           <div>
              <ul className="list-disc ml-4 text-xs p-data ">
    <li>Designed and developed <span className='font-bold'>custom UI</span>  for main website sections (Home, About, Services, Contact) to <span className='font-bold'>enhance user experience</span> and <span className='font-bold'>increase conversion rates</span>.</li>
    <li>Implemented robust <span className='font-bold'>form validation</span> for <span className='font-bold'>username and password authentication</span>.</li>
    <li>Built a dynamic PubChem search bar and <span className='font-bold'>integrated API-driven data</span> into components using props drilling.</li>
    <li><span className='font-bold'>Integrated data</span> from multiple resources into a single application using <span className='font-bold'>REST APIs</span> for seamless functionality.</li>
    <li><span className='font-bold'>Integrated data</span> from multiple resources into a single application using <span className='font-bold'>REST APIs</span> for seamless functionality.</li>
    <li><span className='font-bold'>Integrated data</span> from multiple resources into a single application using <span className='font-bold'>REST APIs</span> for seamless functionality.</li>
  </ul>
           </div>

    </div>

    <div className=' mt-10'>
      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faUserGraduate}  /></h1>
         <h1 className='uppercase text-base Headings text-[#124f44] pl-2'>Education</h1>
         </div>
           <div className='text-sm mt-2 '>
            <div><h2 className=' subtitle-headings-Bold text-base break-inside-avoid'>Uttar Pradesh Rajshri Tandon University</h2></div>
            
           </div>

          <div className='text-sm flex justify-between'>
  <div><h2 className=' subtitle-headings text-base'>Bachelor of Computer Application (BCA)</h2>
  <h2 className=' subtitle-headings text-base'>Overall GPA 7.87 </h2>
  </div>
  <div><h2 className='font-sans text-xs p-data '>03/2025 - Present</h2></div>
</div>

           

            <div className='text-sm mt-2 '>
            <div><h2 className=' subtitle-headings-Bold text-base '>Deen Dayal Upadhyay Gorakhpur University</h2></div>
           
           </div>

            <div className='text-sm flex justify-between'>
  <div><h2 className=' subtitle-headings text-base'>Bachelors Of Commerce (Bcom)</h2>
    <h2 className=' subtitle-headings text-base'>Overall GPA 7.87 </h2>
    </div>
  <div><h2 className='font-sans text-xs p-data'>06/2025 - 12/2020</h2></div>
</div>

          

    </div>

    <div className='mt-4'>
<div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faLanguage}  /></h1>
         <h1 className='uppercase text-base Headings text-[#124f44] pl-2'>Language</h1>
         </div>
        <div className='flex  mt-2 subtitle-headings text-base'>
  <h2 className='uppercase Headings'>English</h2>
  <div className='flex gap-1 items-center'>
<h2 className='mx-auto ml-41 '>Advance  </h2>
 <div className='rounded-full ml-4 bg-[#3cb371] w-4 h-4'></div>
  <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
   <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
    <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
     <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
      <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
  </div>
  
</div>

 <div className='flex  subtitle-headings text-base'>
  <h2 className='uppercase Headings'>Hindi</h2>
  <div className='flex gap-1 items-center'>
<h2 className='mx-auto ml-47 '>Advance  </h2>
 <div className='rounded-full ml-4 bg-[#3cb371] w-4 h-4'></div>
  <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
   <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
    <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
     <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
      <div className='rounded-full bg-[#3cb371] w-4 h-4'></div>
  </div>
  
</div>
    </div>
    
    <div className=' mt-8'>
      <div className=' flex'>
         <h1 className='bg-[#8ebda7] rounded-md p-[2px] px-[4px]' ><FontAwesomeIcon icon={faUserTie}  /></h1>
         <h1 className='uppercase text-base Headings text-[#124f44] pl-2'>Other Experiences</h1>
         </div>
           <div className='text-sm mt-2 grid grid-cols-2'>
            <div><h2 className=' subtitle-headings-Bold text-base'>FIS Global </h2></div>
            <div><h2 className='font-sans text-xs p-data ml-26'>(Remote)Gurgaon,India</h2></div>
           </div>

            <div className='text-sm  grid grid-cols-2'>
            <div><h2 className=' subtitle-headings text-base'>Customer support Executive</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-25'>08/2022 - 07/2023</h2></div>
           </div>

           <div>
              <ul className="list-disc ml-4 text-xs p-data ">
    <li>Assisted customers with queries related to payments, balance deductions, and declined transactions..</li>
    <li>Investigated and resolved transaction disputes, ensuring quick and accurate resolution..</li>
    <li>Helped customers troubleshoot web login issues and guided them through online banking functionalities.</li>
    <li>Educated customers on fraud prevention measures and adhered to banking security protocols..</li>
    <li>Provided information on account status, card activations, and payment processing guidelines..</li>
  </ul>
           </div>

            <div className='text-sm mt-2 grid grid-cols-2'>
            <div><h2 className=' subtitle-headings-Bold text-base'>Telus</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-10'>Noida,India</h2></div>
           </div>

            <div className='text-sm  grid grid-cols-2'>
            <div><h2 className=' subtitle-headings text-base'>Technical Support</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-25'>02/2022 - 09/2022</h2></div>
           </div>

           <div>
              <ul className="list-disc ml-4 text-xs p-data ">
    <li>Handling Customer Queries regarding their ONT , Set top box , Home phone , home security system .</li>
    <li>Providing Troubleshooting step to Resolve the software issue.</li>
    <li>Resolving error code after checking the Knowledge base articles and resolving configuration issue remotely .</li>
    <li>Able to research and grasp technical information across multiple tools while handling the cx. .</li>
    <li>Taking the screen sharing session through bomagar to troubleshoot issue remotely ..</li>

  </ul>
           </div>


              <div className='text-sm mt-2 grid grid-cols-2'>
            <div><h2 className=' subtitle-headings-Bold text-base'>Tech Mahindra</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-10'>Noida,India</h2></div>
           </div>

            <div className='text-sm  grid grid-cols-2'>
            <div><h2 className=' subtitle-headings text-base'>Customer Care</h2></div>
            <div><h2 className='font-sans text-xs p-data ml-25'>02/2022 - 09/2022</h2></div>
           </div>

           <div>
              <ul className="list-disc ml-4 text-xs p-data ">
    <li>Convincing Customer and fulfilling their product related need of Paytm Mall  .</li>
    <li>Explaining the Details regarding the product customer Purchased Resolving the issue.</li>
    <li>Resolving the issue they are facing with the product as well as Generating case and taking action over the call  .</li>
   

  </ul>
           </div>

    </div>

    
  
    
 
  </div>
</div>


    </>
  )
}

export default App
