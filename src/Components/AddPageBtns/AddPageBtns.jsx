import React, { Component } from 'react'

class AddPageBtn extends Component {
  
    generateBtns = () => {
        console.log(this.props)
        let _pageBtn = [];
        let _pageBtnAmount = Math.round((this.props.totalRes + 0.4) / 100);
        try {
            for (let i = 0; i < _pageBtnAmount; i++) {
                _pageBtn.push(
                    <button key={i} onClick={this.props.changePage} value={i + 1}>
                        {i + 1}
                    </button>
                );
            }
            return _pageBtn;
        } catch (error) {
            console.log(error);
            return <h1>No results...</h1>;
        }
    }
  
    render() { return this.generateBtns()}
};

export default AddPageBtn
