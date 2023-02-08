import React from "react"

export default function Home() {
  return (
    <div className="h-screen w-screen bg-sky-900 flex justify-center items-center">
      <main className="w-3/4 md:w-1/2 h-3/5 md:h-1/2 bg-sky-800 rounded-lg drop-shadow-xl hover:drop-shadow-2xl hover:scale-110 duration-300 hover:animate-none flex justify-center items-center">
        <section className="font-sans">
          <div className="grid md:grid-cols-2 items-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="md:flex-shrink-0 mx-auto h-32 md:h-40 rounded-full" src="https://github.com/castrosuellenx.png" alt="Profile picture" />

            <aside className="flex flex-col items-center md:items-start mt-4 md:mt-0 py-2 md:py-0 bg-sky-900 md:bg-transparent">
              <h1 className="font-bold text-3xl text-sky-50">Suéllen Castro</h1>
              <h2 className="font-normal text-xl text-sky-50">Full Stack Developer</h2>          
              <h3 className="font-light text-base text-sky-300">React.js - React Native - Node.js</h3>
            </aside>
          </div>

          <p className="font-mono font-medium text-lg text-center text-sky-50 px-6 md:px-20">UI Developments with Tailwindcss, using Next.js and TypeScript</p>

          {/* TODO: Finish the button */}
          {/* <button type="button">Explore</button> */}
        </section>
      </main>

      <footer className="fixed bottom-10 text-sky-200 text-md font-sans">
        <a href="https://github.com/castrosuellenx">GitHub</a>
        <a className="mx-8 md:m-12" href="https://www.linkedin.com/in/castrosuellenx/">LinkedIn</a>
        <a href="https://www.codewars.com/users/castrosuellenx/">CodeWars</a>
      </footer>
    </div>
  )
}