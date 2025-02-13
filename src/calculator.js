let vitorias = winDefeat(50, 23)
function winDefeat(vitoria, derrotas){
    let result = vitoria - derrotas
        return result
}

let level = ""

if  ( vitorias <= 10) 
    {level = "Ferro"}

else if ( vitorias > 11 && vitorias  <= 20)
        {level = "Bronze"}

else if ( vitorias > 21 && vitorias <= 50)
        {level = "Prata"}

else if (vitorias > 51 && vitorias <= 80)
        {level = "Ouro"}

else if (vitorias > 81 && vitorias <= 90)
        {level = "Diamante"}

else if (vitorias > 91 && vitorias <= 100)
        {level = "Lendário"}

else if (vitorias >= 101)
    {level = "Imortal"}


    console.log("O Herói tem um saldo de " + vitorias + " vitórias" + " e está no Nível " + level)