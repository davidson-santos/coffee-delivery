import { CardContainer, PriceBar, Price, CountButtons } from './styles'
import {Minus, Plus, ShoppingCartSimple} from 'phosphor-react'
import coffee from '../../assets/coffees/expresso-tradicional.png'

export interface ProductCardProps{
    image: string,
    category: string,
    name: string,
    description: string,
    price: number,
}

export function ProductCard({category, description, image, name, price}: ProductCardProps) {
    return (
        <CardContainer>
            <img src={image} alt="" />
            <span>{category}</span>
            <h2>{name}</h2>
            <p>{description}</p>
            <PriceBar>
                <Price><p>R$</p><p>{price.toFixed(2).replace('.', ',')}</p></Price>
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