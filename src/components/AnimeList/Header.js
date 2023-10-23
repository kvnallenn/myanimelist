import Link from "next/link"

const Header = ({title, linkHref, linkTitle }) =>{
    return(
        <>
        <div class="container-fluid">
        <div class="row mt-2">
           <div class="col">
            {title}
           </div>
           <div class="col-auto">
            {
                linkHref && linkTitle 
                ? 
                <Link href={linkHref}>{linkTitle}</Link> 
                : 
                null
            }
           </div>
        </div>
      </div>
      </>
    )
}

export default Header