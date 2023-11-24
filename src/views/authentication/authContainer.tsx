import { useState } from "react";
import AuthView from "./authView";
import { serializedData, saveData } from "../../utils/helper";
import { BASEEURL, LOGINURL, HOMEURL, FEEDSURL } from "../constants";

export const AuthContainer = (props:any) => {

  const [formData, setFormData] = useState({});

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

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch(`${BASEEURL}${LOGINURL}`, requestOptions)
      .then(response => response.json())
      .then(res => {
       saveData("userData", serializedData(res)); 
       props.history.push(`${HOMEURL}${FEEDSURL}`);
      })
      .catch(error => {
      })
  }

  return <AuthView 
    handleSubmit={handleSubmit}
    updateFormData={updateFormData}
  />
}