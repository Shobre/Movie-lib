import React, { Component } from "react";
import {Results} from "../Components/ResultContainer/Results.component";
import WrappedResults from '../Components/SearchResults/SearchResults.component'
import AddPageBtn from "../Components/AddPageBtns/AddPageBtns";

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log(this.props.totalRes)
    return <div>
        <div className="pageBtnContainer">
          <AddPageBtn totalRes={this.props.totalRes} changePage={this.props.changePage}/>
          </div>
      <Results><WrappedResults movieInfo={this.props.movieInfo}/></Results>
      </div>;
  }
}

export default FirstPage;
