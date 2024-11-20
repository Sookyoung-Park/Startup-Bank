// layout applied to only (root) located pages
import React from "react";
import Navbar from "@/components/Navbar";

export default function Layout({children}:Readonly<{ children: React.ReactNode}>){
    return(
        <main className="font-roboto">
            <Navbar />
            {children}
        </main>
    )   
    
}