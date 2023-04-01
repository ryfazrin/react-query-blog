import React from "react";
import { useState } from 'react'
// import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Posts from './components/Posts';
import Post from "./components/Post";

const queryClient = new QueryClient();

function App() {
  const [postId, setPostId] = React.useState(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
        <ReactQueryDevtools initialIsOpen />
      </div>
    </QueryClientProvider>
  )
}

export default App
