import React, { Component } from 'react'
import { ButtonGroup, Button, Image, Container } from 'react-bootstrap';
import { GithubFilled, FacebookFilled, SkypeFilled, MailFilled } from '@ant-design/icons';

import '../styles/profile.css';

export default class Profile extends Component {
    render() {
        return (
            <Container className='profile'>
                <h5>TEST</h5>
                <div>
                    <Image className='avatar d-block mx-auto img-fluid' roundedCircle thumbnail src='https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/b/5/3/27f4-c9e4-4765-b86f-85cd8879f243.jpg' />
                </div>
                <div className='short-about'>Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.</div>
                <div className='linked'>
                    <GithubFilled />
                    <FacebookFilled />
                    <SkypeFilled />
                    <MailFilled />
                </div>
            </Container>
        )
    }
}
