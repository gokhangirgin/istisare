function headers(){
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
}
function parseResponse(response) {
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject({status: response.status, body: json});
    }
    return {status: response.status, body: json};
  });
}

export default {
   post(url, data) {
     const body = JSON.stringify(data);
     return fetch(url, {
       method: "POST",
       headers: headers(),
       body: body
     })
     .then(parseResponse);
   }
}
