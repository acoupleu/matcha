import axios from 'axios';

export function userSignupRequest(userData) {
	return dispatch => {
		return axios.post('/api/users', userData);
	}
}

// export function getGender(gender) {
// 	return {
// 		type: "GET_GENDER",
// 		payload: gender
// 	}
// }
//
// export function getSexorient(sexorient) {
// 	return {
// 		type: "GET_SEXORIENT",
// 		payload: sexorient
// 	};
// }
//
// export function getAge(age) {
// 	return {
// 		type: "GET_AGE",
// 		payload: age
// 	};
// }
//
// export function getTown(town) {
// 	return {
// 		type: "GET_TOWN",
// 		payload: town
// 	};
// }
