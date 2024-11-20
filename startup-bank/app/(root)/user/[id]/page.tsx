import { auth } from '@/auth'
import { client } from '@/sanity/lib/client'
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import UserStartups, { StartupCardSkeleton } from '@/components/UserStartups'
import { Suspense } from 'react'

export const experimental_ppr= true

const page = async ({params}: {params:Promise<{id:string}>}) => {
    const id = (await params).id
    const session = await auth()

    const user = await client.fetch(AUTHOR_BY_ID_QUERY,{id})

    //edge case
    if(!user){
        return notFound()
    }

  return (
    <>
        <section className="profile_container">
            <div className="profile_card">
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={220}
                        height={220}
                        className="profile_image"
                    />
                    <h3 className="text-28-semibold uppercase text-center line-clamp-1 mt-7">
                        {user.name}
                    </h3>
                    <p className="text-20-medium text-center">
                        @{user?.username}
                    </p>
                    <p className="mt-6 text-center text-14-normal">
                        {user?.bio}
                    </p>
                </div>

                

                <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
                    <p className="text-30-bold">
                        {session?.id === id ? "Your" : "All"} Startups
                    </p>
                    <ul className="card_grid-sm">
                        <Suspense fallback={<StartupCardSkeleton/>}>
                            <UserStartups id={id}/>
                        </Suspense>
                    </ul>
                </div>
        </section>
    </>
  )
}

export default page