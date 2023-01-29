import {React, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./Card";
import axios from "axios";








function Grid() {
  
  const [data, setData] = useState();

  useEffect(() => {
getData();
},[]);


async function getData() {
  let tasks = await axios.get("http://localhost:5000/getTasks");
  setData(tasks);
}

let grid_items;

try {
grid_items = data.map(task => { return <Card status = "new" tech = {[task.data]} representative = {task.representative} company = {task.company} title = {task.title} description = {task.description} />})
}
catch {

}


  
    return(<div className = "ml-5 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">


  {grid_items}
      <Card status="new" tech = {["HTML", "CSS", "JS"]} representative = "James Shultz" company = "Best Buy" title ="Fix our backend" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <Card status="new" tech = {["HTML", "CSS", "JS"]} representative = "hi" company = "Best Buy" title ="New Title" description = "description" />
    </div>)
}

//flex flex-wrap ml-3 basis-1/4
// ml-5 mt-10 grid sm: grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4



export default Grid;