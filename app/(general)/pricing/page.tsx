import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Princing Page',
 description: 'P]agina de pricing',
 keywords: ['Princing Page','Miguel Angel','FullStack'],
};


export default function PricingPage() {
    return(
        <>
            <span className="text-7xl" >Pricing Page</span>
        </>
    )
}