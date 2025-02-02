import Link from 'next/link'
 
export default function NotFound() {
    return (
        <section className="bg-gray-900 h-[90vh] w-screen flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-500">Whoops!</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something went wrong!</p>
                <p className="mb-4 text-lg font-light text-gray-400">
                    Sorry, we can not find that page. Please <Link className="text-blue-500" href={"/"}>click here</Link> to go to Home Page.
                </p>
            </div>
        </div>
    </section>
    )
  }