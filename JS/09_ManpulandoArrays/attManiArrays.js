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

const Quantia = [4800, 5200, 3900,4500,5000];

let filtroSalario = Quantia.filter((Salarios)=> {
    return Salarios >= 0;
});

console.log(filtroSalario)

const newSalario =filtroSalario.map(1.05*5040, 5460, 4095, 4725, 5250)

console.log(newSalario)

const mapText = funcionarios.map((valor) => {
    return valor.Salario;
    });
console.log(mapText)