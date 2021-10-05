import PlayerInput from '../components/PlayerInput';
import { db }from './firebase';

const addUserStats = () => {
    db.collection('users').add({  })
};

export default db(PlayerInput);