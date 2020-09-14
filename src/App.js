import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./component/NewsCard/NewsCard";
import Header from "./component/Header/Header";
import useStyles from './styles'
const alanKey =
  "d1cc0a2b82c4b111b69e73abb30a820a2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle]=useState(-1)


    useEffect(() => {
        alanBtn({
        key: alanKey,
        onCommand: ({ command, articles }) => {
            if (command === "newHeadlines") {
            setNewsArticles(articles);
            setActiveArticle(-1)
            // console.log(articles)
            }
            if (command === "highlight") {
              setActiveArticle(prevActive => prevActive +1)
            }
        },
        });
  }, []);
  
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logoContainer}>
          <img  src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo}  alt='ALan Logo' />
      </div>
      <Header />
        <NewsCard activeArticle={activeArticle} newsArticles={newsArticles}/>
    </div>
  );
};
export default App;
