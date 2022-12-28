import logo from '../../assets/logo.svg'
import { HeaderBox } from './styles'
import {MapPin,ShoppingCart} from 'phosphor-react'

export function Header() {
    return (
        <HeaderBox>
            <nav>
                <img src={logo} alt="" />
                <span>
                    <button>
                        <MapPin weight='fill' size={24}/>
                        <p>Porto Alegre, RS</p>
                    </button>
                    <button>
                        <ShoppingCart weight='fill' size={22}/>
                    </button>
                </span>
            </nav>
        </HeaderBox>
    )
}