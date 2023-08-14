import { InfoProduto } from './style'

import ImgComputador from '../../assets/computador.png'

export default function Computadores() {
    return (
        <InfoProduto>
                <img src={ImgComputador} alt="Imagem do produto"/>
                <figcaption>Computador Dell 8GB RAM 1TB HD</figcaption><br/>
                <figcaption>R$ 4.893,93</figcaption>
        </InfoProduto>
    )
}