const fs = require('fs')
const data = require('./data.json')
const {age, date} = require('./util')

//show
exports.show = function (req,res) {
    // req.params.id = /:id/:member
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send ('Instructor not found!')

    const instructor = {
        ...foundInstructor, //coloca dentro do objeto tudo que tem no objeto e corrige o que for discriminado abaixo
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','), //pega a string separada por vírgula e transforma em array. O que vem dentro do () mostra onde será quebrado.
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
    }

    return res.render('instructors/show', {instructor})
}

//create
exports.post = function (req,res) {   
    //req.body
    //{"avatar_url":"https://google.com","name":"Nadia Ligia","birth":"1978-06-14","gender":"F","services":"Musculação, Alongamento"}
    
    //=====================================================================================================================================
    // ESTRUTURA DE VALIDAÇÃO SE TODOS OS CAMPOS ESTÃO PREENCHIDOS OU NÃO
    const keys = Object.keys(req.body)// cria uma array somente com as chaves do objeto: ["avatar_url","name","birth","gender","services"]

    for(key of keys){
        if (req.body[key]==""){
            return res.send('Please, fill all fileds')
        } // pode não colocar as chaves{} se o if contiver apenas uma linha
    }
    //=====================================================================================================================================

    let {avatar_url, name, birth, gender, services} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()//cria a data do cadastro
    const id = Number(data.instructors.length+1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json",JSON.stringify(data, null, 2), function(err){
        if(err) return res.send('Write file error')

        return res.redirect("/instructors")
    })

    // return res.send(req.body)    
}

//edit
exports.edit = function (req,res) {
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send ('Instructor not found!')

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render('instructors/edit', {instructor})
}


//update

//delete