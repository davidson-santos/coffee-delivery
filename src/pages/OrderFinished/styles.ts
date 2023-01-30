import styled from 'styled-components'

export const OrderFinishedContainer = styled.main`
    margin-top: 6.5rem;
    padding: 5rem 10rem 2.5rem;

    h1 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['yellow-dark']};
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const InfoContainer = styled.div`
    margin-top: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfoBox = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    width: 32.875rem;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    margin: 0;
    border-radius: 6px 36px;
    /* gradiente da borda */
    background: 
        linear-gradient( ${(props) => props.theme.background}, ${(props) => props.theme.background}) padding-box, 
        ${(props) => props.theme.gradient} border-box;
    border: 1px solid transparent;
`

export const Image = styled.div`
    img {
        width: 30.75rem;
    }
`

export const TextList = styled.div`
    display: flex;
    margin: 0;

    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        gap: 1.25rem;
    }

    li {
        display: flex;
        align-items: center;
        line-height: normal;
        gap: 0.75rem;
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    p {
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
        font-weight: 400;
        line-height: 130%;
    }

    strong {
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
        font-weight: 700;
        line-height: 130%;
    }

`