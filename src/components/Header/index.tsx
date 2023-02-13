import logo from '../../assets/logo.svg'
import { HeaderBox } from './styles'
import {MapPin,ShoppingCart} from 'phosphor-react'
import {NavLink} from 'react-router-dom'

export function Header() {
    return (
        <HeaderBox>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <span>
                    <button>
                        <MapPin weight='fill' size={24}/>
                        <p>Porto Alegre, RS</p>
                    </button>
                    <NavLink to="/checkout" >
                        <button>
                            <ShoppingCart weight='fill' size={22}/>
                        </button>
                    </NavLink>
                    
                </span>
            </nav>
        </HeaderBox>
    )
}