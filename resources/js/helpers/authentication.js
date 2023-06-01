const application = window['application'] instanceof Object ? window['application'] : {};
const auth_user = application['loggedin_user'] ? JSON.parse(application['loggedin_user']) : {};


export function isLoggedIn(){
   let isAdmin = application['is_authenticated'];
   isAdmin = !isNaN(isAdmin) ? Number(isAdmin) : 0;
   return Boolean(isAdmin);
}

export function user(prop = ''){
    return prop ? auth_user[prop] : auth_user;
}
