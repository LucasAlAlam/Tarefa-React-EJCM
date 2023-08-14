import { Cabecalho, ExibeProdutos, HomeDiv, Input, Lupa, MenuDiv, NomeProduto, Perfil, PesquisaDiv, Produtos } from './style'
import Computadores from './computadores'
import Notebooks from './notebooks'

import IconePerfil from  '../../components/Perfil.svg'
import IconeLupa from '../../components/material-symbols_search.svg'
import IconeCarrinho from '../../components/icone_carrinho.svg'
import IconeMenuHamburger from '../../components/icone_menu_hamburger.svg'
import Consoles from './consoles'
import PCIS from './pci'
import Acessorios from './acesorios'
import Jogos from './jogos'



export default function Home() {
    return (
        <HomeDiv>
            <Cabecalho>
                <Perfil src={IconePerfil} alt='Icone de Perfil'/>
                <PesquisaDiv>
                    <Input placeholder='Pesquisar'/>
                    <Lupa src={IconeLupa} alt='Icone para pesquisa'/>
                </PesquisaDiv>
                <MenuDiv>
                    <img src={IconeCarrinho} alt='Icone do carrinho de compras'/>
                    <img src={IconeMenuHamburger} alt='Icone do menu de navegação'/>
                </MenuDiv>
            </Cabecalho>
            <NomeProduto>Computadores</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Computadores/>
                </ExibeProdutos>
            </Produtos>


            <NomeProduto>Notebooks</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Notebooks/>
                </ExibeProdutos>
            </Produtos>


            <NomeProduto>Consoles</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Consoles/>
                </ExibeProdutos>
            </Produtos>

            <NomeProduto>PCI's</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <PCIS/>
                </ExibeProdutos>
            </Produtos>

            <NomeProduto>Acessórios</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Acessorios/>
                </ExibeProdutos>
            </Produtos>

            <NomeProduto>Jogos</NomeProduto>
            <Produtos>
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
                
                <ExibeProdutos>
                    <Jogos/>
                </ExibeProdutos>
            </Produtos>
        </HomeDiv>
    )
}