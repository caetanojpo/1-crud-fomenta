import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export const buscarTodosPlanos = async (req, res) => {
    try {
        const buscarTodosPlanos = await prisma.planos.findMany();

        res.status(200).json(buscarTodosPlanos);
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível cadastrar o plano`})
    }

}

export const buscarPlanoPorID = async (req, res) => {
    try {
      
        const planoPorId = await prisma.planos.findUnique({
            where:{
             id: parseInt(req.params.id)
            }})

            res.status(200).json(planoPorId)

    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar o plano `})
    }
}

export const criarPlano = async (req, res) => {
    const {
        descricao
    } = req.body;
    try{
        const planoCriado = await prisma.planos.create({
            data: {
                descricao
            }
        })
        res.status(200).json(planoCriado)
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível cadastrar o plano`})
    }
}
export const atualizaPlano = async (req, res) => {
    const {
        descricao
    } = req.body;
    try {
        const planoAtualizado = await prisma.planos.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                descricao
            }
        })
        res.status(200).json(planoAtualizado)
    }
    catch(error) {
       res.status(400).send({message: `${error.message} - Não foi possível atualizar o plano `})
    }
}

export const deletaPlano = async (req, res) => {
    try {
      await prisma.planos.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).send("Plano deletado com sucesso")
    }
    catch(error) {
        res.status(400).send({message: `${error.message} - Não foi possível deletar o plano `})
     }
}