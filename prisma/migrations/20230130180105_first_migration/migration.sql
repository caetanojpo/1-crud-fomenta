-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormularioReuniao" (
    "id" SERIAL NOT NULL,
    "visita" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "duracao" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormularioReuniao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormularioCoworking" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "organizacao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "planoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FormularioCoworking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FormularioReuniaoToParticipante" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FormularioReuniaoToParticipante_AB_unique" ON "_FormularioReuniaoToParticipante"("A", "B");

-- CreateIndex
CREATE INDEX "_FormularioReuniaoToParticipante_B_index" ON "_FormularioReuniaoToParticipante"("B");

-- AddForeignKey
ALTER TABLE "FormularioReuniao" ADD CONSTRAINT "FormularioReuniao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormularioCoworking" ADD CONSTRAINT "FormularioCoworking_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormularioReuniaoToParticipante" ADD CONSTRAINT "_FormularioReuniaoToParticipante_A_fkey" FOREIGN KEY ("A") REFERENCES "FormularioReuniao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FormularioReuniaoToParticipante" ADD CONSTRAINT "_FormularioReuniaoToParticipante_B_fkey" FOREIGN KEY ("B") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
