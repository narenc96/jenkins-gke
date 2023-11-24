import { Fragment } from "react";
import "./style.scss";

const AddComment = (props:any) => {

  const {
    handlePost,
    updateFormData
  } = props;

  return <Fragment>
    <textarea 
      placeholder="This is an awesome comment box" 
      rows={40}
      name="description" 
      id="comment_text" 
      cols={40} 
      className="ui-autocomplete-input" 
      autoComplete="off" 
      aria-autocomplete="list" 
      aria-haspopup="true"
      onChange={event => updateFormData(event)}
    />
    <button className="pushable" onClick={handlePost}>
      <span className="front">
        Post
      </span>
    </button>
  </Fragment>
}

export default AddComment;