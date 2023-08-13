import { Botao, Google, DivFundo, HomeDiv, Input, LogoHeader, AlterRotas, Acao } from "./style";

import GoogleLogo from '../../components/devicon_google.svg';

export default function Home() {
    return (
        <HomeDiv>
            <LogoHeader>Gakalu</LogoHeader>
            <DivFundo>
                <Acao>Login</Acao>
                <Input placeholder="Email" type="Email"/>
                <Input placeholder="Senha" type="password"/>
                <AlterRotas>
                    <a>Registrar-se</a>
                    <a>Esqueceu a senha?</a>
                </AlterRotas>
                <Botao>Entrar</Botao>
            </DivFundo>
            <Google>
                <img src={GoogleLogo} alt="Logotipo do google"/>
                <span>Entrar com Google</span>
            </Google>
        </HomeDiv>
    );
}