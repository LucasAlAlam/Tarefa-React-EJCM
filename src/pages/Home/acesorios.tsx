import { InfoProduto } from './style'

import ImgAcessorio from '../../assets/acessórios.png'

export default function Acessorios() {
    return (
        <InfoProduto>
                <img src={ImgAcessorio} alt="Imagem do produto"/>
                <figcaption>Teclado Multilaser USB</figcaption><br/>
                <figcaption>R$57,88</figcaption>
        </InfoProduto>
    )
}