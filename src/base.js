// Import deps for firebase
import Rebase from 're-base';
import firebase from 'firebase';

// Import 'ignored' config
import config from './config'

// Init the firebase app
const firebaseApp = firebase.initializeApp(config);

// Create the database
const base = Rebase.createClass(firebaseApp.database());

// Export
export { firebaseApp };
export default base;
