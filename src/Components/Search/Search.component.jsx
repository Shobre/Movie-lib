import React, { Component } from 'react'
import {Input} from '../Input/Input.component'
import {Button} from '../Button/Button.component'
import "react-dropdown/style.css";
import './Search.css'

class SearchBar extends Component {




    render(){
        console.log(this.props)
        return <div className={"SearchBar"}>
            <Input onChange={this.props.onChange} />
            <Button text="Search" onClick={this.props.onClick} />
          </div>;
    }
}

const WrappedSearch = SearchBar

export default WrappedSearch