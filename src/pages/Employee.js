import NavbarPanel from "../components/NavbarPanel";

export default function Employee() {

    return (
        <div>
            <NavbarPanel />
            <div className="bg-gray-300 min-h-screen mt-16">
                <h1 className="text-2xl font-bold py-10 px-16">Good Evening, Employee!</h1>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div class="lg:max-w-max max-w-md rounded p-5 shadow-lg bg-white">
                        <h1 className="text-2xl font-bold py-3 px-5">Article 1</h1>
                        <div class="px-6 py-4 text-center">
                            <div class="font-bold text-xl mt-2 mb-5">StarWood</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            <div className="my-5">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#8e0000] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Send to Admin
                                </button>
                            </div>
                        </div>
                    </div>
                <div className="my-5">
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
    )
}