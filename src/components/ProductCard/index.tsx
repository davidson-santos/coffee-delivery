import { CardContainer, PriceBar, Price, CountButtons } from './styles'
import {Minus, Plus} from 'phosphor-react'
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
                    <button>
                        <Minus size={14} weight='bold'/>
                    </button>
                    <p>1</p>
                    <button>
                        <Plus size={14} weight='bold'/>
                    </button>
                </CountButtons>
                <button></button>
            </PriceBar>
        </CardContainer>
    )
}