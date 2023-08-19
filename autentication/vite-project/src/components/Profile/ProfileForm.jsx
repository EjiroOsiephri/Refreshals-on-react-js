import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../Store/Auth-context";

const ProfileForm = () => {
  const ctx = useContext(AuthContext);

  const changePasswordRef = useRef();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const changedPasswordValue = changePasswordRef?.current?.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCio_cSXnszom1TvYtWOM_SvPa_VXyhjgk",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: ctx.token,
            password: changedPasswordValue,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={classes.form} onSubmit={handleChangePassword}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={changePasswordRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
