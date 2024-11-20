import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { auth, signIn, signOut } from '@/auth'
import { LogOut } from 'lucide-react'
import { BadgePlus } from 'lucide-react'

const Navbar = async() => {
    const session = await auth()

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-roboto text-black">
            <nav className='flex justify-between items-center'>
                <Link href="/">
                <Image
                    src="/startup-bank-logo.png"
                    width={142}
                    height={30}
                    alt="startup-bank-logo"
                />
                </Link>
                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <> 
                            <Link href="/startup/create">
                                <span className='max-sm:hidden'>
                                    Create
                                </span>
                                <BadgePlus className="size-6 sm:hidden"/>
                            </Link>
                            <form action={async()=>{
                                "use server"
                                await signOut({redirectTo: "/"})
                            }}>
                                <button type="submit">
                                    <span className='max-sm:hidden'>
                                    Logout
                                    </span>
                                    <LogOut className="size-6 sm:hidden text-red-500"/>
                                </button>  
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <span>
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                    ):(
                        <form action={async()=>{
                            "use server"
                            await signIn('github')
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar