import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoryHeader } from './storyComponents/storyHeader';
import { NewStoriesContainer } from './Container/newStoriesContainer';
import { TopStoriesContainer } from './Container/topStroiesContainer';
import { JobStoriesContainer } from './Container/jobStoriesContainer';
import { ShowStoriesContainer } from './Container/showStoriesContainer';
import { BestStoriesContainer } from './Container/bestStoriesContainer';
import { ThemeProvider } from "./components/ThemeProvider"
 
function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StoryHeader />
    <Routes >
      <Route path="/" element={ <NewStoriesContainer /> } />
      <Route path="/top" element={ <TopStoriesContainer /> } />
      <Route path="/job" element={ <JobStoriesContainer /> } />
      <Route path="/show" element={ <ShowStoriesContainer /> } />
      <Route path="/best" element={ <BestStoriesContainer /> } />
      {/* <Route path="/team" element={ <Team /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/contact" element={ <Contact /> } /> */}
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
