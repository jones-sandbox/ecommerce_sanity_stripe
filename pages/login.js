import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
import Styles from '../styles/Form.module.css'
import React, {useState} from 'react'

import gallery2 from '../public/assets/img/makufoods-logo.png'
import GOOGLE_ICON from '../public/assets/google.svg'
import {HiAtSymbol, HiFingerPrint} from 'react-icons/hi'
import {signIn} from 'next-auth/react'
import { useFormik } from 'formik'
import login_validate from '../lib/validate'
import {useRouter} from 'next/router'

const login = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()

  const formik =useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: login_validate,
    onSubmit
  })

  async function onSubmit(values){
     const status = await signIn('credentials',{
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl:'/'
      })

      if(status.ok) router.push(status.url)

  }

  //Google Handler function
  async function handleGoogleSignin(){
    signIn('google',{callbackUrl:'http://localhost:3000'})
  }

  return (
       <>

      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
       <Head>
          <title>Login</title>
        </Head> 
     
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-1 w-auto"
            src={gallery2}
            height={800}
            alt="Your Company"

          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          

          <form className="space-y-6 flex flex-col gap-5" action="#" method="POST" onSubmit={formik.handleSubmit}>

          <div className={`${Styles.input_group} ${formik.errors.email && formik.touched.email?'border-rose-600':''}`}>
             <input
             type="email"
             name="email"
             placeholder="Email"
             onChange={formik.handleChange}
             value={formik.values.email}
             autoComplete="email"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             {...formik.getFieldProps('email')}
             />
             <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
             </span>
         </div>

         <div className={`${Styles.input_group} ${formik.errors.password && formik.touched.password?'border-rose-600':''}`}>
             <input
             type={`${show?"text":"password"}`}
             name="password"
             placeholder="Password"
             onChange={formik.handleChange}
             value={formik.values.password}
             autoComplete="current-password"
             required
             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             {...formik.getFieldProps('password')}
             />
             <span className="icon flex items-center px-4 cursor-pointer" onClick={() => {setShow(!show) }}>
              <HiFingerPrint size={25}/>
             </span>
         </div>


          </form>

          <div className="w-full flex items-center justify-between">
         
          <Link href={"/reset"}>
            <p className="font-semibold my-2 hover:text-indigo-500">Forgot Password ?</p>
          </Link>
        </div>

        <div className="w-full flex flex-col">
            <div>
              <button
              type="submit" 
              onChange={formik.onSubmit} 
              value={formik}
              className="flex bg-[#eedc9a] w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-[#324d67] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

        <div className="w-full flex">
            <input type="checkbox" className="w-4 h-4 my-4 mr-2" />
            <p className="text-sm pt-4">Remember me</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative py-2">
           <div className="w-full h-[1px] bg-black/40"></div>
           <p className="text-lg absolute text-black/BD bg-[#f5f5f5]">or</p>
        </div>
        <div className="w-full h-14 text-[#060606] my-4 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
          <Image src={GOOGLE_ICON} className="h-2 mr-2" />
            Sign In with Google
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">Don't have an account? <Link href={"/signup"}><span className="font-semibold underline underline-offset cursor-pointer"> Sign up here </span></Link> </p>
        </div>
        </div>
                
        </div>

      </>    

  )
}

export default login