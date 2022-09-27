import React, { Component } from 'react';
import firebase from '../../Firebase';


class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            datanascimento: ""

        }
    }

    async componentDidMount(){

        await firebase.auth().onAuthStateChanged(async (usuario)=>{
            if (usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usurario").doc(uid).get()
                .then((retorno)=>{

                    this.setState({
                        nome: retorno.data().nome, 
                        sobrenome: retorno.data().sobrenome,
                        datanascimento: retorno.data().datanascimento
                    });
                });
            }

        });

    }

    render(){
        return(
            <div>
                Nome: { this.state.nome } <br />
                Sobrenome: { this.state.sobrenome } <br />
                Data de Nascimento: { this.state.datanascimento }
            </div>
        )
    }

}

export default Principal;