import React from "react";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div clssName="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1> Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h2>Plans</h2>
              <p>                   </p>
              <h4>Basic</h4>
              <h6>Rs.400 X 4 months</h6>
              <p>                   </p>

              <h4>Standard</h4>
              <h6>Rs.400 X 4 months</h6>
              <p>                  </p>
      
              <h4>Premium</h4>
              <h6>Rs.400 X 4 months</h6>
              <p>                   </p>
              
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
