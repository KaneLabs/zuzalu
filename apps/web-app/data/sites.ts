

export interface SiteData {
    title: string
    header: string
    description: string
    name: string
    subdomain: string
    fullUrl: string
    posts: string[]
    logo: string
    banner: string
}

export const mainSite = {
    title: "Fora - Start a new city",
    header: "Start a new city",
    description:
        "Fora is a platform for starting and managing new cities.",
    name: "Fora",
    subdomain: "www",
    fullUrl: "https://www.fora.co",
    posts: [],
    logo: "https://nvpzrfywktrfmtteywhw.supabase.co/storage/v1/object/public/public/VitaDAO%20Logo%20Heart.png",
    banner: "https://nvpzrfywktrfmtteywhw.supabase.co/storage/v1/object/public/public/vitalia-banner.avif"
}

export const vitaliaSite = {
    title: "Vitalia - Starting the Frontier City of Life",
    header: "Starting the Frontier City of Life",
    description:
        "A 2-month long camp to explore the foundation of a new city - Vitalia, a city that will be run around the idea that “life is good, death is bad”.",
    name: "Vitalia",
    subdomain: "vitalia",
    fullUrl: "https://vitalia.fora.co",
    posts: [],
    logo: "https://nvpzrfywktrfmtteywhw.supabase.co/storage/v1/object/public/public/VitaDAO%20Logo%20Heart.png",
    banner: "https://nvpzrfywktrfmtteywhw.supabase.co/storage/v1/object/public/public/vitalia-banner.avif"
}

export const sites: { [key: string]: SiteData } = {
    www: mainSite,
    vitalia: vitaliaSite
}

export default sites
