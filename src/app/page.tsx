
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <main className="container  px-4 py-6">
    <h2 className="text-4xl font-bold mb-4">Welcome to our Page</h2>
    <p>Your website welcome page message serves as its virtual front door, leaving a lasting impression on visitors. Read on for a few reasons why it's a crucial component.</p></main>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-200 p-4">
          <div><Link href="/Spiderman">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 1</h2></Link></div>
          
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div> <Link href="/Spiderman" className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Link>
        </div>
        <div> <Link href="/Spiderman" className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src="https://picsum.photos/200" alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">Post Title 3</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Link>
        </div>
        </div>
        </>
        );
}
