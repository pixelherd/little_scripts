import React from "react";
import {Route, HashRouter} from "react-router-dom";
import "./page.scss"

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            prev: -1,
            active: 0,
            next: 1
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault();
        window.history.go(-1)
    }

    componentDidMount() {
        this.setState({slides: this.props})
    }


    render() {
        return (
                <article className="playThroughScreen">
                    <button className="close" onClick={this.handleClick}> X </button>
                    <h1>Hello {this.props.id}!</h1>
                </article>
        )
    }
}

export default Page

const Card = ( { props }) => (
    <div>Hello</div>
);