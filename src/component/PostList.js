import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

// class PostList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             posts: []
//         }
//     }

//     componentDidMount() {
//         // fetch('https://jsonplaceholder.typicode.com/posts')
//         //     .then((response) => response.json())
//         //     .then((data) => {
//         //         this.setState({
//         //             posts: data
//         //         });
//         //     })
//         //     .catch((err) => {
//         //         console.log(err);
//         //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             this.setState({
    //                 posts: response.data
    //             });                
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

//     render() { 
//         return ( 
//             <div>
//                 <h2>List Of Posts</h2>
//                 <div>{this.state.posts.map(students => <div key={students.id}>{students.title}</div>) }</div>
//             </div>
//          );
//     }
// }
 
function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setPosts(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return ( 
        <div>
            <h2>List Of Posts</h2>
            <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>
        </div>
    )
}


export default PostList;