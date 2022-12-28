import styled from 'styled-components'

export const HeaderBox = styled.header`
    display: block;
    background: ${props => props.theme.background};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 6.5rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 10rem;
    }

    nav span{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        height: 2.375rem;
    }

    nav span button {
        display: flex;
        align-items: center;
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        font-size: 0.875rem;
        line-height: 130%;
        background: ${props => props.theme['purple-light']};
        color: ${props => props.theme.purple};
    }

    nav span button p {
        color: ${props => props.theme['purple-dark']};
    }

    nav span button + button{
        border: 0;
        padding: 0.5rem;
        line-height: 0;
        color: ${props => props.theme['yellow-dark']};
        background: ${props => props.theme['yellow-light']};
    }
`