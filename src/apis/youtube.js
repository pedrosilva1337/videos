import axios from "axios";

const KEY = "AIzaSyDAjK2TmuRBFwX1Td1SYFKdRerZB4oz7MY";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
