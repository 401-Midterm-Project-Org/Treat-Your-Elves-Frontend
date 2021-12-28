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

  static async createGroup(groupName, groupAdminId, token) {
    try{
      const result = await axios({
        method: 'post',
        url: `${APP_URL}/groups`,
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          groupName,
          groupAdminId,
        }
      });
      return result;
    }catch(e){
      new Error(`couldn't create group... ${e}`);
    }
  }
  
  static async deleteGroup(groupId, token) {
    try{
      await axios({
        method: 'delete',
        url: `${APP_URL}/groups/${groupId}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return 'successful delete';
    }catch(e){
      new Error(`couldn't delete group... ${e}`);
    }
  }

  static async updateGroupName(groupId, newGroupName, groupAdminId, token) {
    try{
      const result = await axios({
        method: 'put',
        url: `${APP_URL}/groups/${groupId}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          groupName: newGroupName,
          groupAdminId: groupAdminId
        }
      });
      return result;
    }catch(e){
      new Error(`couldn't update group name... ${e}`);
    }
  }

  static async getUsersGroups(associationId, token) {
    try{
      const result = await axios({
        method: 'get',
        url: `${APP_URL}/associations/${associationId}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return result;
    }catch(e){
      new Error(`couldn't get groups... ${e}`);
    }
  }

  static async getName(userid){
    try{
      const data = await axios.get(`${APP_URL}/name/${userid}`);
      return data;
    }catch(e){
      new Error(`couldn't get user's name... ${e}`);
    }
  }

  static async getGroupMembers(groupId, token) {
    try{
      const result = await axios({
        method: 'get',
        url: `${APP_URL}/groupmembers/${groupId}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return result;
    }catch(e){
      new Error(`couldn't get members... ${e}`);
    }
  }

  static async addMember(groupId, username, token) {
    try{
      const result = await axios({
        method: 'post',
        url: `${APP_URL}/associations/${groupId}/${username}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return result;
    }catch(e){
      new Error(`couldn't add member... ${e}`);
    }
  }

  static async removeMember(groupId, userid, token){
    try{
      await axios({
        method: 'delete',
        url: `${APP_URL}/groups/${groupId}/${userid}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return 'successful delete';
    }catch(e){
      new Error(`couldn't delete member... ${e}`);
    }
  }

// create a wishlist item
  static async addWishlistItem(associationsId, itemName, token){
    try{
      const result = await axios({
        method: 'post',
        url: `${APP_URL}/listItem`,
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          itemName,
          associationsId
        }
      });
      return result;
    }catch(e){
      new Error(`couldn't add item to wishlist... ${e}`);
    }
  }

// update a wishlist item
  static async updateItem(newItem, wishlistid, associationsId){
    try{
      const result = await axios({
        method: 'put',
        url: `${APP_URL}/listItem/${wishlistid}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
        data: {
          itemName: newItem,
          associationsId,
        }
      });
      return result;
    }catch(e){
      new Error(`couldn't update group name... ${e}`);
    }
  }

// create secret santa pairing
  static async createPairs(groupid){
    try{
      await axios({
        method: 'post',
        url: `${APP_URL}/santa/${groupid}`,
        headers: {
          Authorization: 'Bearer ' + token
        },
      });
      return 'successful pairing';
    }catch(e){
      new Error(`couldn't pair santas... ${e}`);
    }
  }

}

export default HttpService;
