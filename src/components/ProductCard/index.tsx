import { CardContainer, PriceBar, Price, CountButtons } from './styles'

export function ProductCard() {
    return (
        <CardContainer>
            <img src="" alt="" />
            <span>tradicional</span>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <PriceBar>
                <Price>R$<p>9,90</p></Price>
                <CountButtons>
                    <button></button>
                    <button></button>
                </CountButtons>
                <button></button>
            </PriceBar>
        </CardContainer>
    )
}