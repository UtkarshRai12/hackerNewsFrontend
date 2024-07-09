import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`
export const showStoriesUrl = `${baseUrl}showstories.json`
export const bestStoriesUrl = `${baseUrl}beststories.json`
export const askStoriesUrl = `${baseUrl}askstories.json`
export const jobStoriesUrl = `${baseUrl}jobstories.json`
export const storyUrl = `${baseUrl}item/`;

interface getStoryProps{
    by:string,
    id:string,
    kids:string[],
    score:string,
    url:string,
    time:string,
    title:string,


}


export const getStory= async (storyId:String):Promise<getStoryProps>  => {
    const result = await axios
      .get(`${storyUrl + storyId}.json`);
      console.log("sdsdsD"+result.data)
    return result.data;
};
  
export const getTopStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(topStoriesUrl);
  
    return result.data;
};
export const getJobStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(jobStoriesUrl);
  
    return result.data;
};
export const getShowStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(showStoriesUrl);
  
    return result.data;
};
export const getBestStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(bestStoriesUrl);
  
    return result.data;
};

export const getAskStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(newStoriesUrl);
  
    return result.data;
};export const getNewStoryIds = async ():Promise<string[]> => {
    const result = await axios.get(newStoriesUrl);
    return result.data;
};