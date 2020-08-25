/**
 * Shared Article Component
 * @params props {}
 * @description Reuseable Component For Single Article
 * @function Function Component
 */
import React from "react";
import { ArticleComponentProps } from "../../../@types/components";
import voteImage from "../../../assets/images/grayarrow.gif";
import Moment from "react-moment";

export default function Article({ article, index }: ArticleComponentProps) {
  return article ? (
    <li className="article" key={index}>
      <div className="article__content">
        <div className="article__left">
          <span className="article__index">{index + 1}.</span>
          <span
            className="article__vote"
            style={{ backgroundImage: `url(${voteImage})` }}
          ></span>
        </div>
        <div className="article__info">
          <div className="article__header">
            <h3 className="article__title">{article.title}</h3>
            <span className="article__site">({article.type})</span>
          </div>
          <div className="article__footer">
            <span className="article__meta">
              {article.score} points by {article.by}{" "}
              <Moment fromNow>{article.time}</Moment>
            </span>
          </div>
        </div>
      </div>
    </li>
  ) : null;
}
