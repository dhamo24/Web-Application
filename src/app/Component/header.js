
import Link from "next/link"
        export default function header () {
        return(
            
        <header className="bg-white shadow-lg">
        <div className=" px-4 py-6 flex justify-between items-center bg-black" >
            <h1 className="text-2xl text-white">Blogs</h1>
            <nav className="space-x-4">
                <Link href="/Blog" className="text-white">Blog</Link>
                <Link href="/Service" className="text-white">Service</Link>
                <Link href="/About" className="text-white">About</Link>
                <Link href="/Contactus" className="text-white">Contactus</Link>
                <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded justify-center"> <Link href="/GetInTouch">GetInTouch</Link></button>
            
            </nav>
        </div> 
    </header>
    )
        }
        
        
