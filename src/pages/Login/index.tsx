import { Google, AlterRotas } from "./style";
import { Link } from "react-router-dom";
import GoogleLogo from '../../assets/devicon_google.svg';
import { HomeDiv, LogoHeader, DivFundo, Acao, Input, Botao } from "../../components/style";

export default function Home() {
    return (
        <HomeDiv>
            <LogoHeader>Gakalu</LogoHeader>
            <DivFundo>
                <Acao>Login</Acao>
                <Input placeholder="Email" type="Email"/>
                <Input placeholder="Senha" type="password"/>
                <AlterRotas>
                <Link to='/Cadastro'>
                    <a>Registrar-se</a>
                </Link>
                    
                    <a>Esqueceu a senha?</a>
                </AlterRotas>
                <Link to='/Home'>
                    <Botao>Entrar</Botao>
                </Link>
            </DivFundo>
            <Google>
                <img src={GoogleLogo} alt="Logotipo do google"/>
                <span>Entrar com Google</span>
            </Google>
        </HomeDiv>
    );
}