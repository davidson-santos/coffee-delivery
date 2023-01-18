import styled from 'styled-components'

export const CheckoutContainer = styled.main`
    margin-top: 6.5rem;
    padding: 2.5rem 10rem;
    /* background: red; */
    form {
        display: grid;
        grid-template-columns: 3fr 2fr;
        justify-content: space-between;
        gap: 2rem;
    }
    h1 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 1rem;
    }
`


export const  OrderContainer = styled.div`
     
`

const  BaseCard = styled.div`
    background: ${(props) => props.theme['base-card']} ;
    padding: 2.5rem;
    border-radius: 6px;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
    }
`

export const  Address = styled(BaseCard)`
    margin-bottom: 0.75rem;
    
    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }

    span {
        display: flex;
        align-items: flex-start;

        svg {
            width: 1.375rem;
            height: 1.375rem;
        }

        span {
            
            flex-direction: column;
        }
    }

    > span {
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    h2 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
    }

    p {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
        font-size: 0.875rem;
    }
`

export const  Payment = styled(BaseCard)``

export const  CartContainer = styled.div`
`

export const  Cart = styled(BaseCard)`
    background: blue;

`

export const BaseInput = styled.input``


