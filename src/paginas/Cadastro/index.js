import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

/* function Cadastro() {
    return(
        <div>
            <h1> Página de Cadastro </h1>
            <Link to="/">
                <button>Voltar para login</button>
            </Link>
        </div>
    )
} */

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            datanascimento: ""
        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then( async (retorno) => {

            await firebase.firestore().collection("usurario").doc(retorno.user.uid).set ({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                datanascimento: this.state.datanascimento
            });

        });

    }

    render(){
        return(
            <div>
                <h1> Página de Cadastro</h1>
                <input type="text" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
                <br />
                <input type="password" placeholder='Senha' onChange={(e) => this.setState ({senha: e.target.value})} />
                <br />
                <input type="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})} />
                <br />
                <input type="text" placeholder='Sobrenome' onChange={(e) => this.setState ({sobrenome: e.target.value})} />
                <br />
                <input type="text" placeholder='Data de Nascimento' onChange={(e) => this.setState ({datanascimento: e.target.value})} />
                <br />
                <button onClick={this.gravar}>Gravar</button>
                <Link to="/Login">
                <button>Ir para Login</button>
                </Link>
            </div>
        )
    }
}

export default Cadastro;

