import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { Portal, absolute } from 'Utilities'
import { Card } from './Cards'

export default class Modal extends Component {
    render() {
        const { children, on, toggle } = this.props

        return (
            <Portal>
                {on && (
                    <ModalWrapper>
                        <ModalCard>
                            <CloseButton onClick={toggle}>
                                <Icon name="close" />
                            </CloseButton>
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
   ${absolute({})};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = Card.extend`
    position: relative;
    z-index: 1;
    min-width: 320px;
    margin-bottom: 100px;
`;

const CloseButton = styled.button`
    ${absolute({
        y: 'top',
        x: 'right'
    })};
    border: none;
    background: transparent;
    padding: 10px;
`;

const Background = styled.button`
   ${absolute({})};
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
`;
