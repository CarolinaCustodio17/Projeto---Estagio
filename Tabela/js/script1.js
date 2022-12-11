class Cadastro {

    constructor() {

        this.linha = 1;
        this.arrayCadastro = [];
        this.editarLinha = null;
       
    }
    
    adicionar() {
        let cadastro = this.lerDados();
    
        if (this.validaCampos(cadastro)) {
            if (this.editarLinha == null){
                this.incluir(cadastro);
            } else {
                this.atualizar(this.editarLinha, cadastro);
            }
           
        }
    
        this.listaTabela();
        this.limpar();
    }
    
    listaTabela (){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
    
        for(let i = 0; i < this.arrayCadastro.length; i++) {
            let tr = tbody.insertRow();
            
            let td_linhaCad = tr.insertCell();
            let td_nomeCad = tr.insertCell();
            let td_idadeCad = tr.insertCell();
            let td_acoesCad = tr.insertCell();

            td_linhaCad.innerText = this.arrayCadastro[i].linha;
            td_nomeCad.innerText = this.arrayCadastro[i].nome;
            td_idadeCad.innerText = this.arrayCadastro[i].idade;

            td_linhaCad.classList.add('center');
           
            let imgEditar = document.createElement('img');
            imgEditar.src = 'img/editar.png';
            imgEditar.setAttribute("onclick", "cadastro.paraEditar("+ JSON.stringify(this.arrayCadastro[i])+")");

            let imgExcluir = document.createElement('img');
            imgExcluir.src = 'img/excluir.png';
            imgExcluir.setAttribute("onclick", "cadastro.deletar("+ this.arrayCadastro[i].linha +")");

            td_acoesCad.appendChild(imgEditar);
            td_acoesCad.appendChild(imgExcluir);

            console.log(this.arrayCadastro);
        }
    }
    
    incluir(cadastro) {
        this.arrayCadastro.push(cadastro);
        this.linha++;
    
    }

    atualizar(linha, cadastro) {
        for(let i = 0; i < this.arrayCadastro.length; i++);
            if(this.arrayCadastro[i].linha == linha) {
                this.arrayCadastro[i].nome = cadastro.nome;
                this.arrayCadastro[i].idade = cadastro.idade;

            }
       

    }
    
    paraEditar(inf) {
        this.editarLinha = inf.linha;

        document.getElementById('nome').value = inf.nome;
        document.getElementById('idade').value = inf.idade;

        document.getElementById('botao1').innerText = 'Atualizar';
 

    }

    lerDados() {
        let cadastro = {}

        cadastro.linha = this.linha;
        cadastro.nome = document.getElementById('nome').value;
        cadastro.idade = document.getElementById('idade').value;
    
        return cadastro;
    }
    
    validaCampos(cadastro) {
        let msg = "";
    
        if(cadastro.nome =='') {
            msg += 'Informe o nome \n';
        }
    
        if(cadastro.idade =='') {
            msg += 'Informe a idade \n';
        }
    
        if(msg !='') {
            alert(msg);
            return false
        }
    
        return true;
    }


    
    limpar() {
        cadastro.nome = document.getElementById('nome').value = '';
        cadastro.idade = document.getElementById('idade').value = '';

    }
    
    deletar(linha) {

        if (confirm('Confirma exclusão de linha' + linha)){

                    let tbody = document.getElementById('tbody');

       for(let i = 0; i < this.arrayCadastro.length; i++){
         if (this.arrayCadastro[i].linha == linha){
            this.arrayCadastro.splice(i, 1);
            tbody.deleteRow(i);
        }

         }
       }
       console.log(this.arrayCadastro);

    }

    }
    
    var cadastro = new Cadastro();
    


