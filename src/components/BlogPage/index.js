import axios from 'axios';
import React from 'react';
import styled from 'styled-components';


class BlogPage extends React.Component{

    constructor(props){
        super(props)
            this.state = {
                result:[]
            }
        
    }


    componentDidMount() {

        axios
        .get('http://rohanpahwa71.pythonanywhere.com/blog/post/')
        .then(response => {
            this.setState({result:response.data})
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    createBlog = () => {
        axios.post('http://rohanpahwa71.pythonanywhere.com/blog/post/', Headers:{
            Authentication :'Token c3083619ab2be85051afde3d5486d03e356fe215'
        })
    }

    renderBlog = (item) => {
        const {location} = this.props
        const {id ,body_text , number_of_views , number_of_likes , title } = item
        return(
            <div class="card" style={{width: "30%" , display:'inline-block', margin:'10 px'}}>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{body_text}</p>
    <div style={{display:'inline-block'}}>
    <div>{number_of_likes} Likes</div>
    <div>{number_of_views} Views</div>
    {location.state.superUser && <button>Edit</button>}
    </div>
 
  </div>
</div>
        )

    }


    render(){
        console.log(this.props.location.state.superUser, "porrroososo")
        return(
            <div>
                {this.state.result.map((item) =>this.renderBlog(item))}
                <button onClick={this.createBlog}>Create Blog</button>
            </div>
        )
    }
}

export default BlogPage
