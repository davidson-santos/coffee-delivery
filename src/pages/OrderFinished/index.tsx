import { Image, InfoBox, InfoContainer, OrderFinishedContainer, TextList } from "./styles";
import deliveryImage from '../../assets/delivery-guy.svg'
import timeIcon from '../../assets/list-time.svg'
import mapPinIcon from '../../assets/list-map-pin.svg'
import moneyIcon from '../../assets/list-money.svg'

export function OrderFinished() {
    return(
        <OrderFinishedContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <InfoContainer>
                <InfoBox>
                        <TextList>
                            <ul>
                                <li>
                                    <img src={mapPinIcon} alt="" />
                                    <span>
                                        <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                                        <p>Farrapos - Porto Alegre, RS</p>
                                    </span>
                                </li>
                                <li>
                                    <img src={timeIcon} alt="" />
                                    <span>
                                        <p>Previsão de entrega</p>
                                        <strong>20 min - 30 min</strong>
                                    </span>
                                </li>
                                <li>
                                    <img src={moneyIcon} alt="" />
                                    <span>
                                        <p>Pagamento na entrega</p>
                                        <strong>Cartão de crédito</strong>
                                    </span>
                                </li>
                            </ul>
                        </TextList>
                </InfoBox>
                <Image>
                    <img src={deliveryImage} alt="" />
                </Image>
            </InfoContainer>
        </OrderFinishedContainer>
    )
}