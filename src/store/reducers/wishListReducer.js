const initialState = {
 showWishlist: false
};

function wishListReducer(state = initialState, {type, payload}) {
  switch (type) {
    case 'SHOW_WISHLIST':
    case 'HIDE_WISHLIST':
      return {payload};
    default:
      return state;
  }

}

export default wishListReducer;
