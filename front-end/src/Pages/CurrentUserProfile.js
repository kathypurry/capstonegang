import { useContext } from "react";
import { UserContext } from "../Services/UserProvider";

const CurrentUserProfile = () => {
  const user = useContext(UserContext);
  console.log(user)

  return (
    <div>
      <p>{user?.displayName}</p>
      <p>{user?.uid}</p>
    </div>
  );
};

export default CurrentUserProfile;
