/**
 * New Articles Component
 * @params props {}
 * @description New Articles Component
 * @function Function Component
 */
import React, { useEffect, useContext } from "react";
import { ArticlesContext } from "../../store/articles.context";
import Articles from "./shared/Articles";
import Preloader from "./shared/Preloader";

export default function NewArticles() {
  const context: any = useContext(ArticlesContext);
  useEffect(() => {
    context.getNewArticles && context.getNewArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onClick = () => {
    context.getNewArticles && context.getNewArticles();
  };
  return context && context.newArticles ? (
    <>
      <Articles
        articles={context && context.newArticles ? context.newArticles : []}
      />
      <span className="show-more" onClick={onClick}>
        more
      </span>
    </>
  ) : (
    <Preloader />
  );
}
