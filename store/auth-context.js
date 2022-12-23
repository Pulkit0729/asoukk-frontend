import React, { useState, useEffect, useReducer} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => { },
  logout: () => { },
  name: null,
  email: null,
  updateUser: () => {},
});

const userReducer = (prevState, action) => {
  return(
    {name:action.name, email: action.email}
  )
}

export const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [user, dispatchUser] = useReducer(userReducer,{name:'', email:''});

  const logoutHandler = () =>setLogin(false);
  const loginHandler = () =>setLogin(true);
  const updateUserHandler = (user) =>dispatchUser(user);

  const contextValue = {
    isLoggedIn: login,
    name: user.name,
    email: user.email,
    login: loginHandler,
    logout: logoutHandler,
    updateUser: updateUserHandler,
  };

  useEffect(async () => {
    const res = await fetch(`http://localhost:5000/user/isAuth`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache'
      },
      credentials: 'include'
    });

    const data = await res.json();
    if (data.auth) {
      setLogin(true);
      dispatchUser({name: data.user.name, email: data.user.email});
      setLoading(false);

    } else {
      setLogin(false);
      setLoading(false);

    }
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading? props.children:null}
    </AuthContext.Provider>
  );
};

export default AuthContext;