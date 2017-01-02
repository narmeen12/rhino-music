import axios from 'axios';
import { FETCH_VIDEOS } from '../constants/ActionTypes';

export function fetchVideos(term) {
	let videos = axios.post('/api/videos', {body: term});
	// .then((data)=> {console.log("RETURNED", data)});
	return {
		type: "FETCH_VIDEOS",
		payload: videos
	};
}