import { useState } from "react";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";
import './components/styles/styles.css'


function App() {

  const [posts, setPost] = useState([{name: 'David Lagrange', post: 'I recently went into the woods to search for the oldest tree I could find. To my luck I found a very old hemlock around 200 - 250 years old. Let me know if you would like me to show it to you!'}, {name: 'JJ Vega', post: 'Its April Fools Day! Give this a dislike if you really like it. : )'}, {name: 'Nevin Seibel', post: "My Rubik's cube is fully charged and ready for battle. Right after I eat my meal that has appeared from the magical hand from behind my curtain."}])

  function addNewPost (post) {
    let tempPost = [...posts, post];
    setPost(tempPost)
  }

  return (
    <div className="App">
      <NavBar/>
      <CreatePost addNewPostProperty = {addNewPost}/>
      <DisplayPosts actualPosts = {posts}/>
    </div>
  );
}

export default App;
