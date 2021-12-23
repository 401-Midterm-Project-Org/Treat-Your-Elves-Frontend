import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

class HttpService {
    
// login
    static login(email, firstName, lastName) {
        const obj = {
            email,
            firstName,
            lastName
        };

        const URL = `${APP_URL}/signin`;
        // console.log(URL);

        let response;

        /*
        axios.post(URL, obj)
            .then(function (r) {
                // console.log('IN SERVICE CLASS');
                // console.log(response.status);
                // console.log(response.data);
                response = r;
            })
            .catch(function (error) {
                console.log('---ERROR---' + error);
            });
        console.log('response --->', response.data)
        return response.data;
        */

        return {id: 10, email: 'test@helloworld.com'};
    }

// logout
    static logout({email}) {
        // todo: add logout mechanism with backend

        // hook into the frontend's login mechanism
        // invalidate user session on backend
    }

// delete group
    static deleteGroup({groupId}) {
        //
    }

// create group
// Main component will have useState for user object that comes from the backend db
// --> pass in the user.userId
// groupID is returned from db on create
    static createGroup(groupName, groupAdminId) {
        const response = axios.post(APP_URL + '/groups', {
            groupName,
            groupAdminId
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .data;

        // make the group on backend
        // backend gives us a groupId
        return response.groupID;
    }

// get user's groups
    static getUsersGroups(userId) {

        const ASSOCIATIONS_URL = `${APP_URL}/associations/${userId}`; // all of the user's associations
        /*
        const userAssociations = axios.get(ASSOCIATIONS_URL)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .data; // data is --> userId, groupId, role
        */

        // const URL = APP_URL + '/groups';

        // const response = axios.get(URL, obj)
        // .then(function (response) {
        //     console.log('should be after api call');
        //     console.log(response.data);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        // return response.data;
        return [1234, 56];
    }

// get group members
    static getGroupMembers(groupId) {
        // match group id on associations table

        // returns from db, associated member id's

        // todo: need to get associated members by id, add to output array, return it

        const obj = {
        };

        const GROUP_MEMBERS_URL = `${APP_URL}/groupmembers`;
        const USERS_URL = `${APP_URL}/${groupId}`;

        /*
        const response = axios.post(URL, obj)
        .then(function (response) {
            console.log('should be after api call');
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        return response.data;
        */
        return ['member1', 'member2'];
    }

// add member to group

// remove member from group

// create a wishlist item

// update a wishlist item

// create secret santa pairing


}

export default HttpService;