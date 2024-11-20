import StartupForm from '@/components/StartupForm'
import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const page = async() => {
    const session = await auth()
    if(!session){
        redirect('/')
    }
    return (
        <>
            <section className='create-pink_container'>    
                <h1 className="create-heading">Submit your Pitch Idea</h1>
            </section>
            <StartupForm/>
        </>
    )
}

export default page