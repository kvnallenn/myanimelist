import Link from "next/link"

const AnimeList = ( { api } ) =>{
    return (
        <>
       
        
        {api.data.map((anime) =>{
            return(
            <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-3">
                <div class="card w-77 h-100">
                    <img src={anime.images.webp.image_url} class="card-img-top" width={250} height={300}/>
                    <div class="card-body">
                    <h5 class="card-title">{anime.title}</h5>
                    <Link href={`/${anime.mal_id}`} class="btn btn-primary text-align-center">Read More</Link>
            </div>
            </div>
            </div>
            )
        })}
        
       

        </>
    )
}

export default AnimeList