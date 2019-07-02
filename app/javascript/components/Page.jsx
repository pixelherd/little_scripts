import React from "react";

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
        this.setState({slides: this.props.little_script.steps})
    }


    render() {
        return (
            <article className="playThroughScreen">
                <h1>Hello {this.props.little_script.name}!</h1>


                <p>Total duration:</p>
                <span>{this.props.little_script.duration_hours} hours </span>
                <span>{this.props.little_script.duration_minutes} minutes </span>

            </article>
        )
    }
}

export default Page
