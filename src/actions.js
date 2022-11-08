import axios from "axios";
import * as actions from "./actionType";

export const fetchData = () => {
	return (dispatch) => {
		const options = {
			method: "GET",
			url: "https://league-of-legends-esports.p.rapidapi.com/teams",
			headers: {
				"X-RapidAPI-Key": "15a409a91dmsh4a1d0a1d7670013p1795bcjsn7f5de924d1f7",
				"X-RapidAPI-Host": "league-of-legends-esports.p.rapidapi.com",
			},
		};
    // let url = 'https://jsonplaceholder.typicode.com/posts/';

		const response = axios
			.request(options)
			.then((res) => {
				console.log(JSON.parse(res.data));
				dispatch(
					((data) => {
						return {
							type: actions.FETCH_POSTS,
							payload: res.data,
						};
					})(res.data)
				);
			})
			.catch((err) => {
				console.error(err);
			});
	};
};

// const options = {
//   method: 'GET',
//   url: 'https://league-of-legends-esports.p.rapidapi.com/statics',
//   params: {period: '<REQUIRED>'},
//   headers: {
//     'X-RapidAPI-Key': '15a409a91dmsh4a1d0a1d7670013p1795bcjsn7f5de924d1f7',
//     'X-RapidAPI-Host': 'league-of-legends-esports.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
