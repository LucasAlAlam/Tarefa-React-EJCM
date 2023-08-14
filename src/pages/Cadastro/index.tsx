import { CheckSenha } from './style';
import { Link } from "react-router-dom";
import {checarSenha} from './checarSenha';
import { HomeDiv, LogoHeader, DivFundo, Acao, Input, Botao } from "../../components/style";


export default function Cadastro() {
    return (
        <HomeDiv>
            <LogoHeader>Gakalu</LogoHeader>
            <DivFundo>
                <Acao>Cadastro</Acao>
                <Input placeholder='Nome Completo'/>
                <Input placeholder='Email' type='email'/>
                <Input placeholder='Senha' type='password' id='password' onKeyUp={checarSenha}/>
                <CheckSenha id='checkpass'>Força da senha: <div id="strongPass"></div> </CheckSenha>
                <Input placeholder='Confirmar Senha' id='confirmarSenha' type='password'/>
                <Link to='/'>
                    <Botao>Cadastrar</Botao>
                </Link>
            </DivFundo>
        </HomeDiv>
    )
}

