import React from "react";
import {Route, HashRouter} from "react-router-dom";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            prev: -1,
            active: 0,
            next: 1
        }
    }

    componentDidMount() {
        this.setState({slides: this.props})
    }


    render() {
        return (
            <HashRouter>
                <Route path="/" component={Card} />



                <article className="playThroughScreen">
                    <h1>Hello {this.props.id}!</h1>

                </article>
            </HashRouter>
        )
    }
}

export default Page

const Card = ( { props }) => (
    <div>Hello</div>
);