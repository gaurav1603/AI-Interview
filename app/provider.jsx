"use client"
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'
import React, { useEffect } from 'react'

function provider({children}) {
    useEffect(()=>{
        CreateNewUser()
    },[])
    const CreateNewUser=()=>{
        supabase.auth.getUser().then(async({data:{user}})=>{
            let { data: Users,error} = await supabase
            .from('Users')
            .select("*")
            .eq('email',user?.email)
            // console.log("HI")
            console.log(Users)
            if(Users?.length==0){
                const {data,error}=await supabase.from("Users")
                .insert([
                    {
                        name:user?.user_metadata?.name,
                        email:user?.email,
                        picture:user?.user_metadata?.picture
                    }
                ])
                console.log(data)
            }
            if(error)console.log(error)
        })
    }
    return (
        <div>
            <Button>
                Hi
            </Button>
        </div>
    )
}

export default provider
