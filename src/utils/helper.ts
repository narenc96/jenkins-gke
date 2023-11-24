export const saveData = (type:string, data:any) => {
  localStorage.setItem(type, JSON.stringify(data));
}

export const retrieveData = (type: string) => (localStorage.getItem(type) ? JSON.parse(localStorage.getItem(type) || '') : null);

export const clearData = (type:string) => {
  localStorage.removeItem(type)
}

export const serializedData = (res: any) => {
  const resPayload = res.data.user;
  resPayload.token = res.token;
  resPayload.tokenType = res.token_type;
  
  return resPayload
}