export class Cliente { //export para a classe conseguir ser usada em outros arquivos
    nome;
    _cpf;
}

get cpf() ; {
    return this._cpf;
}

constructor(nome,_cpf) ;{
    this.nome = nome;
    this._cpf = _cpf; }
