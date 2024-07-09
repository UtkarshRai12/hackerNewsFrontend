import { StoryHeader } from "../storyComponents/storyHeader";
import { getNewStoryIds } from "../Services/hnStroryApi";
import { useState,useEffect } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Story } from "../storyComponents/storyContent";
import { getJobStoryIds } from "../Services/hnStroryApi";
import { Badge } from "../components/ui/badge";
import { getBestStoryIds } from "../Services/hnStroryApi";
export const BestStoriesContainer:React.FC=()=>{
    const [storyIds, setStoryIds] = useState<string[]>([]);
    const {count}= useInfiniteScroll();
    useEffect(()=>{
        getBestStoryIds().then(data=>setStoryIds((data)))
    },[]);
    return(
        <div>
        <Badge className="flex justify-between items-center text-white-700" variant="secondary">
            <p className="text-2xl text-center py-10">Best Post</p>
        </Badge>            
           {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
        </div>

    )
}