import React from "react";
import "./CardDetail.css";
import Img from "../assets/error-pages.gif";
import moment from "moment";
import { Button } from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useHistory,useParams} from "react-router-dom"
const CardDetail = ({ detail }) => {
  const { id, title, content, image, created_at, updated_at, comments_count } =
    detail.card;
  const history=useHistory();
  
  
  return (
    <>
      <section className="section-header">
        <div className="header-hero">
          <div className="hero-overlay"></div>
          <img className="img" src={image && image.url} />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">{title && title.toUpperCase()}</h1>
          <div className="group">
            {comments_count} comment/Total Comment Count.
          </div>
        </div>
      </section>
      <div className="body-detail">
        {/* <div>
          
          <Button onClick={()=>history.push(`/edit/${id}`)}>
            EDIT YOUR POST
            <EditOutlined />

          </Button>
        </div> */}
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div className="description">
                    <div className="mb-5">
                      <i
                        style={{ color: "#7dd56f" }}
                        class="far fa-calendar mr-3"
                      ></i>

                      <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                        Created:
                      </span>
                      <span>
                        {moment(created_at && created_at).format("DD/MM/YYYY")}.
                      </span>
                    </div>
                    <div className="mb-5">
                      <i
                        style={{ color: "#7dd56f" }}
                        class="fas fa-user-edit mr-1"
                      ></i>

                      <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                        Updated:
                      </span>
                      <span>
                        {moment(updated_at && updated_at).format("DD/MM/YYYY")}.
                      </span>
                    </div>
                    <div className="mb-5">
                      <i
                        style={{ color: "#7dd56f" }}
                        class="far fa-id-badge mr-3"
                      ></i>

                      <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                        ID Number:
                      </span>
                      <span>{id}.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm"></div>
                <div class="col-sm">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
{
  /* <span>{moment(created_at && created_at).format("DD.MM.YYYY")}</span> */
}
