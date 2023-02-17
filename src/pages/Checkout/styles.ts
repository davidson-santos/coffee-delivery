import styled from 'styled-components'

export const CheckoutContainer = styled.main`
    margin-top: 6.5rem;
    padding: 2.5rem 10rem;
    
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

export const  CardTitle = styled.div`
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

export const  Address = styled(BaseCard)`
    margin-bottom: 0.75rem;
    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }
`

export const  InputGrid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 1rem;

    span {
        display: flex;
        gap: 0.75rem;
    }

    label {
        
    }
`

const BaseInput = styled.input`
    height: 2.625rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;

    ::placeholder {
        color: ${(props) => props.theme['base-label']};
    }
`

export const CEPInput = styled(BaseInput)`
    width: 12.5rem;
`

export const StreetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)`
    width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
    width: calc(100% - (12.5rem + 0.75rem));
`

export const DistrictInput = styled(BaseInput)`
    width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
    width: calc(100% - (12.5rem + 0.75rem*2 + 3.75rem));
    min-width: 5rem;
`

export const UFInput = styled(BaseInput)`
    width: 3.75rem;
`

export const  Payment = styled(BaseCard)`
    svg {
        color: ${(props) => props.theme.purple};
    }
`

export const PayOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;
`

export const PayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border: 0;
    height: 3.1875rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    padding: 1rem;
    color: ${(props) => props.theme['base-text']};

    p {
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
    }
`

export const  CartContainer = styled.div`
`

export const  Cart = styled(BaseCard)`
    border-radius: 6px 44px;
    padding: 2.5rem;

    button {
        width: 100%;
        height: 2.875rem;
        background: ${(props) => props.theme.yellow};
        border-radius: 6px;
        border: 0;
        
        p {
            color: ${(props) => props.theme.white};
            font-weight: 700;
            line-height: 160%;
        }

    }
`

export const  Price = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    span {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
    }

    p + p {
        font-size: 1rem;
    }

    h2 {

    }
`

export const ItemContainer = styled.div`
    width: 100%;

    hr {
        border: 1px solid ${(props) => props.theme['base-button']};
        margin: 1.5rem 0;
    }
`

export const Item = styled.div`
    span {
        width: 100%;
        display: flex;
    }

    img {
        width: 4rem;
        height: 4rem;
    }

    > span {
        gap: 1.25rem;
        >span {
            display: initial;

            > span {
            justify-content: space-between;
            margin-bottom: 0.5rem;

            p {
                font-size: 1rem;
                font-weight: 400;

                color: ${(props) => props.theme['base-subtitle']};
            }

            p + p {
                font-weight: 700;
                color: ${(props) => props.theme['base-text']};
            }

        }
        }
    }

    /* span > span > span {
            display: flex;
            width: 300px;
            justify-content: space-between;
        } */

`

const BaseButton = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['base-button']};
    gap: 0.25rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    height: 2rem;
    width: fit-content;
    margin-right: 0.5rem;
`

export const CountButtons = styled(BaseButton)`
    svg {
        margin: 0;
        border: 0;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        color: ${props => props.theme.purple};
    }

    p {
        display: inline-block;
        text-align: center;
        color: ${props => props.theme['base-title']};
    }
`

export const PContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-width: 1.25rem;
`

export const RemoveButton = styled(BaseButton)`
    gap: 0.25rem;
    svg {
        color: ${props => props.theme.purple};
    }

    p {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        color: ${props => props.theme['base-title']};
    }
`