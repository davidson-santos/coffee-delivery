import { ProductCardProps } from "../../components/ProductCard";
import americano from  '../../assets/coffees/americano.png'
import arabe from  '../../assets/coffees/arabe.png'
import cafeComLeite from  '../../assets/coffees/cafe-com-leite.png'
import cafeGelado from  '../../assets/coffees/cafe-gelado.png'
import capuccino from  '../../assets/coffees/capuccino.png'
import chocolateQuente from  '../../assets/coffees/chocolate-quente.png'
import cubano from  '../../assets/coffees/cubano.png'
import expressoCremoso from  '../../assets/coffees/expresso-cremoso.png'
import expressoTradicional from  '../../assets/coffees/expresso-tradicional.png'
import havaiano from  '../../assets/coffees/havaiano.png'
import irlandes from  '../../assets/coffees/irlandes.png'
import latte from  '../../assets/coffees/latte.png'
import macchiato from  '../../assets/coffees/macchiato.png'
import mochaccino from  '../../assets/coffees/mochaccino.png'



export const coffeList: ProductCardProps[] = [
    {
        category: 'tradicional',
        name: 'Expresso Tradiciona',
        description: 'O tradicional café feito com água quente e grãos moídos',
        image: expressoTradicional,
        price: 9.90,
    },       
    {
        category: 'tradicional',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        image: americano,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        image: expressoCremoso,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        image: cafeGelado,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        image: cafeComLeite,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        image: latte,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        image: capuccino,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        image: macchiato,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        image: mochaccino,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        image: chocolateQuente,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        image: cubano,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        image: havaiano,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        image: arabe,
        price: 9.90,
    },
    {
        category: 'tradicional',
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        image: irlandes,
        price: 9.90,
    },

]