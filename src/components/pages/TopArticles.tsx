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
import { TopArticlesComponentProps } from "../../@types/components";
import { withRouter } from "react-router-dom";

function TopArticles({ history }: TopArticlesComponentProps) {
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
      {context && context.topArticles && context.topArticles.length ? (
        <span className="show-more" onClick={onClick}>
          more
        </span>
      ) : (
        <p className="alert">There is no more data to show!!</p>
      )}
    </>
  ) : (
    <Preloader />
  );
}

export default withRouter(TopArticles);
