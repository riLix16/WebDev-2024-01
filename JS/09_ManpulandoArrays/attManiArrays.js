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
    return {
        Nome: funcionario.Nome,
        Salario: funcionario.Salario * 1.05 // Aumento de 5%
    };
});

console.log(funcionariosComAumento);

let filtroSalario = funcionariosComAumento.filter((filtro) => {
    return filtro <= 5000;
});

console.log(filtroSalario);
