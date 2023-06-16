import NavbarPanel from "../components/NavbarPanel";

export default function Admin() {
    return (
        <div>
            <NavbarPanel />
            <div className="bg-gray-300 min-h-screen mt-16">
                <h1 className="text-2xl font-bold py-10 px-16">Good Evening, Admin!</h1>
                <div className="flex flex-col py-10 justify-center items-center gap-20 lg:flex-row">
                    <div class="lg:max-w-xl max-w-md rounded p-5 shadow-lg bg-white">
                        <h1 className="text-2xl font-bold py-3 px-5">Article 1</h1>
                        <div class="px-6 py-4 text-center">
                            <div class="font-bold text-xl mt-2 mb-5">Vista</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            <div className="my-5">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#8e0000] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="lg:max-w-xl max-w-md rounded p-5 shadow-lg bg-white">
                        <h1 className="text-2xl font-bold py-3 px-5">Article 2</h1>
                        <div class="px-6 py-4 text-center">
                            <div class="font-bold text-xl mt-2 mb-5">Daffodil</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            <div className="my-5">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#8e0000] px-5 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    Publish
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}