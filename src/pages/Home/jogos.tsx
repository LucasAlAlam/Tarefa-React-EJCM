import { InfoProduto } from './style'

import ImgJogo from '../../assets/jogo.png'

export default function Jogos() {
    return (
        <InfoProduto>
                <img src={ImgJogo} alt="Imagem do produto"/>
                <figcaption>Guitar Hero III para PS2</figcaption><br/>
                <figcaption>R$149,99</figcaption>
        </InfoProduto>
    )
}