const funcionarios = [
    { Nome: 'Wally', Salario: 4800 },
    { Nome: 'Wallace', Salario: 5200 },
    { Nome: 'Will', Salario: 3900 },
    { Nome: 'Wazy', Salario: 4500 },
    { Nome: 'Wilton', Salario: 5000 }
];

funcionarios.forEach((funcionario) => console.log(funcionario));

const funcionariosComAumento = funcionarios.map((funcionario) => {
    return {
        Nome: funcionario.Nome,
        Salario: funcionario.Salario * 1.05 // Aumento de 5%
    };
});

const funcionarios5000OuMais = funcionariosComAumento.filter((funcionario) => {
    return funcionario.Salario >= 5000;
});

console.log(funcionarios5000OuMais);

const findFuncionarios = funcionarios5000OuMais

console.log(
    funcionarios.find((achar) => {
        return achar.Nome === 'Wally';
    })
);
