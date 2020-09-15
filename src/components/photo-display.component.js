import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';




export default class PhotoDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: '',
      description: '',
      username: '',
      images: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/images/')
      .then(response => {
        this.setState({ 
          images: response.data,
        
        })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }




  imageList() {
    return this.state.images.map(currentimage => {
      return (
        <Carousel.Item>
          <div className="contained">
            <img
              className="d-block w-100"
              src= {"http://localhost:5000/" + currentimage.photo}
              alt={"Post made by " + currentimage.username}
            />
          </div>
          <Carousel.Caption>
            <h2>{currentimage.description}</h2>
            <h5>Post by {currentimage.username}</h5>
          </Carousel.Caption>

        </Carousel.Item>
      )
    })
  }


   
    render () {
      return (
        <Carousel>
            {this.imageList() }
        </Carousel>

        
        
      )
    }
  }