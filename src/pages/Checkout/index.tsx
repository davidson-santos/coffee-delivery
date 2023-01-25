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
    PayButton
} from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from "react";
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

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
                                <PayButton>CARTÃO DE CRÉDITO</PayButton>
                                <PayButton>CARTÃO DE DÉBITO</PayButton>
                                <PayButton>DINHEIRO</PayButton>
                            </PayOptions>
                        </CardTitle>
                    </Payment>
                </OrderContainer>
                <CartContainer>
                    <h1>Cafés selecionados</h1>
                    <Cart></Cart>
                </CartContainer>
            </form>

        </CheckoutContainer>
    )
}