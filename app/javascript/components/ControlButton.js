import React from "react";
import "./control-button.scss";

export const Controls = (props) => {
    return <div className="controls">{props.children}</div>
};

export const ControlButton = (props) => {
        let color = props.disabled ? 'standard' : props.color;
        const fullName = [props.className, color].join(" ");

        return (
            <button onClick={props.onClick}
                    className={fullName}
                    disabled={props.disabled}
                    aria-label={props.label}
                    aria-describedby={props.tooltipID}
                    type={props.submit ? 'submit' : 'button'}>
                {props.children}
            </button>
        )
    };

ControlButton.defaultProps = {
    onClick: null,
    className: "control-button",
    color: "standard",
    disabled: false,
    type: null,
    submit: false,
    hover: false,
    active: false,
    label: null,
    tooltipID: null
};