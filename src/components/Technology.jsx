import { useEffect, useState } from "react"
import { getTechnologyEng, getTechnologyEngKeywords } from "../service"
import Articles from "./Articles";

const Technology = () => {

    const [technologyKeyword, setTechnologyKeyword] = useState();
    const [allArticles, setAllArticles] = useState();

    useEffect(() => {
        getTechnologyEng().then(res => {
            setAllArticles(res.data.data);
        })
    }, [])

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                getTechnologyEngKeywords(technologyKeyword).then(res => {
                    console.log(res.data.data);
                    setAllArticles(res.data.data);
                })
            }}>

                <input
                    type="text"
                    value={technologyKeyword}
                    placeholder="Search by keyword"
                    onChange={(e) => { setTechnologyKeyword(e.target.value) }}
                />
                <input type="submit" value="Search" />

            </form>
            <Articles allArticles={allArticles} />
            {console.log('učitava')}
        </>
    );
}

export default Technology;
