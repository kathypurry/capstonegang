import { useContext } from "react";
import { UserContext } from "../Services/UserProvider";

// firebase firestore
// import { collection, doc, setDoc } from "firebase/firestore";
// import { db } from "../Services/firebase";

// async function readAllUsers() {
//   try {
//     const usersRef = collection(db, "users.length");
//     const singleUser = doc(db, "users")
//     // console.log(`User Reference`, usersRef);
//     // console.log(``)
//     console.log(`Single User`, singleUser)
//   } catch (err) {
//     console.error(err);
//   }
// }

// readAllUsers();

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
