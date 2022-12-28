import { HomeBanner, BannerText, TextList, BannerImage, HomeContainer, CoffeeMenu } from './styles'
import background from '../../assets/background-blur.svg'
import coffeeIcon from  '../../assets/list-coffee.svg'
import buyIcon from  '../../assets/list-buy.svg'
import timeIcon from  '../../assets/list-time.svg'
import packageIcon from  '../../assets/list-package.svg'
import bannerImage from  '../../assets/banner-image.svg'


export function Home(){
    return (
        <HomeContainer>
            <HomeBanner>
                <BannerText>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <TextList>
                        <ul>
                            <li>
                                <img src={buyIcon} alt="" />
                                Compra simples e segura
                            </li>
                            <li>
                                <img src={timeIcon} alt="" />
                                Entrega rápida e rasteada
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={packageIcon} alt="" />
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <img src={coffeeIcon} alt="" />
                                O café chega fresquinho até você
                            </li>
                        </ul>
                    </TextList>
                </BannerText>
                <BannerImage>
                    <img src={bannerImage} alt="" />
                </BannerImage>
            </HomeBanner>
            <CoffeeMenu>
                <h1>Nossos cafés</h1>

                <div className="cafeCard"></div>
            </CoffeeMenu>
        </HomeContainer>
    )
}