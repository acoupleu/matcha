export default function signupReducer(state = {
	username: "",
	email: "",
	password: "",
	passwordConfirm: "",
	gender: "homme",
	sexualOrientation: "homme",
	age: "",
	town: "",
	firstSub: 0
}, action) {
	switch (action.type) {
		case 'GET_GENDER':
			state = {
				...state,
				gender: action.payload
			};
			console.log("gender changed");
			break;
		case 'GET_SEXORIENT':
			state = {
				...state,
				sexualOrientation: action.payload
			};
			console.log("sexori changed");
			break;
		case 'GET_AGE':
			state = {
				...state,
				age: action.payload
			};
			console.log("age changed");
			break;
		case 'GET_TOWN':
			state = {
				...state,
				town: action.payload
			};
			console.log("town changed");
			break;
	}
	return state;
}
