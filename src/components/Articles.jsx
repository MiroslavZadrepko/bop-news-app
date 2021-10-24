import Article from "./Article";

const Articles = ({allArticles}) => {

    return allArticles ?  
        <>
    
            {allArticles.map(article => <Article key={article.id} article={article}/>)}
        </>
        :
        <>
        <p className="pPosition">Loading...</p>
        </>
     
}
 
export default Articles;