import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export const buscaTodosFormulariosReunioes = async (req, res) => {
    try{
        const formulariosBuscados = await prisma.formularioReuniao.findMany();
    
        res.status(200).json(formulariosBuscados);
    }
    catch(error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar formulários`})
    }
}

export const buscarFormularioReuniaoPorId = async (req, res) => {
    try {
        const respostaReuniao = await prisma.formularioReuniao.findUnique({
            where: {
                id: intParse(req.params.id)
            }
        })
        res.status(200).json(respostaReuniao)
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar o formulário`})
    }
}

export const criarFormularioReuniao = async (req, res) => {
    const {
        visita,
        data,
        local,
        categoriaId,
        duracao,
        assunto,
        participanteId,
    } = req.body
    try {
        const reuniaoCriada = await prisma.formularioReuniao.create({
            data: {
              visita,
              data,
              local,
              duracao,
              assunto,
              categoriaId,
              participante : [ {
                connect: {
                    id: participanteId.id
                }

              }]

            },
          })
          res.status(200).json(reuniaoCriada);
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível criar o formulário`})
    }
}

export const atualizarFormularioReuniao = async (req, res) => {
    const {
        visita,
        data,
        local,
        categoria,
        duracao,
        assunto,
        participanteId,
    } = req.body
    try{
        

    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível criar o formulário`})
    }
}