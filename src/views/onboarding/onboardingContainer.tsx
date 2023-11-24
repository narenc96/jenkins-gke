import { useState } from "react";
import OnboardingView from "./onboardingView";
import { serializedData, saveData } from "../../utils/helper";
import { BASEEURL, REGISTERURL, HOMEURL, FEEDSURL } from "../constants";

export const OnboardingContainer = (props:any) => {
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

  const validatePassword = (password:string, passwordConfirm:string) => {
    return password === passwordConfirm;
  }

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch(`${BASEEURL}${REGISTERURL}`, requestOptions)
      .then(response => response.json())
      .then(res => {
       saveData("userData", serializedData(res)); 
       props.history.push(`${HOMEURL}${FEEDSURL}`);
      })
      .catch(error => {
      })
  }

  return <OnboardingView 
    handleSubmit={handleSubmit}
    updateFormData={updateFormData}
    validatePassword={validatePassword}
    formData={formData}
  />
}