import { useState } from "react";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import Post from "./components/Post"
import SideBar from "./components/SideBar";
import './components/styles/styles.css'


function App() {

  const [posts, setPost] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!', date: '2022-4-5'}, {name: 'JJ Vega', post: 'Its April Fools Day! Give this a dislike if you really like it. : )', date: '2022-4-1'}, {name: 'Nevin Seibel', post: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain.", date: '2022-3-20'}])

  function addNewPost (post) {
    let tempPost = [...posts, post];
    setPost(tempPost)
  }

  return (
    <div className="App flatten">
      <NavBar/>
      <div className="sidebar-and-feed">
        <div className='side-bar'>
          <h4 className='side-head'>Who's Posting?</h4>
          <SideBar actualPosts={posts} />
        </div>
        <div className='main-feed'>
          <CreatePost addNewPostProperty={addNewPost} />
          <div className='feed no-padding-w-adjusted-width'>
            <DisplayPosts actualPosts = {posts}/>
          </div>
        </div>
      </div>
      <Post/>
    </div>
  );
}
//LINE: 23 - <SideBar actualPosts={posts} />
export default App;
