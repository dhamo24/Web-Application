"use client"
import { useNavigation } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


function hanleNavigateToPage(getcurrentId){
    router.push('/Installation/${getcurrentId}')
}
const BlogPage = () => {
    const router = useRouter();
    return(

        <main className="text-xl" >
            <div className=" font-bold text-2xl text-center">
            <h1>Nextjs</h1></div>
            <div className="px-5 py-6">
        <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</p>
            </div>
            <div>
                <ol>
                    <main className=" text-center  mx-8 ">
                        <div>
                            <li className=" py-5 ">
                                <h1  className="font-bold">Learn Abot Nextjs</h1>
                                <p>Go from beginner to expert by learning the foundations of Next.js and building a fully functional demo website that uses all the latest features.</p>
                            </li>
                        </div>
                        <div>
                        <Link> 
                        <h1 className="font-bold" onClick={() => handleNavigateToPage("Installation")}> How To Install Next.js</h1>
                        <p>Install Node.js. Follow one of the links to install according to your system, Windows or Linux. Step 2: Now create a folder for your project on the desktop and navigate to the folder.</p></Link>
                    
                        </div>

                        <div>
                            <li className=" py-5">
                                <h1 className="font-bold">Reactjs To Nextjs</h1>
                                <p>React has a dedicated framework called Create React App (CRA), an application used to set up React projects that include tools like ESlint. Next.js is a React-based framework that builds server-side rendered apps</p>
                            </li>
                        </div>
                    </main>

                </ol>
                
                
            </div>
        </main>
    )
}
export default BlogPage;


        

