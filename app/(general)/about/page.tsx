import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About',
 description: 'Pagina del about',
 keywords: ['About Page','Miguel','Programador','rey'],
};

export default function AboutPage() {
    return(
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}