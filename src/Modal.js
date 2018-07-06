import React, { Component } from 'react'
import styled from 'styled-components'
import Portal from './Portal'

export default class Modal extends Component {
    render() {
        const { children, on, toggle } = this.props

        return (
            <Portal>
                {on && (
                    <ModalWrapper>
                        <ModalCard>
                            <CloseButton onClick={toggle}>Close</CloseButton>
                            <div>{children}</div>
                        </ModalCard>
                        <Background onClick={toggle} />
                    </ModalWrapper>
                )}
            </Portal>
        )
    }
}

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: #fff;
    padding: 15px;
    border-raduis: 5px;
    box-shadow: 2px 2px 10px rgba(0,0,0, .3);
    z-index: 1;
    min-width: 320px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`;

const Background = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
`;
