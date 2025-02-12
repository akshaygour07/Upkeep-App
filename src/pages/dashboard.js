// import React, {useState} from 'react'
// import Header from "../components/Header";
// import Note from "../components/Note";
// import CreateArea from "../components/CreateArea";
// import { Sidebar } from '../components/Sidebar';
// import {Box} from "@mui/material"

// function Dashboard(){
//     const [items, setItems] = useState([]);
//     const [collapsed, setCollapsed] = useState(false); 
   
//     const addItem = (noteText) => {
//         setItems((prevItem) => {
//         return [...prevItem, noteText];
//         });
//     }

//     const deleteItem = (id) => {
//         setItems((prevItem) => {
//         return items.filter((item, index) => {
//             return index !== id;
//         });
//         });
//     }

//     const handleCollapse = () => {
//         setCollapsed((prev) => !prev);
//       };

//   return (
//     <>
//         <Header handleCollapse={handleCollapse} />
//         <main>
//             <Sidebar collapsed={collapsed} handleCollapse={handleCollapse}/>
//             <Box sx={{display:'flex',flexDirection:'column', width:'100vw'}}>
//                 <CreateArea onAdd={addItem} />
//                 {items.map((noteItem, index) => (
//                     <Note
//                     key={index}
//                     id={index}
//                     title={noteItem.title}
//                     content={noteItem.content}
//                     onDelete={deleteItem}
//                     />
//                 ))}
//             </Box>
//         </main>
//     </>
//   )
// }

// export default Dashboard;