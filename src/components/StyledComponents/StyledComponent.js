import React from 'react';
import styled, { css } from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;

    ${props => props.primary && css`
        background: yellow;
        color: palevioletred;
        `}
    `;

function StyledComponent(props) {
    const {primary} = props;
    return (
        <div>
            <Title primary={primary}>Styled Component</Title>
        </div>
    )
};

export default StyledComponent;