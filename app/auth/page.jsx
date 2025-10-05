"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import logo from "../../public/logo11.png"
import login1 from "../../public/login1.jpeg"
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    const signInwithGoole=async()=>{
        const {error}=await supabase.auth.signInWithOAuth
        ({
            provider:'google',
        })
        if(error){
            console.error('ERROR: ',error.message)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center'>
                <Image src={logo} alt='logo' width={400} height={400} className='w-[180px]'/>
                <div className='flex items-center flex-col border rounded-2xl p-8'>
                    <Image
                        src={login1}
                        alt='login'
                        width={600}
                        height={400}
                        className='w-[400px] h-[250px] rounded-2xl'
                    />
                    <h2 className='text-2xl font-bold text-center mt-5'>Welcome to AiCruiter</h2>
                    <p className='text-gray-500 text-center'>Sign in with Google Authentication</p>
                    <Button className="mt-7 w-full" onClick={signInwithGoole}>
                        {/* <div className='flex '> */}
                            <FaGoogle/>
                            Login with Google
                        {/* </div> */}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
