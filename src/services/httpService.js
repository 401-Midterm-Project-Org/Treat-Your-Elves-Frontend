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

        const URL = APP_URL + '/signin';
        console.log(URL);

        // send post to backend
        const response = axios.post(URL, obj)
        .then(function (response) {
            console.log('should be after api call');
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        return response.data;
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
    static async createGroup({groupName, groupAdminId}) {
        const response = await axios.post(APP_URL + '/groups', {
            groupName,
            groupAdminId
        })

        // make the group on backend
        // backend gives us a groupId
        return response.groupID;
    }

// get user's groups
    
// get group members

// add member to group

// remove member from group

// create a wishlist item

// update a wishlist item

// create secret santa pairing


}

export default HttpService;