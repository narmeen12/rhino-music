import { FETCH_VIDEOS } from '../actions/index';

export default function(state = null, action) {
 console.log("VIDEOSSSEOIGANODGNDKAL action =>", action)
  switch (action.type) {
  case "FETCH_VIDEOS":
  	console.log("DAT PAYLOADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", action.payload);
    return action.payload.data
  }
  return state;
}