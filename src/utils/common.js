

export const AUTH_TOKEN = 'Authorization';

export const request = (url, options) => {
  if (options.headers) {
    Object.assign(options.headers, { Accept: 'application/json' });
    if (!options.headers[AUTH_TOKEN]) {
      options.headers[AUTH_TOKEN] = `Bearer ${localStorage.getItem(
        AUTH_TOKEN,
      )}`;
    }
  }
  return fetch(url, {
    ...options,
    mode: 'cors',
  })
    .then(response => response.json() || response)
    .then(json => json)
    .catch(err => ({ err }));
};

export const getResponseFromApiResponse = data => {
  const { response, statusCode } = data;
  if (!response) return null;
  if (statusCode === 200 || statusCode === 201) {
    return response;
  }
  if (
    statusCode === 401 ||
    statusCode === 404 ||
    statusCode === 422 ||
    statusCode === 429
  ) {
    return response.errors ? response.errors : response;
  } else if (statusCode === 500 || statusCode === 502) {
    return response || 'Server Error';
  } else {
    return response;
  }
};

/**
 * Find exact error message in api's
 */
 export const getErrorMessage = (response) =>{
    if(!response) return null;
    const message= Object.values(response.contact || response)
    if(typeof(message && message[0])==='object'){
      if(message[0].length > 1){
        return message[0][0]
      }else{
        const newMessage =  Object.values(message[0]);
        return newMessage[0]
      }
    }
    if(typeof(message && message[0]) === 'string'){
      return message[0];
    }
  }
 
  
export const AuthHelpers = {
  isAuthenticated: () => !!localStorage.getItem(AUTH_TOKEN),
  login: () => {
    // Add api for login
  },
  signup: () => {
    // addd api for signup
  },
  logout: (type) => {
    if(AuthHelpers.isAuthenticated()) {
      console.log(AuthHelpers.isAuthenticated())
      if(!type) {
        //  window.location.href = getAuthRoute();
      } else {
        // redirectToUrl(getAuthRoute());
      }
      localStorage.removeItem(AUTH_TOKEN);
      localStorage.clear();
    }
  },
  saveTokenToLocalStorage: (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  },
  removeTokenFromLocalStorage: () => {
    localStorage.removeItem(AUTH_TOKEN);
  }
};