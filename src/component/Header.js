import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        navigate("/browser");
        // ...
      } else {
        // User is signed out
        dispatch(
          removeUser()
        );
        navigate("/");
      }
    });
    return () => unsubscribe();
  }
    , [])
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={Logo}
        alt="logo"
      />
      {user && <div className="flex p-2">
        <img className="w-12 h-12 " alt="usericon" src={user?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
      }
    </div>
  );
};

export default Header;
