import {CgLogIn} from "react-icons/cg";

export default function Login() {
    
    const handleInput = () => {

    }

    const handleSubmit = () => {

    }
    
    return(
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <CgLogIn className='mx-auto h-24 w-auto border-4' />
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
          </div> 
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                {/* Email */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                    Email
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    onChange={handleInput}
                  />
                </div>
              </div>
                {/* Password */}
              <div>
              <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-lg font-medium leading-6 text-gray-900">
                    Password
                  </label>
              </div>
              <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#8e0000] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Login
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
              New to this?{' '}
              <a href="/signup" className="font-semibold leading-6 text-[#8e0000] hover:text-red-600">
                Sign Up
              </a>
            </p>
            </form>
          </div>
        </div>
        </div>
    )
}