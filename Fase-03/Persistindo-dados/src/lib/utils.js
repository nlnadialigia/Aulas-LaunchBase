module.exports = {
    age(timestamp) {
        const today = new Date(); // cria um novo objeto de data
        const birthDate = new Date(timestamp);
    
        // 2019 - 1984 = 35
        let age = today.getFullYear() - birthDate.getFullYear()
        
        //verificar se o mês é positivo, negativo ou nulo
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month<0 || month==0 && today.getDate()<birthDate.getDate()) {
            age = age-1        
        }
    
        return age
    },

    date(timestamp) {
        // new Date - data local
        // timestamp - data universal
        const date = new Date(timestamp)

        //UTC - para conversão para o tempo universal

        //yyyyy
        const year = date.getUTCFullYear()

        //mm - mês é de 0 a 11 , por isso adiciona + 1
        // para a a formatação mm é preciso acrescentar um 0 antes do getUTCMonth
        // no entanto, quando o mês for de 2 dígitos a formatação ficará 0mm
        // slice(-2) corta a string e pega os 2 últimos números
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        //dd - vai de 1 ao 31, se o mês tiver 31
        //mesma explicação do month
        const day = `0${date.getUTCDate()}`.slice(-2)
        
        console.log(`${year}-${month}-${day}`);
        
        //return yyy/mm/dd
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`,
        }   
    }
}

