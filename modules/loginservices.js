class LoginService {
    login = function(email, password,logintype){
        let loggedInUser = null;
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users= usersTemp ? usersTemp: [];     
        let exists = false;   
        for(let obj of users)
        {
            if( obj.email == email  && obj.password == password && obj.logintype == logintype)
            {
                exists=true;
                loggedInUser = obj;
                localStorage.setItem("LOGGED_IN_USER",JSON.stringify(obj));
                break;
            }
        }
       // return exists;
        return loggedInUser;
    }

   // https://tinyurl.com/CHIPET2020-ASSWK2-APPS1
}
