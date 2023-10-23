import InputSearch from "./InputSearch"

const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body " data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MyAnimeList</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <InputSearch/>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar