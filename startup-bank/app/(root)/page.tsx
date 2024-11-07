import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home ({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query= (await searchParams).query
  const posts =[{
    _createdAt: new Date(),
    views: 101,
    author: {_id:1, name:'James Doe'},
    description: "This is test",
    image: "https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg",
    category: "Robots",
    title: "We Robots"

  }]
  
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
          posts.map((post: StartupCardType)=>(
            <StartupCard key={post?._id} post={post}/>
          ))
        ):(
          <p className="no-result">
            No Startup Found
          </p>
        )}
      </ul>
    </section>
    
    </>
  )
}