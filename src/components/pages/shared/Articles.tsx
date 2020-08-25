/**
 * Shared Articles Component
 * @params props {}
 * @description Reuseable Component For listing new and top articles
 * @function Function Component
 */
import React from "react";
import { ArticlesComponentProps } from "../../../@types/components";
import Article from "./Article";

export default function Articles({ articles }: ArticlesComponentProps) {
  return (
    <>
      {articles && articles.length ? (
        <ul className="articles__list">
          {articles.map((article, index) => (
            <Article index={index} key={index} article={article} />
          ))}
        </ul>
      ) : null}
    </>
  );
}
