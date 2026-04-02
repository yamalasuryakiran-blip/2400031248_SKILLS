
import React,{useState} from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";
import "./style.css";

function Dashboard(){

const [page,setPage]=useState("home");

return(
<div className="container">

<h1>React API Integration Dashboard</h1>

<div className="nav">

<button onClick={()=>setPage("local")}>Local Users</button>
<button onClick={()=>setPage("users")}>Users API</button>
<button onClick={()=>setPage("posts")}>Fake API Posts</button>

</div>

{page==="local" && <LocalUserList/>}
{page==="users" && <UserList/>}
{page==="posts" && <FakePostList/>}

</div>
);
}

export default Dashboard;
