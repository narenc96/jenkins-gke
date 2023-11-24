import { Fragment } from "react";
import Header from "./components/header";
import AddComment from "./components/addComment";
import Comment from "./components/comment";

const FeedsView = (props:any) => {

  const { 
    comments, 
    handlePost, 
    updateFormData 
  } = props;

  return <Fragment>
    <Header />
    <AddComment 
      handlePost={handlePost}
      updateFormData={updateFormData}
    />
    {comments.map((comment:any) => {
      return <Comment key={Math.random()} data={comment}/>
    })}
  </Fragment>
}

export default FeedsView;