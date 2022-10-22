//my root page '/'
import Link from "next/link";
import React from "react";

const Homepage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <ul>
                <li>
                    {/* Remplace la balise a et permet de ne pas recharger la page
                    on reste sur une single page application 
                    et on a une meilleure expérience utilisateur */}
                    <Link href='/news'>
                        All News
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Homepage;