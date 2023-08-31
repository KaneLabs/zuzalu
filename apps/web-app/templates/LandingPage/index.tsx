/* eslint-disable arrow-body-style */
import dynamic from "next/dynamic"

// Client Components
const Globe = dynamic(() => import("../../components/Globe"), { ssr: false })

const LandingPage = () => {
    const onSubmit = async (data: any) => {
        console.log(data)
    }

    return (
        <div className="min-w-screen min-h-screen bg-fora-gray950 flex flex-col md:flex-row">
            <div className="flex flex-col justify-center items-start p-10 w-full md:w-1/2">
                <h1 className="text-5xl font-light mb-4 text-fora-gray100 font-serif">Radically Sovereign People</h1>
                <h2 className="text-2xl mb-8 text-brand-h4 text-fora-gray100">Fora is the leading platform for starting and managing new cities.</h2>
                <form onSubmit={onSubmit} className="w-full md:w-2/3 mb-8">
                    <div className="bg-gradient-to-r from-fora-gray200 to-fora-primary p-0.5 rounded flex items-center">
                        <input
                            className="w-full p-2 rounded bg-fora-gray950 flex-1"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                        <button
                            type="submit"
                            className="group ml-2 p-2 rounded font-semibold bg-fora-primary text-fora-gray900 transition-colors duration-200 flex items-center"
                        >
                            Join
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6 inline-block align-text-top stroke-fora-gray800 group-hover:translate-x-[0.2rem] transition-transform duration-200"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden flex items-center">
                <Globe />
            </div>
        </div>
    )
}

export default LandingPage
