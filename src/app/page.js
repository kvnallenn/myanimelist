import AnimeList from "@/components/AnimeList/animelist"

const Home = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()

  return (
    <>
    <div class="container-fluid mt-2">
      <div class="row">
        {anime.data.map(
          data=>{
            return <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
          }
        )}
      </div>
    </div>
    </>
  )
}

export default Home
