import React from "react";
import "./App.css";


class GetPokemonInfo extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.name = props.name;
        this.state = { data: {}, status: false, comment: '', all_comments: [] };
        this.className = "elem-info";
    }

     async componentDidMount() {	
      let response = await fetch(this.url);

      if (response.ok) {
        let jsn = await response.json();
        let data = {name: this.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience}
        this.setState({ data: data, status: true });
      } 
    } 

    async componentDidUpdate(prevProps, prevState, prevContext) {
      if(prevProps.name!== this.props.name) {
       
        let response = await fetch(this.props.url);
  
        if (response.ok) {
          let jsn = await response.json();
          let data = {name: jsn.name, weight: jsn.weight, height: jsn.height, base_experience: jsn.base_experience}
          this.setState({ data: data });
        } 

      }
      this.seeComment();
      
    }


   oldpostComment() {
      fetch('/add_comment' , {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state.comment)
      })  
    }

    async postComment() {
      const rawResponse = await fetch('/add_comment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment: this.state.comment})
      });
      const content = await rawResponse.json();

      alert(content);
    }

    seeComment() {
      fetch('http://localhost:3001/see_comment')
      .then(res => res.json())
      .then(all_comments => this.setState({ all_comments }));
    }


    setComment = (event) => {
      this.setState({comment: event.target.value});
    }


    render() {
      if (this.state.status) {
        return (
          <div className={this.className}>
            <p>Name: {this.state.data.name}</p>
            <p>Weight: {this.state.data.weight}</p>
            <p>Height: {this.state.data.height}</p>
            <p>BE: {this.state.data.base_experience}</p>
            <p>
            {/* <form action="/add_comment" method="post">
              New comment:
              <input type="text" name="comment"/>
              <input type="submit" value="Add"/>
            </form>  */}
            <form onSubmit={this.postComment}>
              New comment:
              <input type="text" onChange={this.setComment} />
              <input type="submit" />
            </form> 
            </p>
            <p>
            {this.state.all_comments.map(a_c =>
              <div>{a_c.comment}</div>
            )}
            </p>
          </div>
        );
      } else {
        return (
          <div className={this.className}>
            <p>Please Wait</p>
          </div>
        )
      }
    }
    

  
}

export default GetPokemonInfo;
