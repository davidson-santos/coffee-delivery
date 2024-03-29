import { HomeBanner, BannerText, TextList, BannerImage, HomeContainer, CoffeeMenu, CoffeeMenuProducts } from './styles'
// import background from '../../assets/background-blur.svg'
import coffeeIcon from  '../../assets/list-coffee.svg'
import buyIcon from  '../../assets/list-buy.svg'
import timeIcon from  '../../assets/list-time.svg'
import packageIcon from  '../../assets/list-package.svg'
import bannerImage from  '../../assets/banner-image.svg'
import { ProductCard, ProductCardProps } from '../../components/ProductCard'
import { coffeList } from './coffeList'
import { useState } from 'react'




export function Home(){

    interface ItemStore {
        id: string,
        quantity: number,
    }

    const [coffeeItemStore, newCoffeeItemStore]  = useState([{id:'', quantity: 0}])

    // function listProducts(list: ProductCardProps[]){
    //     const newlist = list.map( item => )
    // }

    // newCoffeeItemStore()



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
                <CoffeeMenuProducts>
                {
                    coffeList.map(coffeeItem => {
                        return(
                            <ProductCard
                                category={coffeeItem.category}
                                description={coffeeItem.description}
                                image={coffeeItem.image}
                                name={coffeeItem.name}
                                price={coffeeItem.price}
                            />
                        )
                    })
                }
                </CoffeeMenuProducts>
            </CoffeeMenu>
        </HomeContainer>
    )
}