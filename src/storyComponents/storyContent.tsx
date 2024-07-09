import { getStory } from '../Services/hnStroryApi';
import { useState,useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../components/ui/hover-card"
import { Button } from '../components/ui/button';
import { mapTime } from '../mapper/maptime';
type storyProps={
    key: string,
    storyId: string
}
interface storyInterface{
    id:string,
    by:string,
    kids:string[],
    score:string,
    url:string,
    time:string,
    title:string,
}

export const Story:React.FC<storyProps>=({key,storyId})=>{
    const [time,setTime]=useState<number>(1);
    const[story,setStory]=useState<storyInterface>({
        id:'1',
        by:"default",
        kids:["sdsd"],
        score:"0",
        url:"sds",
        time:"sdsdsds",
        title:"Sdsds"
    })
    useEffect(()=>{
        getStory(storyId).then(data=>{console.log(data)
            const timeStamp:number=+data.time
            setTime(timeStamp)
            data&&data.url&&setStory(data)})
    },[])
    const onCLickCallback=()=>{
        window.location.href=story.url
    }
    const onClickCallbackButton=()=>{
        window.location.href="/comments/"+story.id
    }
    return(
        <div>
        <Card className='mt-2 ml-20 mr-20 mb-7 bg-slate-600'>
        <CardHeader >
            <CardTitle>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button variant="link" onClick={onCLickCallback} className='font-bold text-2xl'>{story.title}</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='font-light'>
                        {story.title}
                    </HoverCardContent>
                </HoverCard>
            </CardTitle>
        </CardHeader>
        <CardFooter>
            <p className="text-sm font-medium leading-none mr-2 ml-4">By : </p>
            <p className="text-sm text-muted-foreground mr-4">{story.by}</p>
            <p className="text-sm font-medium leading-none mr-2">Time: </p>
            <p className="text-sm text-muted-foreground">{mapTime(time)}</p>
            <Button variant="link" className='font-bold' onClick={onClickCallbackButton}>Comments :</Button>
            <p className="text-sm text-muted-foreground mr-4">{story.kids&&story.kids.length||0}</p>
            <p className="text-sm font-medium leading-none mr-2">Score: </p>
            <p className="text-sm text-muted-foreground">{story.score}</p>            
        </CardFooter>
        </Card>
        </div>
    )
}