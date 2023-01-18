import { 
    CheckoutContainer, 
    OrderContainer, 
    CartContainer, 
    Address, 
    Payment, 
    Cart,
    BaseInput
} from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from "react";
import { MapPinLine } from 'phosphor-react'

export function Checkout(){

    // const [data, setData] = useState("");

    // const { register, handleSubmit } = useForm();

    return (
        <CheckoutContainer>
            <form>
                <OrderContainer>
                    <h1>Complete seu pedido</h1>
                    <Address>
                        <span>
                            <MapPinLine size={22}/>
                            <span>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </span>
                        </span>
                        <BaseInput id="cep" placeholder="CEP" />
                    </Address>
                    <Payment></Payment>
                </OrderContainer>
                <CartContainer>
                    <h1>Cafés selecionados</h1>
                    <Cart></Cart>
                </CartContainer>
            </form>

        </CheckoutContainer>
    )
}