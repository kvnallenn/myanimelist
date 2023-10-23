import AnimeList from "@/components/AnimeList/animelist"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
  
  const {keyword} = params  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <>
    <section>
      <Header title={`Pencarian untuk ${keyword}...`}/>
        <div class="container-fluid mt-2">
          <div class="row">
          <AnimeList api={searchAnime}/>
          </div>
      </div>
    </section>
    </>
  )
}

export default Page