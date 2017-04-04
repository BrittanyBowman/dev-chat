const SET_POSTS = "SET_POSTS";

const initialState = {
	  loadingPosts: false
	, posts: []
};

export default function post( state = initialState, action ) {
	switch ( action.type ) {
		case SET_POSTS + "_PENDING":
			return { loadingPosts: true, posts: state.posts };
		case SET_POSTS + "_FULFILLED":
			return { loadingPosts: false, posts: action.payload };
		default: return state;
	}
}

export function setPosts( postsPromise ) {
	return { payload: postsPromise, type: SET_POSTS };
}
