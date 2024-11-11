import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupTypeCard } from "@/components/StartupCard"
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home ({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query= (await searchParams).query
  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY})
  
  return(
    <>
    <section className="pink_container">
      <h2 className="tag">
        Pitch, Vote, and Grow
      </h2>
      <h1 className="heading">
      Pitch Your Startup,<br/>Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search Results for "${query}"` :'Recommended Startups'}
      </p>
      <ul className="card_grid mt-7">
        {posts?.length >0 ? (
          posts.map((post: StartupTypeCard)=>(
            <StartupCard key={post?._id} post={post}/>
          ))
        ):(
          <p className="no-result">
            No Startup Found
          </p>
        )}
      </ul>
    </section>
    <SanityLive/>
    </>
  )
}