import React from 'react';
import {Container, Row} from 'react-bootstrap'
import Head from 'next/head';

interface LayoutProps {
    children: any;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div className='d-flex align-items-center'>
            <Container>
                <Row>
                    {props.children}
                </Row>
            </Container>
        </div>
    );
}

