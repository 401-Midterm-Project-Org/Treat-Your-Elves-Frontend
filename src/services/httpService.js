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
    try{
      const data = await axios.get(`${APP_URL}/associations/${associationId}`);
      return data;
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

  static async getGroupMembers(groupId) {
    try{
      const groupAssociations = await axios.get(`${APP_URL}/groupmembers/${groupId}`);
      return groupAssociations;
    }catch(e){
      new Error(`couldn't get members... ${e}`);
    }
  }

  static async addMember(groupId, username) {
    try{
      const {data} = await axios.post(APP_URL + `/associations/${groupId}/${username}`);
      return data;
    }catch(e){
      new Error(`couldn't add member... ${e}`);
    }
  }

  static async removeMember(groupId, userid){
    try{
      await axios.delete(`${APP_URL}/groups/${groupId}/${userid}`);
      return 'successful delete';
    }catch(e){
      new Error(`couldn't delete member... ${e}`);
    }
  }

// create a wishlist item
  static async addWishlistItem(associationsId, itemName){
    try{
      let item = await axios.post(APP_URL + `/listItem`, {
        itemName,
        associationsId
      });
      return item;
    }catch(e){
      new Error(`couldn't add item to wishlist... ${e}`);
    }
  }

// update a wishlist item
  static async updateItem(newItem, wishlistid, associationsId){
    try{
      const data = await axios.put(`${APP_URL}/listItem/${wishlistid}`, {
        itemName: newItem,
        associationsId,
      });
      return data;
    }catch(e){
      new Error(`couldn't update group name... ${e}`);
    }
  }

// create secret santa pairing
  static async createPairs(groupid){
    try{
      await axios.post(`${APP_URL}/santa/${groupid}`);
      return 'successful pairing';
    }catch(){
      new Error(`couldn't pair santas... ${e}`);
    }
  }

}

export default HttpService;
