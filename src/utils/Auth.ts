export function headers(token:string){
  return {headers: {
    Authorization: "Bearer " + token
  }}
}