"use client"

import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () =>{

    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        event.preventDefault()
        router.push(`/search/${searchRef.current.value}`)    
    }

    return(
        <>
        <form class="d-flex mx-auto input-search" role="search">
                    <input class="form-control me-2" placeholder="Search" aria-label="Search" ref={searchRef} />
                    <button class="btn btn-outline-success" onClick={handleSearch}>Search</button>
        </form>
        </>
    )
}

export default InputSearch