import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;


    img {
        width: 120px;
        height: 120px;
        margin: -1.25rem 4.25rem 0.75rem;
    }
    
    span {
        background: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        border-radius: 100px;
        font-size: 0.625rem;
        font-weight: 700;
        line-height: 130%;
        padding: 0.25rem 0.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    h2 {
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 700;
        font-family: "Baloo 2", sans-serif;
        line-height: 130%;
        margin-bottom: 0.5rem;
        text-transform: capitalize;
    }

    > p {
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
        line-height: 130%;
        margin: 0 1.25rem;
        text-align: center;
        margin-bottom: 2.0625rem;
    }

`

export const PriceBar = styled.div`
    display: flex;
    align-items: center;
`
export const Price = styled.div`
    display: flex;
    justify-content: baseline;
    align-items: center;

    font-size: 0.875rem;


    p {
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
    }
`

export const CountButtons = styled.div`
    height: 2.375rem;
    width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['base-button']};
    gap: 0.25rem;

    button {
        height: 0.875rem;
        width: 0.875rem;
        border: 0;
        /* background: none; */
    }
`
