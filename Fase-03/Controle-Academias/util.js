module.exports = {
    age: function age(timestamp) {
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

    date: function (timestamp) {
        const date = new Date(timestamp)

        //yyyyy
        const year = date.getUTCFullYear()

        //mm - mês é de 0 a 11 , por isso adiciona + 1
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        //dd - vai de 1 ao 31, se o mês tiver 31
        const day = `0${date.getUTCDate()}`.slice(-2)

        console.log(`${year}-${month}-${day}`);
        //return yyy/mm/dd
        return `${year}-${month}-${day}`
    }
}

