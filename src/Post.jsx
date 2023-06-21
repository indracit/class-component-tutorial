import React, { Component } from 'react';
import './App.css'

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
        this.setState({ data: data });
        })
        .catch(error => {
        console.log('Error fetching data:', error);
        });
    }

    render() {
        return (
            <div className='center' >
                {this.state.data.map((post)=>{
                    return <div className='post' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default Post;