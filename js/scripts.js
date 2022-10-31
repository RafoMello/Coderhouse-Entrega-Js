let total_alunos = prompt("Total de Alunos")
let i=0
let nota
let validacionclase

for(i=0,i<=total_alunos,i++)
{
nota[i] = prompt("Insira nota del aluno " & i)
}

validacionclase = console.log(promedioclase(nota,total_alunos))

if(promedionota>=6)
{
    console.log("Clase aprobada")
}else
{
    console.log("Clase Reprobada")
}

function promedioclase (nota, total_alunos)
{
    let promedionota
    let n

    for(n=0,n<=total_alunos,n++)
    {
        promedionota = promedionota+nota[n]
    }

    promedionota=promedionota/total_alunos
    return(promedionota)

}