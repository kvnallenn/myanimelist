import AnimeList from "@/components/AnimeList/animelist"
import Header from "@/components/AnimeList/Header"

const Page = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
    <section>
      <Header title="Paling Populer" linkTitle="Link Semua" linkHref='/populer/'/>
        <div class="container-fluid mt-2">
          <div class="row">
          <AnimeList api={topAnime}/>
          </div>
      </div>
    </section>
    </>
  )
}

export default Page