import { InfoProduto } from './style'

import ImgPci from '../../assets/pci.png'

export default function PCIS() {
    return (
        <InfoProduto>
                <img src={ImgPci} alt="Imagem do produto"/>
                <figcaption>Memória RAM 1GB DDR2</figcaption><br/>
                <figcaption>R$29,23</figcaption>
        </InfoProduto>
    )
}