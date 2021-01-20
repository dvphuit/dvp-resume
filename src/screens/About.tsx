import React, { Component } from 'react'
import { Row, Container } from 'react-bootstrap';
import { DevIcons } from '../assets/icons/DevIcons';
import Skill, { SkillProps } from '../components/Skill'
// import { SiJava, SiKotlin, SiAndroid } from "react-icons/si";
export default class About extends Component {
    render() {
        const skill: SkillProps = {
            data: {
                icons: [DevIcons.android, DevIcons.java, DevIcons.kotlin, DevIcons.dart],
                title: 'Android',
                description: 'Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.'
            }
        }

        return (
            <Container>
                <Row>
                    <Skill data={skill.data} />
                </Row>
            </Container>
        )
    }
}
