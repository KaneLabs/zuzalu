import Head from "next/head"
import { useState, useEffect, useCallback } from "react"
import { SiteData } from "../../data/sites"
// import Cookies from "js-cookie"

type LayoutProps = {
    siteData: SiteData
    children: any
    subdomain: string
}

export default function Layout({ siteData, children, subdomain }: LayoutProps) {
    const [scrolled, setScrolled] = useState(false)

    const onScroll = useCallback(() => {
        setScrolled(window.pageYOffset > 20)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [onScroll])

    const [closeModal, setCloseModal] = useState(true)

    // useEffect(() => {
    //     if (closeModal) {
    //         Cookies.set("closeModal", true)
    //     } else {
    //         Cookies.remove("closeModal")
    //     }
    // }, [closeModal])

    // console.log("meta: ", meta)

    return (
        <div>
            <Head>
                <title>{siteData?.header}</title>
                <link rel="icon" href={siteData?.logo} />
                <link rel="shortcut icon" type="image/x-icon" href={siteData?.logo} />
                <link rel="apple-touch-icon" sizes="180x180" href={siteData?.logo} />
                <meta name="theme-color" content="#7b46f6" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta itemProp="name" content={siteData?.title} />
                <meta itemProp="description" content={siteData?.description} />
                <meta itemProp="image" content={siteData?.logo} />
                <meta name="description" content={siteData?.description} />
                <meta property="og:title" content={siteData?.title} />
                <meta property="og:description" content={siteData?.description} />
                <meta property="og:url" content={siteData?.subdomain} />
                <meta property="og:image" content={siteData?.logo} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Vercel" />
                <meta name="twitter:creator" content="@StevenTey" />
                <meta name="twitter:title" content={siteData?.title} />
                <meta name="twitter:description" content={siteData?.description} />
                <meta name="twitter:image" content={siteData?.logo} />
                {subdomain !== "demo" && <meta name="robots" content="noindex" />}
            </Head>
            {/* <div
                className={`fixed w-full ${
                    scrolled ? "drop-shadow-md" : ""
                }  top-0 left-0 right-0 h-16 bg-white z-30 transition-all ease duration-150 flex`}
            >
                <div className="flex justify-center items-center space-x-5 h-full max-w-screen-xl mx-auto px-10 sm:px-20">
                    <Link href="/">
                        <div className="h-8 w-8 inline-block rounded-full overflow-hidden align-middle">
                            <img src={meta?.logo} style={{ height: 40 }} alt={meta?.title} />
                        </div>
                        <span className="inline-block ml-3 font-medium truncate">{meta?.title}</span>
                    </Link>
                </div>
            </div> */}

            {/* <img className="rounded-[0.5rem]" src={meta?.banner} /> */}

            {/* <div className="mt-20">{children}</div> */}
            {children}

            {/* {subdomain === "demo" && (
                <div
                    className={`${
                        closeModal ? "h-14 lg:h-auto" : "lg:h-auto sm:h-40 h-60"
                    } max-w-screen-xl xl:mx-auto mx-5 rounded-lg px-5 lg:pt-3 pt-0 pb-3 flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-center sticky bottom-5 bg-white border-t-4 border-black
          drop-shadow-lg transition-all ease-in-out duration-150`}
                >
                    <button
                        onClick={() => setCloseModal(!closeModal)}
                        className={`${
                            closeModal ? "rotate-180" : "rotate-0"
                        } lg:hidden absolute top-2 right-3 text-black transition-all ease-in-out duration-150`}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            shapeRendering="geometricPrecision"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                    <div className="text-center lg:text-left">
                        <p className="font-cal text-lg sm:text-2xl text-black">Platforms Starter Kit Demo</p>
                        <p className={`${closeModal ? "lg:block hidden" : ""} text-sm text-gray-700 mt-2 lg:mt-0`}>
                            This is a demo site showcasing how to build a multi-tenant application with{" "}
                            <a
                                href="https://platformize.co"
                                target="_blank"
                                className="text-black font-semibold underline"
                            >
                                custom domain
                            </a>{" "}
                            support.
                        </p>
                    </div>
                    <div
                        className={`${
                            closeModal ? "lg:flex hidden" : ""
                        } flex space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row flex-col lg:w-auto w-full text-center`}
                    >
                        <a
                            href="https://app.vitalia.fora.co"
                            target="_blank"
                            className="flex-auto font-cal text-lg rounded-md py-1 sm:py-3 px-5 text-black border border-gray-200 hover:border-black transition-all ease-in-out duration-150 whitespace-no-wrap"
                        >
                            Create your publication
                        </a>
                        <a
                            href="https://vercel.com/guides/nextjs-multi-tenant-application"
                            target="_blank"
                            className="flex-auto font-cal text-lg bg-black text-white border border-black rounded-md py-1 sm:py-3 px-5 hover:text-black hover:bg-white transition-all ease-in-out duration-150 whitespace-no-wrap"
                        >
                            Clone and deploy
                        </a>
                    </div>
                </div>
            )} */}
        </div>
    )
}
