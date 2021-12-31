import {Types} from '../actions/wishLists';


const initialState = {
  wishlists: [{
    username: 'tim',
    itemName: 'tv',
    // isSelected: true,
  }, {
    username: 'tim',
    itemName: 'baseball',
  }, {
    username: 'rudolph',
    itemName: 'blue nose',
  }, {
    username: 'steven',
    itemName: 'fireplace',
  }, {
    username: 'steven',
    itemName: 'marshmallows',
  }, {
    username: 'steven',
    itemName: 'travel van',
  },],
};

function wishListReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case Types.WISHLIST_DELETED:
      return {
        ...state,
        wishlists: state.wishlists.filter(l => {
          return l.itemName !== payload.itemName /*&& l.username !== payload.username*/;
        }),
      };
    case Types.WISHLIST_CLICKED:
      return {
        ...state,
        wishlists: [
          ...state.wishlists.map(l => {
            if (l.username === payload.username) {
              return {...l, isSelected: true};
            }
            return {...l, isSelected: false};
          }),
        ],
      };
    default:
      return state;
  }
}

export default wishListReducer;
