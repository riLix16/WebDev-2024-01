const funcionarios = [
    {
        Nome: 'Wally', Salario: 4800, },
    {
        Nome: 'Wallace', Salario: 5200,
    },
    {
        Nome: 'Will', Salario: 3900,
    },
    {
        Nome: 'Wazy', Salario: 4500,
    },
    {
        Nome: 'Wilton', Salario: 5000,
    },
];

funcionarios.forEach((funcionario) => console.log(funcionario));

const funcionariosComAumento = funcionarios.map((funcionario) => {
    const novoSalario = funcionario.Salario * 1.05; // Aumento de 5%
    return { Nome: funcionario.Nome, Salario: novoSalario };
});

console.log(filtroSalario)

const newSalario = filtroSalario.map(1.05*5040, 5460, 4095, 4725, 5250);
