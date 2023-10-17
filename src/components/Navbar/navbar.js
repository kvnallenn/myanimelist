const Navbar = () => {
    return(
        <>
        <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MyAnimeList</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex mx-auto" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar