import React, { Component } from 'react'




export const SearchWrapper = (WrappedComponent) => {
    class Hoc extends Component {
        constructor(props){
            super(props)
            this.state = {
            }
        }


        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
    return Hoc
}