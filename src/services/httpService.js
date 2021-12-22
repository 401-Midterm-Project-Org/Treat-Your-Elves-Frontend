import axios from 'axios';

const APP_URL = process.env.REACT_APP_URL || 'http://localhost:3001';

class HttpService {
    
// login
    static login({email, firstName, lastName}) {
        // send post to backend
        axios.post(APP_URL + '/signin', {
            email,
            firstName,
            lastName
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        // todo: backend
        //  - Check user exists
        //  - if not exists, add user details to db, get token, then that's the user
        //  - if exists, get token, that's the user
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
    static createGroup({groupName}) {
        let groupId = -1;

        // make the group on backend
        // backend gives us a groupId

        return groupId;
    }

// get user's groups
    
// get group members

// add member to group

// remove member from group

// create a wishlist item

// update a wishlist item

// create secret santa pairing


}

module.exports = HttpService;