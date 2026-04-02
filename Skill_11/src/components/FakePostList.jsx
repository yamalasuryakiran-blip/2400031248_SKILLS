
import React,{useEffect,useState} from "react";
import axios from "axios";

function FakePostList(){

const [posts,setPosts]=useState([]);
const [filtered,setFiltered]=useState([]);
const [loading,setLoading]=useState(true);
const [userId,setUserId]=useState("all");

const fetchPosts=()=>{

setLoading(true);

axios.get("https://dummyjson.com/posts")
.then(res=>{
setPosts(res.data.posts);
setFiltered(res.data.posts);
setLoading(false);
});

};

useEffect(()=>{
fetchPosts();
},[]);

const filterPosts=(id)=>{

setUserId(id);

if(id==="all"){
setFiltered(posts);
}else{
setFiltered(posts.filter(p=>p.userId==id));
}

};

if(loading) return <p>Loading posts...</p>;

return(
<div>

<h2>Fake API Posts</h2>

<select value={userId} onChange={(e)=>filterPosts(e.target.value)}>
<option value="all">All Users</option>
<option value="1">User 1</option>
<option value="2">User 2</option>
<option value="3">User 3</option>
</select>

<button onClick={fetchPosts}>Refresh</button>

<table>
<thead>
<tr>
<th>Title</th>
<th>Body</th>
<th>UserId</th>
</tr>
</thead>

<tbody>

{filtered.map(p=>(
<tr key={p.id}>
<td>{p.title}</td>
<td>{p.body}</td>
<td>{p.userId}</td>
</tr>
))}

</tbody>

</table>

</div>
);
}

export default FakePostList;
