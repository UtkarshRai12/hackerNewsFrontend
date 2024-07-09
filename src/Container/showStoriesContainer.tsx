import { StoryHeader } from "../storyComponents/storyHeader";
import { getNewStoryIds } from "../Services/hnStroryApi";
import { useState,useEffect } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Story } from "../storyComponents/storyContent";
import { getShowStoryIds } from "../Services/hnStroryApi";
import { Badge } from "../components/ui/badge";
export const ShowStoriesContainer:React.FC=()=>{
    const [storyIds, setStoryIds] = useState<string[]>([]);
    const {count}= useInfiniteScroll();
    useEffect(()=>{
        getShowStoryIds().then(data=>setStoryIds((data)))
    },[]);
    return(
        <div>
        <Badge className="flex justify-between items-center text-white-700" variant="secondary">
            <p className="text-2xl text-center py-10">New Shows</p>
        </Badge> 
           {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
        </div>

    )
};