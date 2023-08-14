import { Cabecalho, ExibeProdutos, Lupa, MenuDiv, NomeProduto, Perfil, PesquisaDiv, Produtos, HomeDiv, Input } from './style'
import { } from '../../components/style'


import IconePerfil from '../../assets/Perfil.svg'
import IconeLupa from '../../assets/material-symbols_search.svg'
import IconeCarrinho from '../../assets/icone_carrinho.svg'
import IconeMenuHamburger from '../../assets/icone_menu_hamburger.svg'

import Computadores from './computadores'
import Notebooks from './notebooks'
import Consoles from './consoles'
import PCIS from './pci'
import Acessorios from './acesorios'
import Jogos from './jogos'

function getComputadores() {
    return (
        <Produtos>
            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>

            <ExibeProdutos>
                <Computadores />
            </ExibeProdutos>
        </Produtos>
    )
}

function getNotebooks() {
    return (
        <Produtos>
        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>

        <ExibeProdutos>
            <Notebooks />
        </ExibeProdutos>
    </Produtos>
    )
}

function getConsoles() {
    return (
        <Produtos>
                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Consoles />
                </ExibeProdutos>
            </Produtos>
    )
}

function getPCI() {
    return (
        <Produtos>
                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>

                <ExibeProdutos>
                    <PCIS />
                </ExibeProdutos>
            </Produtos>
    )
}

function getAcessorios() {
    return (
        <Produtos>
                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>

                <ExibeProdutos>
                    <Acessorios />
                </ExibeProdutos>
            </Produtos>
    )
}

function getJogos() {
    return (
        <Produtos>
        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>

        <ExibeProdutos>
            <Jogos />
        </ExibeProdutos>
    </Produtos>
    )
}

export default function Home() {
    return (
        <HomeDiv>
            <Cabecalho>
                <Perfil src={IconePerfil} alt='Icone de Perfil' />
                <PesquisaDiv>
                    <Input placeholder='Pesquisar' />
                    <Lupa src={IconeLupa} alt='Icone para pesquisa' />
                </PesquisaDiv>
                <MenuDiv>
                    <img src={IconeCarrinho} alt='Icone do carrinho de compras' />
                    <img src={IconeMenuHamburger} alt='Icone do menu de navegação' />
                </MenuDiv>
            </Cabecalho>
            <NomeProduto id='Computadores'>Computadores</NomeProduto>
            {getComputadores()}

            <NomeProduto>Notebooks</NomeProduto>
            {getNotebooks()}


            <NomeProduto>Consoles</NomeProduto>
            {getConsoles()}

            <NomeProduto>PCI's</NomeProduto>
            {getPCI()}

            <NomeProduto>Acessórios</NomeProduto>
            {getAcessorios()}

            <NomeProduto>Jogos</NomeProduto>
            {getJogos()}
        </HomeDiv >
    )
}