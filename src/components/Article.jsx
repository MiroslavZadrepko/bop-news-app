const Article = ({ article }) => {

    let date = new Date(article.published_at);
    let printDate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()+ '.';

    function decodeHTMLEntities(text) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = text;
        return textArea.value;
      }

    return (
        <>
        
            <p>TITLE: {article.title}</p>
            <p>DESCRIPTION: {decodeHTMLEntities(article.description)}</p>
            <p>AUTHOR: {article.author}</p>
            <p>PUBLISHED AT: {printDate}</p>
            <img src={article.image} alt={''} /><br />
            <a href={article.url} target="_blank">Read full article</a>
            <hr />
        </>
    );
}

export default Article;

