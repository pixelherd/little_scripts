import React, {useState, useEffect} from 'react'
import WebpackerReact from 'webpacker-react'


const Hello = (props) => {
        return (<div>
            Hello {props.name}!
        </div>)
};

const Clock = (props) => {
  const [time, updateTime] = useState(new Date(props.date).getTime());

    useEffect(
        () => {
                let timer = setTimeout(
                    () => {
                        updateTime(time => time + 60000)
                    }, 60000);
                return () => clearTimeout(timer)
        },
        // if this value changes, clear the timer
        [time]
    );
    return <span> {new Date(time).toTimeString().slice(0,5)}</span>

};


// class Hello extends React.Component {
//     render() {
//         return <div>
//             Hello, I am {this.props.name}!
//         </div>
//     }
// }

WebpackerReact.setup({Hello});
WebpackerReact.setup({Clock});