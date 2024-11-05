// import SearchForm from "../components/SearchForm";
import SearchForm from "@/components/SearchForm"

export default async function Home ({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query= (await searchParams).query
  
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
    
    </>
  )
}