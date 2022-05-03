import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faClock, faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {readdirSync} from "fs";
import { Key } from 'react'

type Props ={
  portfolio: Array<{
    title: string,
  }>
}

const Home: NextPage<Props> = ({portfolio}) => {
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
        md:grid-cols-2 md:gap-x-3 lg:gap-6 lg:grid-cols-3">
          <div className="flex flex-row border-b-2 border-rose-100 pb-3 md:col-span-2 lg:col-span-3">
            <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
            <h2 className="text-3xl capitalize text-rose-400">About</h2>
          </div>
          <div className="relative w-full h-96 mx-auto md:mx-0 ">
            <Image src="/images/Judy.jpg"  objectFit="cover" alt="Judy" layout="fill" priority/>
          </div>
          <div className="border-t-8 border-b-8 py-3 border-rose-50 md:border-0 md:p-0 md:order-4 md:col-span-2 grid grid-cols-1 gap-3 lg:order-3 lg:col-span-2 h-fit">
          <h3 className="text-2xl capitalize text-rose-400">Welcome to Imagine the Flowers!</h3> 
          <p className="text-lg xl:w-2/3 2xl:w-1/2">
              Imagine the Flowers is a Rochester, New York boutique shop where one-of-a-kind arrangements and decor is loving designed with your vision in mind.
          </p>
          <p className="text-lg xl:w-2/3 2xl:w-1/2">
              As a second career, I started making arrangements for friends and family and one thing led to another!  The arrangements are made as ordered and containers, vases, and embellishments are up-cycled from thrift stores, yard sales and yes - roadside treasures!
          </p> 
          <p className="text-lg xl:w-2/3 2xl:w-1/2">
              I hope you will enjoy the gallery and contact me if I can help with your one of a kind event!
          </p>
          </div>
          <ul className="text-lg grid grid-cols-1 gap-y-3 md:order-3 md:flex md:flex-col lg:order-3 m-auto lg:flex lg:flex-row lg:w-full lg:flex-wrap lg:justify-items-start lg:gap-6">
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-3 px-1 w-6"/><a href="tel:" className="hover:text-underline text-rose-400 hover:text-rose-300">(555) 555-5555</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 px-1 w-6"/><span className="text-rose-400"><a href="mailto:jkatafiaz@yahoo.com" className="hover:text-rose-300">jkatafiaz@yahoo.com</a></span>
            </li>
            <li className="bg-rose-50 rounded-xl max-w-fit p-1">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-400 mr-3 px-1 w-6"/><span>Follow  on Facebook</span>
            </li>
          </ul>
        </section>
        <section id="portfolio" className="w-full p-3 bg-slate-50 rounded drop-shadow-md scroll-m-36 
        sm:scroll-m-24">
            <div className="flex flex-row border-b-2 border-rose-100 pb-3 w-full mb-6">
              <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
              <h2 className="text-3xl capitalize text-rose-400">Portfolio</h2>
            </div>
            <div className="flex flex-row gap-6 flex-wrap">
            
                {portfolio.map((image: any, index: Key | null | undefined) => (
                  <div key={index} className="relative w-96 h-96 md:mx-0  flex-auto">
                    <Image src={"/images/portfolio/" + image}  objectPosition="25% 25%" objectFit="cover" alt={image} layout="fill" priority/>
                  </div>
                ))}
            
             
            </div>        </section>
        <section id="contact" className="w-full p-3 bg-slate-50 rounded drop-shadow-md grid grid-cols-1 gap-y-6 scroll-m-36 sm:scroll-m-24">
          <div className="flex flex-row border-b-2 border-rose-100 pb-3">
            <FontAwesomeIcon className="text-md text-rose-300 pt-3 mr-3" icon={faDiamond} />
            <h2 className="text-3xl capitalize text-rose-400">Contact</h2>
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            <p className="text-xl">Lets Get In Touch!</p>
            <form className="grid grid-cols-1 gap-y-3">
                <input type="text" id="name" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded xl:w-2/3" placeholder="Name"/>
                <input type="phone" id="phone" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded xl:w-2/3" placeholder="Phone"/>
                <input type="email" id="email" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded xl:w-2/3" placeholder="Email"/>
                <textarea id="message" className="w-full border-b-2 border-rose-100 px-3 py-2 rounded xl:w-2/3 h-36" placeholder="Message"></textarea>
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

export async function getStaticProps() {
  const portfolio = readdirSync('public/images/portfolio');
  console.log(portfolio);
  return {
    props: {
      portfolio,
    },
  }
}