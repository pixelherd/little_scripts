import React from "react";
import StepCard from './StepCard';
import "./page.scss";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({slides: this.props.little_script.steps});
    }

    handleClick(e) {
        e.preventDefault();
        window.history.go(-1)
    }


    render() {
        let initial_step = this.props.little_script.steps[0];
        let steps = this.props.little_script.steps;
        return (
                <div className="playThroughScreen">
                    <nav>
                        <button className="close" onClick={this.handleClick}> X </button>
                    </nav>
                    <article className="script">
                        <h1>{this.props.little_script.name}</h1>
                        <SlideControls slides={steps}/>
                    </article>
                </div>

        )
    }
}

export default Page

const SlideControls = (props) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const maxSlides = props.slides.length;

    function handleNext() {

        setActiveSlide(prev => prev + 1);
    }

    function handleBack() {
        setActiveSlide(prev => prev - 1);
    }
    return (
        <div>
            <StepCard step={props.slides[activeSlide]}/>
            <button className="back" onClick={handleBack} disabled={activeSlide === 0}> back </button>
            <button className="next" onClick={handleNext} disabled={activeSlide === maxSlides - 1}> next </button>
        </div>
    )

};