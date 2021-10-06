import { useContext } from "react";
import { UserContext } from "../Services/UserProvider";
import styled from 'styled-components';

const SectionContainer = styled.div`
    display: flex;
`;

const ProfileContainer1 = styled.div`
    text-align: center;

    border: 1px solid var(--neonyellow);
    border-radius: 10px;
    width: 40vw;
    height: 60vh;

    img {
        float: left;
        margin-top: 2em;
        margin-left: 5em;
        border: 1px solid var(--neonyellow);
        border-radius: 50px;
    }
`;

const CurrentUserName = styled.h3`
    float: right;
    margin-top: 2.5em;
    margin-right: 4em;

`;


const ProfileContainer2 = styled.div`
    text-align: center;
    margin-left: 4em;

    border: 1px solid var(--neonyellow);
    border-radius: 10px;
    width: 40vw;
    height: 60vh;
`;

const MetaInfo = styled.div`
    margin-top: 2em;
    color: var(--white);
`;

const UserStats = styled.div`
    margin-top: 1em;
`;

const CurrentUserProfile = () => {
  const user = useContext(UserContext);
  console.log(user)
   
  return (
    <SectionContainer>
        <ProfileContainer1>
        <CurrentUserName>{user?.displayName}</CurrentUserName>
        <img src={user?.photoURL} />
        {/* <p>{user?.uid}</p> */}
        </ProfileContainer1>

        <ProfileContainer2>
            <MetaInfo>Last Login: {user?.metadata.lastSignInTime}</MetaInfo>
            <UserStats>
                <p>Fastest WPM:</p>
                <p>Average mistakes per minute:</p>
                <p>Highest Score:</p>
            </UserStats>
        </ProfileContainer2>
    </SectionContainer>
  );
};

export default CurrentUserProfile;
