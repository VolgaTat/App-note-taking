export const fetcGetLocalStorage = (itemName) =>{
  const data = localStorage.getItem(itemName);
  if(data){
    return JSON.parse(data)
  } else {
    return [];
  }
}
export const storeInLocalStorage = (itemName, data)=>{
  localStorage.setItem(itemName, JSON.stringify(data))
}