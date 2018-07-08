import styled from 'styled-components'
import { elevation, transition, purp } from 'Utilities'

export const Card = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 5px;
    color: ${purp}
    ${elevation[4]};
    ${transition({})}
    &:hover {
        ${elevation[5]};
    }
`;
