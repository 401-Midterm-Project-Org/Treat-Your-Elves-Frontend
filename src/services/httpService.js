import axios from 'axios';


const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

class HttpService {

// login
  static async login(email, firstName, lastName) {
    const obj = {
      email,
      firstName,
      lastName
    };

    const URL = `${APP_URL}/signin`;

    try {
      const {data} = await axios.post(URL, obj);
      return data;
    } catch (error) {
      console.error(error)
    }
    // return {id: 10, email: 'test@helloworld.com'};
  }

// logout
  static async logout({email}) {
    // todo: add logout mechanism with backend

    // hook into the frontend's login mechanism
    // invalidate user session on backend
  }

// delete group
  static async deleteGroup({groupId}) {
    //
  }

// create group
// Main component will have useState for user object that comes from the backend db
// --> pass in the user.userId
// groupID is returned from db on create
  static async createGroup(groupName, email) {
    const {data} = await axios.post(APP_URL + '/groups', {
      groupName: groupName,
      groupAdminId: email,
    });

    return data;
    // backend gives us a groupId
  }

// get user's groups
  static async getUsersGroups(userId) {
    const ASSOCIATIONS_URL = `${APP_URL}/associations/${userId}`;
    const {data} = await axios.get(ASSOCIATIONS_URL);
    return data;
  }

// get group members
  static async getGroupMembers(groupId) {
    // match group id on associations table

    // returns from db, associated member id's

    // todo: need to get associated members by id, add to output array, return it

    const obj = {};

    const GROUP_MEMBERS_URL = `${APP_URL}/groupmembers`;
    const USERS_URL = `${APP_URL}/${groupId}`;

    return new Promise((resolve, reject) => resolve(['member1', 'member2']));
  }

// add member to group

// remove member from group

// create a wishlist item

// update a wishlist item

// create secret santa pairing


}

export default HttpService;
