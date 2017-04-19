import post, { createPost, setPosts } from "../post";

test( "createPost returns an object with a type of CREATE_POST and a payload of the passed in argument", () => {
	expect( createPost( 1 ) ).toEqual( { payload: 1, type: "CREATE_POST" } );
} );

test( "setPosts returns an object with a type of SET_POSTS and a payload of the passed in argument", () => {
	expect( setPosts( 1 ) ).toEqual( { payload: 1, type: "SET_POSTS" } );
} );

test( "the reducer handles a CREATE_POST_PENDING action", () => {
	expect( post( undefined, { type: "CREATE_POST_PENDING" } ) ).toEqual( {
		creatingPost: true
		, errorCreatingPost: false
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	} );

	expect( post( {
		creatingPost: false
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	}, { type: "CREATE_POST_PENDING" } ) ).toEqual( {
		creatingPost: true
		, errorCreatingPost: false
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	} );
} );

test( "the reducer does not mutate state on CREATE_POST_PENDING actions", () => {
	const state = {
		creatingPost: false
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	};

	post( state, { type: "CREATE_POST_PENDING" } );

	expect( state ).toEqual( {
		creatingPost: false
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	} );
} );

test( "the reducer handles CREATE_POST_FULFILLED actions", () => {
	expect( post( undefined, { payload: { content: "Foo", author: "Bar" }, type: "CREATE_POST_FULFILLED" } ) )
		.toEqual( {
			creatingPost: false
			, errorCreatingPost: false
			, errorFetchingPosts: false
			, loadingPosts: false
			, posts: [ { content: "Foo", author: "Bar" } ]
		} );
} );

test( "the reducer does not mutate state on CREATE_POST_FULFILLED actions", () => {
	const state = {
		creatingPost: true
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "Foo", content: "Bar" } ]
	};

	post( state, { payload: { content: "Foo", author: "Bar" }, type: "CREATE_POST_FULFILLED" } );

	expect( state ).toEqual( {
		  creatingPost: true
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "Foo", content: "Bar" } ]
	} );
} );

test( "the reducer handles CREATE_POST_REJECTED actions", () => {
	expect( post( undefined, { type: "CREATE_POST_REJECTED" } ) ).toEqual( {
		  creatingPost: false
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: []
	} );

	expect( post( {
		  creatingPost: true
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "foo", content: "Bar" } ]
	}, { type: "CREATE_POST_REJECTED" } ) ).toEqual( {
		  creatingPost: false
		, errorCreatingPost: true
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "foo", content: "Bar" } ]
	} );
} );

test( "the reducer does not mutate state on CREATE_POST_REJECTED actions", () => {
	const state = {
		  creatingPost: true
		, errorCreatingPost: false
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "foo", content: "Bar" } ]
	};

	post( state, { type: "CREATE_POST_REJECTED" } );

	expect( state ).toEqual( {
		  creatingPost: true
		, errorCreatingPost: false
		, errorFetchingPosts: false
		, loadingPosts: false
		, posts: [ { author: "foo", content: "Bar" } ]
	} )
} );
