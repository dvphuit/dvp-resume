import React from 'react';
import '../styles/switch.css';

interface SwitchProps {
    isOn: any;
    handleToggle: any;
    onColor: any;
 }

const Switch = (props: SwitchProps) => {
    return (
        <>
            <label className="switch"  style={{ background: props.isOn && props.onColor }}>
                <input type="checkbox" checked={props.isOn } onChange={props.handleToggle}/>
                <span className="slider round"/>
            </label>
        </>
    );
};

export default Switch;