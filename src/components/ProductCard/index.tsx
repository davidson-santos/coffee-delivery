import { CardContainer, PriceBar, Price, CountButtons } from './styles'
import {Minus, Plus, ShoppingCartSimple} from 'phosphor-react'
import coffee from '../../assets/coffees/expresso-tradicional.png'

export function ProductCard() {
    return (
        <CardContainer>
            <img src={coffee} alt="" />
            <span>tradicional</span>
            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <PriceBar>
                <Price><p>R$</p><p>9,90</p></Price>
                <CountButtons>
                    <button>
                        <Minus size={14} weight='bold'/>
                    </button>
                    <p>1</p>
                    <button>
                        <Plus size={14} weight='bold'/>
                    </button>
                </CountButtons>
                <button><ShoppingCartSimple size={22} weight='fill'/></button>
            </PriceBar>
        </CardContainer>
    )
}