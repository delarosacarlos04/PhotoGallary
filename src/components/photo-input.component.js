import React, { Component } from 'react';
 import axios from 'axios';

export default class InputPhoto extends Component {

  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      photo: '',
      description: '',
      username: '',
      imagePhoto: ''
    }
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  fileSelectedHandler = event => {
    this.setState({
      imagePhoto: event.target.files[0]
    })
  }

  fileUploadHangler = () => {
    let reader = new FileReader();
    reader.readAsDataURL(this.state.selectedFile);

    console.log("img data", this.state.selectedFile)

  }


  onSubmit(e) {
    e.preventDefault();

    const image = {
      photo: 'hey' ,
      description: this.state.description,
      username: this.state.username,
      imagePhoto: this.state.imagePhoto

    }

    console.log(this.state.imagePhoto)
    console.log(image)

    let fromdata = new FormData()
    fromdata.append('imagePhoto',  this.state.imagePhoto)

    fromdata.append('photo',  'hellos')
    fromdata.append('description',  this.state.description)
    fromdata.append('username',  this.state.username)




    axios.post('http://localhost:5000/images/add', fromdata)
      .then(res => console.log(res.data));

    this.setState({
      photo: '',
      description: '',
      username: '',
      imagePhoto: ''
    })
  }

  render() {
    return (
      <div className="App" >
          <input type="file" name="file" onChange={this.fileSelectedHandler}/>
          <form onSubmit= {this.onSubmit}>
            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
              <label>Username: </label>
              <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
            </div>

          <div className="form-group">
            <input type="submit" value="Upload Image" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}