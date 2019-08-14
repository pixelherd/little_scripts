import React from "react";
import "../../assets/stylesheets/control-button.scss";

export const Controls = (props) => {
    return <div className="controls">{props.children}</div>
};

export const ControlButton = (props) => {
        let color = props.disabled ? 'standard' : props.color;
        const fullName = [props.className, color].join(" ");

        return (
            <button onClick={props.onClick}
                    value={props.value}
                    className={fullName}
                    disabled={props.disabled}
                    autoFocus={props.autofocus}
                    aria-label={props.label}
                    aria-describedby={props.tooltipID}
                    type={props.submit ? 'submit' : 'button'}>
                <span>{props.icon ? props.icon : ""}</span>
                <span>{props.label ? props.label : ""}</span>
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
    tooltipID: null,
    icon: null
};
