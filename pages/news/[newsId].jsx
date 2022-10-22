// our-domain.com/news/something-important
import React from "react";
/* Methode de next pour récupérer le parametre */
import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter();
    /* Je récupère la valeur passé en paramètre */
    const newsId = router.query.newsId;
    return(
        <>
        <h1>The details pages</h1>
        <code>{newsId}</code>
        </>
    )
}

export default DetailPage;