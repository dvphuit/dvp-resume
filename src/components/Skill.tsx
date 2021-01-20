import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import { BaseIcon } from '../assets/icons/BaseIcon';
import MyIcon from '../assets/icons/SvgIcons';
import '../styles/skill.css';

export interface SkillProps {
    data: {
        icons: BaseIcon[];
        title: string;
        description: string;
    }
}
const Skill = (props: SkillProps) => {
    return (
        <Col className='skill' sm={3}>
            <div className='skill-icons'>{props.data.icons.map((e) => <MyIcon key={e.name} icon={e} />)}</div>
            <div className='skill-title'>{props.data.title}</div>
            <div className='skill-description'>{props.data.description}</div>
        </Col>
    )
}

export default Skill;