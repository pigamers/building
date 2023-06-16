import NavbarPanel from "../components/NavbarPanel";


export default function Client() {
    function handleSubmit() {

    }

    return (
        <div>
            <NavbarPanel />
            <div className="bg-gray-300 min-h-screen mt-16">
                <h1 className="text-2xl font-bold py-10 px-16">Good Evening, Client!</h1>
                <div className="flex flex-col py-10 justify-center items-center gap-20 lg:flex-row">
                    <div class="lg:max-w-xl max-w-md rounded p-5 shadow-lg bg-white">
                        <h1 className="text-2xl font-bold py-3 px-5">Article 1</h1>
                        <div class="px-6 py-4 text-center">
                            <div class="font-bold text-xl mt-2 mb-5">Indian Residential</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                    </div>
                    <div class="lg:max-w-xl max-w-md rounded p-5 shadow-lg bg-white">
                        <h1 className="text-2xl font-bold py-3 px-5">Article 2</h1>
                        <div class="px-6 py-4 text-center">
                            <div class="font-bold text-xl mt-2 mb-5">Residential</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-10 justify-center items-center gap-20 lg:flex-row">
                    <div className="lg:py-10 mx-6 lg:mx-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                            {/* Title */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                                        Title
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    // onChange={handleInput}
                                    />
                                </div>
                            </div>
                            {/* Article Description */}
                            <div>
                                <div className="flex flex-col items-center">
                                    <label for="message" class="block text-lg font-medium leading-6 text-gray-900 py-2">Your Article</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#8e0000] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="my-10">
                            <div className="flex bg-white rounded shadow-lg border h-60 max-w-md justify-center items-end py-3">
                                <form>
                                    <label for="chat" class="sr-only">Your message</label>
                                    <div class="flex items-center py-2 rounded-lg bg-[#8e0000]">
                                        <textarea id="chat" rows="1" class="block mx-2 p-2 max-w-lg text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..."></textarea>
                                        <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-red-600">
                                            <svg aria-hidden="true" class="w-6 h-6 rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                            <span class="sr-only">Send message</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}