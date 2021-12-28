import axios from 'axios';


const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

class HttpService {

  static async register(username, name, password) {
    const obj = {
      username,
      name,
      password
    };

    try {
      const {data} = await axios.post(`${APP_URL}/signup`, obj);
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async login(username, password) {
    try {
      return await axios({
        method: 'post',
        url: `${APP_URL}/signin`,
        auth: {
          username,
          password
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  static async logout({email}) {
    // todo: add logout mechanism with backend
    // hook into the frontend's login mechanism
    // invalidate user session on backend
  }

  static async createGroup(groupName, groupAdminId) {
    try{
      const {data} = await axios.post(APP_URL + '/groups', {
        groupName,
        groupAdminId,
      });
      return data;
    }catch(e){
      new Error(`couldn't create group... ${e}`);
    }
  }
  // ^^^ returns an object with 2 things:
  // {
  //   group: {id: 1, groupName: 'test', groupAdminId: 1 }
  //   groupAssociation: {id: 1, groupId: group.id, userId: group.groupAdminId}
  // }
  
  static async deleteGroup(groupId) {
    try{
      await axios.delete(`${APP_URL}/groups/${groupId}`);
      return 'successful delete';
    }catch(e){
      new Error(`couldn't delete group... ${e}`);
    }
  }

  static async updateGroupName(groupId, newGroupName, groupAdminId) {
    try{
      const data = await axios.put(`${APP_URL}/groups/${groupId}`, {
        groupName: newGroupName,
        groupAdminId: groupAdminId
      });
      return data;
    }catch(e){
      new Error(`couldn't update group name... ${e}`);
    }
  }

  static async getUsersGroups(associationId) {
    const {data} = await axios.get(`${APP_URL}/associations/${associationId}`);
    return data;
  }

// get group members
  static async getGroupMembers(groupId) {
    // get all group assocations
    // returs array with group members objects that looks like this
    // {
    //   id:
    //   groupId:
    //   userId:
    //   role:
    // }
    // map over assocation objects and return a new array with the user object and the association id

    const groupAssociations = await axios.get(`${APP_URL}/groupmembers/${groupId}`);
    const users = groupAssociations.map(association => {
      const userobj = await axios.get()
    })



    const USERS_URL = `${APP_URL}/${groupId}`;

    return new Promise((resolve, reject) => resolve(['member1', 'member2']));
  }

// add member to group
  static async addMember(email, groupId) {
    const {data} = await axios.post(APP_URL + `/associations/${groupId}/${email}`);
    return data;
  }

// remove member from group

// create a wishlist item

// update a wishlist item

// create secret santa pairing


}

export default HttpService;
