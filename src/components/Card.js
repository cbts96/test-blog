import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ arrCard }) => {
  const history = useHistory();
  const { id, title, content, image, created_at, updated_at, comments_count } =
    arrCard;
  return (
    <div>
      <ul className="list-unstyled">
        <li
          className="media"
          style={{ maxWidth: "654px", flexDirection: "column" }}
        >
          <img
            onClick={() => {
              history.push(`/detail/${id}`);
            }}
            src={image.url}
            style={{ maxWidth: "430px", maxHeight: "500px", cursor: "pointer" }}
            className="mr-3"
            alt="..."
          />
          <button className="btn btn-secondary btn-detail button-78" onClick={() => {
              history.push(`/detail/${id}`);
            }}>More Detail</button>
          <div className="media-body">
            <h5 className="mt-0 mb-1">{title.toUpperCase().substring(0,35)}...</h5>
            {content.substring(0,45)}...
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
