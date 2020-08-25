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
import { withRouter } from "react-router-dom";
import { NewArticlesComponentProps } from "../../@types/components";
import { newArticles, topArticles } from "../../data/AppData";

function NewArticles({ history }: NewArticlesComponentProps) {
  const context: any = useContext(ArticlesContext);
  useEffect(() => {
    history.listen(({ pathname }) => {
      if (pathname === "/top") {
        topArticles.current = 0;
        topArticles.end = 30;
      } else if (pathname === "/") {
        newArticles.current = 0;
        newArticles.end = 30;
      }
    });
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
      {context && context.newArticles && context.newArticles.length ? (
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

export default withRouter(NewArticles);
