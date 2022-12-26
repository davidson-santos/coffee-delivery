import styled from 'styled-components'
import background from '../../assets/background-blur.svg'


export const HomeBanner = styled.main`
    padding: 5.75rem 10rem;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100vw;
`

export const BannerText = styled.div`
    h1 {
        font-family: 'Baloo 2',sans-serif;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
    }

    h2 {

    }
`

export const TextList = styled.div`
    display: flex;
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        gap: 1.25rem;
    }

    ul + ul {
        margin-left: 40px;
    }
`