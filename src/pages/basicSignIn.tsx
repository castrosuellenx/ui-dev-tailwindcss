import React from "react"

export default function BasicSignIn() {

  // TODO: Make SEMANTIC
  return (
    <div className="h-screen w-screen bg-indigo-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-600 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
          <div className="flex-grow">
            <h1 className="text-white text-center text-2xl sm:text-5xl mb-2" >Welcome</h1>
            <p className="text-center text-blue-200 sm:text-lg">Sign in to start</p>
          </div>
        </div>

        <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
          <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
            <div className="sm:flex sm:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://github.com/castrosuellenx.png" alt="Profile picture" className="sm:flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full" />

              <div className="sm:ml-4 sm:text-left text-center">
                <p className="text-xl">Suellen Castro</p>
                <p className="text-sm text-gray-600">Full Stack Developer</p>

                <div className="mt-4">
                  <button type="button" className="btn btn-red text-xs py-1">
                    Isn&apos;t that you?
                  </button>
                </div>
              </div>
            </div>

            <form className="flex w-full mt-8">
              <input type="password" placeholder="Password" className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4" />
              <button type="button" className="flex-shrink-0 btn btn-teal py-2 ml-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}