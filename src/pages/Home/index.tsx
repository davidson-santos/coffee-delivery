import { HomeBanner, BannerText,TextList } from './styles'
import background from '../../assets/background-blur.svg'

export function Home(){
    return (
        <HomeBanner>
            <BannerText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                <TextList>
                    <ul>
                        <li>Compra simples e segura</li>
                        <li>Entrega rápida e rasteada</li>
                    </ul>
                    <ul>
                        <li>Embalagem mantém o café intacto</li>
                        <li>O café chega fresquinho até você</li>
                    </ul>
                </TextList>
            </BannerText>
        </HomeBanner>
    )
}