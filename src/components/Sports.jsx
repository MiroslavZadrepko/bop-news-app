import { useEffect, useState } from "react"
import { getSportEng, getSportEngKeywords } from "../service";
import Articles from "./Articles";

const Sports = () => {

    const [sportsKeyword, setSportsKeyword] = useState();
    const [allArticles, setAllArticles] = useState();

    useEffect(() => {
        getSportEng().then(res => {
            setAllArticles(res.data.data);
        })
    }, [])

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                getSportEngKeywords(sportsKeyword).then(res => {
                    console.log(res.data.data);
                    setAllArticles(res.data.data);
                })
            }}>

                <input
                    type="text"
                    value={sportsKeyword}
                    placeholder="Search by keyword"
                    onChange={(e) => { setSportsKeyword(e.target.value) }}
                />
                <input type="submit" value="Search" />

            </form>
            <Articles allArticles={allArticles} />

        </>
    );
}

export default Sports;