import { 
    CheckoutContainer, 
    OrderContainer, 
    CartContainer, 
    Address, 
    Payment, 
    Cart,
    InputGrid,
    CEPInput,
    StreetInput,
    NumberInput,
    ComplementInput,
    DistrictInput,
    CityInput,
    UFInput,
    CardTitle,
    PayOptions,
    PayButton,
    Price,
    ItemContainer,
    Item,
    CountButtons,
    RemoveButton,
    PContainer
} from "./styles";
// import { FormProvider, useForm } from 'react-hook-form'
// import { useState } from "react";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Minus, Plus, Trash } from 'phosphor-react'
import expresso from '../../assets/coffees/expresso-tradicional.png'
import latte from '../../assets/coffees/latte.png'


export function Checkout(){

    // const [data, setData] = useState("");

    // const { register, handleSubmit } = useForm();

    return (
        <CheckoutContainer>
            <form>
                <OrderContainer>
                    <h1>Complete seu pedido</h1>
                    <Address>
                        <CardTitle>
                            <span>
                                <MapPinLine size={22}/>
                                <span>
                                    <h2>Endereço de Entrega</h2>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </span>
                            </span>
                        </CardTitle>
                        <InputGrid>
                            <CEPInput id="cep" type="number" placeholder="CEP"/>
                            <StreetInput id="street" placeholder="Rua"/>
                            <span>
                                <NumberInput id="houseNumber" placeholder="Número"/>
                                <ComplementInput id="complement" placeholder="Complemento"/>
                            </ span>
                            <span>
                                <DistrictInput id="district" placeholder="Bairro"/>
                                <CityInput id="city" placeholder="Cidade"/>
                                <UFInput id="uf" placeholder="UF"/>
                            </span>
                        </InputGrid>
                    </Address>
                    <Payment>
                        <CardTitle>
                            <span>
                                <CurrencyDollar size={22}/>
                                <span>
                                    <h2>Pagamento</h2>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </span>
                            </span>
                            <PayOptions>
                                <PayButton>
                                    <CreditCard size={16}/>
                                    <p>CARTÃO DE CRÉDITO</p>
                                </PayButton>
                                <PayButton>
                                    <Bank size={16}/>
                                    <p>CARTÃO DE DÉBITO</p>
                                </PayButton>
                                <PayButton>
                                    <Money size={16}/>
                                    <p>DINHEIRO</p>
                                </PayButton>
                            </PayOptions>
                        </CardTitle>
                    </Payment>
                </OrderContainer>
                <CartContainer>
                    <h1>Cafés selecionados</h1>
                    <Cart>
                        <ItemContainer>
                            <Item>
                                <span>
                                    <img src={expresso} alt="" />
                                    <span>
                                        <span>
                                            <p>Expresso Tradicional</p>
                                            <p>R$ 9,90</p>
                                        </span>
                                        <CountButtons>
                                            <button>
                                                <Minus size={14} weight='bold'/>
                                            </button>
                                            <PContainer>
                                                <p>1</p>
                                            </PContainer>
                                            <button>
                                                <Plus size={14} weight='bold'/>
                                            </button>
                                        </CountButtons>
                                        <RemoveButton>
                                            <Trash size={16}/>
                                            <p>Remover</p>
                                        </RemoveButton>
                                    </span>
                                </span>
                            </Item>
                            <hr />
                        </ItemContainer>

                        <ItemContainer>
                            <Item>
                                <span>
                                    <img src={latte} alt="" />
                                    <span>
                                        <span>
                                            <p>Latte</p>
                                            <p>R$ 9,90</p>
                                        </span>
                                        <CountButtons>
                                            <button>
                                                <Minus size={14} weight='bold'/>
                                            </button>
                                            <PContainer>
                                                <p>1</p>
                                            </PContainer>
                                            <button>
                                                <Plus size={14} weight='bold'/>
                                            </button>
                                        </CountButtons>
                                        <RemoveButton>
                                            <Trash size={16}/>
                                            <p>Remover</p>
                                        </RemoveButton>
                                    </span>
                                </span>
                            </Item>
                            <hr />
                        </ItemContainer>

                        <Price>
                            <span>
                                <p>Total de itens</p>
                                <p>R$ 29,70</p>
                            </span>
                            <span>
                                <p>Entrega</p>
                                <p>R$ 3,50</p>
                            </span>
                            <span>
                                <h2>Total</h2>
                                <h2>R$ 33,20</h2>
                            </span>
                        </Price>
                        <button><p>CONFIRMAR PEDIDO</p></button>
                    </Cart>
                </CartContainer>
            </form>

        </CheckoutContainer>
    )
}