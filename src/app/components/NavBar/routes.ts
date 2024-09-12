export type routesType = {
    Name: string
    Route: string
    Children: routesType[] | null
}

export const routes: routesType[] = [
    {
        Name: "Photo Gallery",
        Route: "/PhotoGallery",
        Children: null,
    },
    {
        Name: "Services",
        Route: "/Services",
        Children: null,
    },
    {
        Name: "Contact Us",
        Route: "/ContactUs",
        Children: null,
    },
    
]