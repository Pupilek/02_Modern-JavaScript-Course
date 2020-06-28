import{styleBody, addTitle, contact} from './dom';
import test, {getPremUsers} from './data' //name for default import can be whatever you want 
console.log('index file');

styleBody();
addTitle('Hello world from the DOM file');
console.log(contact);
console.log(test);
const premUsers = getPremUsers(test);
console.log(premUsers);
console.log(contact);
console.log("test2");
console.log("test23");