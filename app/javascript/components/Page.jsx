import React from "react";
import StepCard from './StepCard';
import "./page.scss";

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

    componentDidMount() {
        this.setState({slides: this.props.little_script.steps})
    }

    handleClick(e) {
        e.preventDefault();
        window.history.go(-1)
    }


    render() {
        let initial_step = this.props.little_script.steps[0];
        return (
                <div className="playThroughScreen">
                    <nav>
                        <button className="close" onClick={this.handleClick}> X </button>
                    </nav>
                    <article className="script">
                        <h1>{this.props.little_script.name}</h1>
                        <section className="stepPanel">
                            <StepCard step={initial_step}/>
                        </section>
                    </article>
                </div>

        )
    }
}

export default Page