import styled from 'styled-components'
import background from '../../assets/background-blur.svg'


export const HomeContainer = styled.main`
`

export const HomeBanner = styled.div`
    margin-top: 6.5rem;
    padding: 5.75rem 10rem;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 100vw;
    display: flex;
    justify-content: space-between;
`

export const BannerText = styled.div`
    width: 36.75rem;
    h1 {
        font-family: 'Baloo 2',sans-serif;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;
        margin-bottom: 4.125rem;
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

    li {
        display: flex;
        align-items: center;
        line-height: normal;
        gap: 0.75rem;
    }

`

export const BannerImage = styled.div`
    img {
        width: 29.75rem;
    }
`

export const CoffeeMenu = styled.div`
    margin: 2rem 10rem 10rem;
    /* width: 100%; */
    /* background: red; */

    h1 {
        line-height: 130%;
        margin-bottom: 3.375rem;
    }
`

export const CoffeeMenuProducts = styled.div`
    width: 100%;
    /* background: blue; */
    display: grid;
    margin: auto;
    /* justify-content: space-between; */
    /* grid-gap: 2.5rem 2rem; */
    /* flex: 1; */
    /* flex-wrap: wrap; */
    /* flex */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* grid: 1; */
    /* grid-auto-flow: row; */
`