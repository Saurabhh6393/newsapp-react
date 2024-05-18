import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date  } = props;
    return (
      <div>
        <div className="card mx-auto p-2" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              
            </h5>
            <p className="card-text">{description}...</p>
            <p classname="card-text">
              <small classname="text-body-secondary">
                {" "}
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <Link
              className="btn btn-sm btn-primary"
              target="_blank"
              to={newsUrl}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
