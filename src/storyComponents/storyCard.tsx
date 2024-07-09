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
type Story= {
    id: number,
    by: string
    title: string
    kids: number[],
    time: number,
    score: number,
    url: string
}
type storyProps={
    storyContent:Story
}
interface storyInterface{
    id: number,
    by: string
    title: string
    kids: number[],
    time: number,
    score: number,
    url: string
}

export const StoryCard:React.FC<storyProps>=({storyContent})=>{
    console.log("sdsdsdsd")
    console.log(storyContent)
    const story=storyContent
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
            <p className="text-sm text-muted-foreground">{mapTime(story.time)}</p>
            <Button variant="link" className='font-bold' onClick={onClickCallbackButton}>Comments :</Button>
            <p className="text-sm text-muted-foreground mr-4">{story.kids&&story.kids.length||0}</p>
            <p className="text-sm font-medium leading-none mr-2">Score: </p>
            <p className="text-sm text-muted-foreground">{story.score}</p>            
        </CardFooter>
        </Card>
        </div>
    )
}