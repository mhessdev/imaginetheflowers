import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faClock, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Imagine The Flowers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b-4 border-rose-100 bg-stone-50 p-3 drop-shadow-sm fixed top-0 left-0 right-0 w-full z-10
        sm:p-6 sm:flex sm:flex-row sm:justify-between sm:pb-0
      ">
        <div className="flex justify-start gap-x-3">
          <h1 className="text-3xl font-extrabold capitalize text-rose-400 font-head tracking-wide h-12">Imagine The Flowers</h1>
          <div className="relative w-10 h-10 sm:hidden md:block">
            <Image src="/rose.svg" alt="Imagine The Flowers - Rose" layout="fill"/>
          </div>
        </div>
        <nav className="sm:pt-1">
          <ul className="flex flex-row justify-around text-sm uppercase font-semibold sm:gap-x-2">
            <li className="cursor-pointer py-1 px-2 bg-rose-50 rounded inline-block align-middle drop-shadow-sm hover:drop-shadow-lg text-stone-500">
              <a href="#about">About</a>
            </li>
            <li className="pt-1 inline-block align-middle">
              <FontAwesomeIcon className="text-xs text-rose-300" icon={faDiamond} />
            </li>
            <li className="cursor-pointer py-1 px-2 bg-rose-50 rounded inline-block align-middle drop-shadow-sm hover:drop-shadow-lg text-stone-500">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="pt-1 inline-block align-middle">
              <FontAwesomeIcon className="text-xs text-rose-300" icon={faDiamond} />
            </li>
            <li className="cursor-pointer py-1 px-2 bg-rose-50 rounded inline-block align-middle drop-shadow-sm hover:drop-shadow-lg text-stone-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

      </header>
      <main className="px-6 mt-32 grid grid-col-1 gap-y-6 pb-6 sm:mt-24">
        <section id="about" className="w-full p-3 bg-slate-50 rounded drop-shadow-md 
        grid grid-cols-1 gap-y-6 scroll-m-36 
        sm:scroll-m-24
        md:grid-cols-2 md:gap-x-3">
          <div className="flex flex-row border-b-2 border-rose-100 pb-3 md:col-span-2">
            <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
            <h2 className="text-3xl capitalize text-rose-400">About</h2>
          </div>
          <div className="relative w-full h-64">
            <Image src="https://st2.depositphotos.com/9998432/48297/v/380/depositphotos_482974586-stock-illustration-default-avatar-photo-placeholder-grey.jpg?forcejpeg=true"  objectFit="cover" alt="Judy" layout="fill"/>
          </div>
          <p className="text-lg border-t-8 border-b-8 py-3 border-rose-50 md:border-0 md:p-0 md:order-4 md:col-span-2 lg:order-3 lg:col-span-1">
            Welcome to Imagine The Flowers! Heres a little bit about my self, how i started, why i do this, why i love it. Will need text from client
          </p>
          <ul className="text-lg grid grid-cols-1 gap-y-3 md:order-3 md:flex md:flex-col lg:order-4">
            <li>
              <FontAwesomeIcon icon={faClock} className="mr-3 px-1 w-6"/><span>M-5 9am to 5pm</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMap} className="mr-3 px-1 w-6"/><span>123 Main Street, Anytown, CA</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-3 px-1 w-6"/><a href="tel:" className="hover:text-underline text-rose-400 hover:text-rose-300">(555) 555-5555</a>
            </li>
            <li className="bg-rose-50 rounded-xl max-w-fit p-1">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-400 mr-3 px-1 w-6"/><span>Follow  on Facebook</span>
            </li>
          </ul>
        </section>
        <section id="portfolio" className="w-full p-3 bg-slate-50 rounded drop-shadow-md grid grid-cols-1 gap-y-6 scroll-m-36 
        sm:scroll-m-24 md:grid-cols-3 md:gap-6">
            <div className="flex flex-row border-b-2 border-rose-100 pb-3 md:col-span-3">
              <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
              <h2 className="text-3xl capitalize text-rose-400">Portfolio</h2>
            </div>
            <article className="grid grid-cols-1 gap-y-3 bg-stone-100 rounded hover:drop-shadow-lg">
              <div className="relative w-full h-44">
                <Image src="https://i0.wp.com/imaginetheflowers.com/wp-content/uploads/2022/03/thumbnail-1.jpg?w=480&ssl=1" alt="portfolio 1" layout="fill" objectFit="cover"/>
              </div>
              <div className="p-3 grid grid-cols-1 gap-y-3">
                <h3 className="text-xl font-bold">This is a portfolio project title</h3>
                <p>
                  This is a small bit about the project we can make this a page that has more information if you like
                </p>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-y-3 bg-stone-100 rounded hover:drop-shadow-lg">
              <div className="relative w-full h-44">
                <Image src="https://i0.wp.com/imaginetheflowers.com/wp-content/uploads/2022/03/thumbnail-1.jpg?w=480&ssl=1" alt="portfolio 1" layout="fill" objectFit="cover"/>
              </div>
              <div className="p-3 grid grid-cols-1 gap-y-3">
                <h3 className="text-xl font-bold">This is a portfolio project title</h3>
                <p>
                  This is a small bit about the project we can make this a page that has more information if you like
                </p>
              </div>
            </article>
        </section>
        <section id="contact" className="w-full p-3 bg-slate-50 rounded drop-shadow-md grid grid-cols-1 gap-y-6 scroll-m-36 sm:scroll-m-24">
          <div className="flex flex-row border-b-2 border-rose-100 pb-3">
            <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
            <h2 className="text-3xl capitalize text-rose-400">Contact</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            <p className="text-xl">Lets Get In Touch!</p>
            <form className="grid grid-cols-1 gap-y-3">
                <input type="text" id="name" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded" placeholder="Name"/>
                <input type="phone" id="phone" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded" placeholder="Phone"/>
                <input type="email" id="email" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded" placeholder="Email"/>
                <textarea id="message" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded h-36" placeholder="Message"></textarea>
            </form>
          </div>
        </section>
      </main>
      <footer className="p-6 mt-6 border-t-2 border-rose-100 bg-stone-50 text-center">
        <p>&copy; 2022 Imagine The Flowers</p>
      </footer>
    </>
  )
}

export default Home
