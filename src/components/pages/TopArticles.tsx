/**
 * Top Articles Component
 * @params props {}
 * @description Top Articles Component
 * @function Function Component
 */
import React, { useEffect, useContext } from "react";
import Articles from "./shared/Articles";
import { ArticlesContext } from "../../store/articles.context";
import Preloader from "./shared/Preloader";

export default function TopArticles() {
  const context: any = useContext(ArticlesContext);
  useEffect(() => {
    context.getTopArticles && context.getTopArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onClick = () => {
    context.getTopArticles && context.getTopArticles();
  };
  return context && context.topArticles ? (
    <>
      <Articles
        articles={context && context.topArticles ? context.topArticles : []}
      />
      <span className="show-more" onClick={onClick}>
        more
      </span>
    </>
  ) : (
    <Preloader />
  );
}
