import { useState, useEffect, useCallback } from "react";
import FeedsView from "./feedsView";
import { retrieveData } from "../../utils/helper";
import { BASEEURL, COMMENTURL } from "../constants";

export const FeedsContainer = () => {
  
  const [formData, setFormData] = useState({});
  const [comments, setComments] = useState([]);

  const userData = retrieveData("userData");

  const updateFormData = (event:any) => {
    
    const type = event.target.name;
    const value = event.target.value;

    setFormData(prevFormData => {
      return { 
        ...prevFormData, 
        [type]: value 
      }
    })
  }

  const handlePost = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `${userData.tokenType} ${userData.token}` },
      body: JSON.stringify(formData)
    }
    fetch(`${BASEEURL}${COMMENTURL}`, requestOptions)
      .then(response => response.json())
      .then(res => {
        handleGetComments();
      })
      .catch(error => {
      })
  }

  const handleGetComments = useCallback(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", "Authorization": `${userData.tokenType} ${userData.token}` },
    }
    fetch(`${BASEEURL}${COMMENTURL}`, requestOptions)
      .then(response => response.json())
      .then(res => {
        setComments(res.data)
      })
      .catch(error => {
      })
  }, [userData.token, userData.tokenType]);

  useEffect(() => {
    handleGetComments()
  }, [handleGetComments]);


  return <FeedsView 
    comments={comments}
    handlePost={handlePost}
    updateFormData={updateFormData}
  />
}