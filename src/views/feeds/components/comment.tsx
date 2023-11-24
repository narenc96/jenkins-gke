import { Fragment } from "react";
import { formatDateTime } from "../../../utils/formatter";
import "./style.scss";

const Comment = (props:any) => {

  const { data } = props;

  return <Fragment>
    <div className="card">
      <div className="container">
        <small><b>{`${data.user.firstName} ${data.user.lastName}`}</b> @ {formatDateTime(data.createdAt)}</small>
        <div className="description">{data.description}</div> 
        <div className="status">
          <div className="icon">
            <span className="count">{data.likes ? data.likes : 0}</span>
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="icon">
            <span className="count">{data.dislikes ? data.dislikes : 0}</span>
            <i className="fas fa-thumbs-down"></i>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default Comment;