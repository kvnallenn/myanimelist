import Link from "next/link"

const AnimeList = ( {title, id, images} ) =>{
    return (
        <>
       
        <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 mb-3">
        <div class="card w-77 h-100">
            <img src={images} class="card-img-top" width={250} height={300}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <Link href={`/${id}`} class="btn btn-primary text-align-center">Go somewhere</Link>
            </div>
        </div>
        </div>

        </>
    )
}

export default AnimeList