import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export const buscarTodasCategorias = async (req, res) => {
    try {
        const todasCategorias = await prisma.categorias.findMany();

        res.status(200).json(todasCategorias)
    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar as categorias`})
    }
}

export const buscarCategoriaPorID = async (req, res) => {
    try {
      
        const categoriaPorId = await prisma.categorias.findUnique({
            where:{
             id: parseInt(req.params.id)
            }})

            res.status(200).json(categoriaPorId)

    }
    catch (error) {
        res.status(400).send({message: `${error.message} - Não foi possível localizar a categoria `})
    }
}

export const criarCategoria = async (req, res) => {
    const {
        descricao
    } = req.body;
    try {
        const categoriaCriada = await prisma.categorias.create({
            data: {
                descricao
            }
        })
        res.status(200).json(categoriaCriada)
     }
     catch (error) {
         res.status(400).send({message: `${error.message} - Não foi possível cadastrar a categoria`})
     }
}

export const atualizaCategoria = async (req, res) => {
    const {
        descricao
    } = req.body;
    try {
        const categoriaAtualizada = await prisma.categorias.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
              descricao
            }
        })
        res.status(200).json(categoriaAtualizada)
    }
    catch(error) {
       res.status(400).send({message: `${error.message} - Não foi possível atualizar a categoria `})
    }
}

export const deletaCategoria = async (req, res) => {
    try {
      await prisma.categorias.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).send("Categoria deletado com sucesso")
    }
    catch(error) {
        res.status(400).send({message: `${error.message} - Não foi possível deletar o categoria `})
     }
}