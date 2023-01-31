import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const buscarTodosParticipantes = async (req, res) => {
    try {
        const todosParticipantes = await prisma.participante.findMany();

        res.status(200).json(todosParticipantes)
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar os participantes`})
    }
}

export const buscarParticipantePorID = async (req, res) => {
    try {
      
        const participantePorId = await prisma.participante.findUnique({
            where:{
             id: parseInt(req.params.id)
            }})

            res.status(200).json(participantePorId)

    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar o participante `})
    }
}

export const criarParticipante = async (req, res) => {
    const {
        nome,
        email,
        cargo
    } = req.body;
    try {
        const participanteCriado = await prisma.participante.create({
            data: {
                nome,
                email,
                cargo
            }
        })
        res.status(200).json(participanteCriado)
     }
     catch (error) {
         res.status(400).send({message: `${error.message} - Não foi possível cadastrar o cliente`})
     }
}

export const atualizaParticipante = async (req, res) => {
    const {
        nome,
        email,
        cargo
    } = req.body;
    try {
        const participanteAtualizado = await prisma.participante.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nome,
                email,
                cargo
            }
        })
        res.status(200).json(participanteAtualizado)
    }
    catch(error) {
       res.status(400).send({message: `${error.message} - Não foi possível atualizar o participante `})
    }
}

export const deletaParticipante = async (req, res) => {
    try {
      await prisma.participante.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).send("Participante deletado com sucesso")
    }
    catch(error) {
        res.status(400).send({message: `${error.message} - Não foi possível deletar o participante `})
     }
}