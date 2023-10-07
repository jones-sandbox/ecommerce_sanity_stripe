import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
import Styles from '../styles/Form.module.css'
import React, {useState} from 'react'
import {HiAtSymbol,HiFingerPrint} from 'react-icons/hi'
import {FaUser} from 'react-icons/fa'

import gallery2 from '../public/assets/img/makufoods-logo.png'
import { useFormik } from 'formik'
import {registerValidate} from '../lib/validate'
import {useRouter} from 'next/router'

const signup = () => {

  const [show, setShow] = useState({password:false, cpassword:false})
  const router = useRouter()

  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:'',
      cpassword:'',
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(values){
    const options = {
      method: 'POST',
      headers: {'Content-Type': application/json},
      body: JSON.stringify(values)
    }

    await fetch('http://localhost:3000/api/auth/signup', options)
    .then(res=>res.json())
    .then((data) => {
      if(data) router.push('http://localhost:3000')
    })
  }

  return (
    <>

       <Head>
         <title>Sign Up</title>
       </Head> 

     <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-1 w-auto"
            src={gallery2}
            height={800}
            alt="Your Company"

          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Customer! Sign up here
          </h2>
        </div>

         
    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm bg-[#f5f5f5] p-4 justify-center items-center">

                 {/*form */}
       <form className="space-y-6 flex flex-col gap-3" onSubmit={formik.handleSubmit}>
          <div className={`${Styles.input_group} ${formik.errors.username && formik.touched.username?'border-rose-600':''}`}>
             <input
             type="text"
             name="username"
             placeholder="Username"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"             {...formik.getFieldProps('username')}
             />           
              <span className="icon flex items-center px-4">
                <FaUser size={25} />
             </span>         
         </div>

         <div className={`${Styles.input_group} ${formik.errors.email && formik.touched.email?'border-rose-600':''}`}>
             <input
             type="email"
             name="email"
             placeholder="Email"
             autoComplete="email"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"             {...formik.getFieldProps('email')}        
             />
             <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
             </span>
         </div>

          <div className={`${Styles.input_group} ${formik.errors.password && formik.touched.password?'border-rose-600':''}`}>
             <input
             type={`${show.password?"text":"password"}`}
             name="password"
             placeholder="Password"
             autoComplete="current-password"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"             {...formik.getFieldProps('password')}
             /> 
             <span className="icon flex items-center px-4" onClick={() => {
              setShow({...show, password:!show.password});
             }}>
              <HiFingerPrint size={25}/>
             </span>
         </div>


         <div className={`${Styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword?'border-rose-600':''}`}>
             <input
             type={`${show.cpassword?"text":"password"}`}
             name="cpassword"
             placeholder="Confirm Password"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"             {...formik.getFieldProps('cpassword')}
             />
             <span className="icon flex items-center px-4" onClick={() => {
              setShow({...show, password:!show.cpassword});
             }}>
              <HiFingerPrint size={25}/>
             </span>
         </div>
         {formik.errors.cpassword && formik.touched.cpassword?<span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}

         {/**sign up button */}
         <div>
              <button type="submit" className={Styles.button}>
                  sign up
              </button>
         </div>
       <p className="text-gray-400">
         Have an account?<Link href={'/login'} className="text-blue-400">login</Link>
       </p>
       <div className="w-full flex items-center justify-center relative py-2">
           <div className="w-full h-[1px] bg-black/40"></div>
           <p className="text-lg absolute text-black/BD bg-[#f5f5f5]">or</p>
        </div>
       <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]"><Link href={"/"}><span className="font-semibold underline underline-offset cursor-pointer"> go home here! </span></Link> </p>
        </div>
       </form>
      </div>           
      
     </section> 

   </>   
        
  
  )
}

export default signup