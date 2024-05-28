const { PrismaClient } = require('@prisma/client')
const NotFoundError = require('../errors/NotFoundError');

const prisma = new PrismaClient();

const getAllServants = async (req, res, next) => {
    try {
        const allServants = await prisma.servant.findMany({
            include: {
                illustrator: true,
            },
        });

        return res.status(200).json({
            message: 'Success',
            data: allServants,
        });
    } catch (error) {
        return next(error);
    }
};

const getServantById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const servant = await prisma.servant.findUnique({
            where: {
                id: id, 
            },
            include: {
                illustrator: true,
            },
        });

        if (!servant) {
            throw new NotFoundError('Servant tidak ditemukan');
        }

        return res.status(200).json({
            message: 'Success',
            data: servant,
        });
    } catch (error) {
        return next(error);
    }
};

const addServant = async (req, res, next) => {
    console.log(req.body);
    try {
        const servant = req.body;

        const newServant = await prisma.servant.create({
            data: servant,
        });

        return res.status(201).json({
            message: 'Servant berhasil ditambahakan',
            data: newServant,
        });
    } catch (error) {
        return next(error);
    }
};

const addIllustrator = async (req, res, next) => {
    console.log(req.body);
    try {
        const Illustrator = req.body;

        const newIllustrator = await prisma.illustrator.create({
            data: Illustrator,
        });

        return res.status(201).json({
            message: 'Illustrator berhasil ditambahakan',
            data: newIllustrator,
        });
    } catch (error) {
        return next(error);
    }
};

const updateServant = async (req, res, next) => {
    try {
        const servant = req.body;

        const { id } = req.params;

        const findservant = await prisma.servant.findUnique({
            where: {
                id: id,
            },
            include: {
                illustrator: true,
            },
        });

        if (!findservant) {
            throw new NotFoundError('Servant tidak ditemukan');
        }

        const updateservant = await prisma.servant.update({
            where: {
                id: id,
            },
            data: servant,
        });

        return res.status(201).json({
            message: 'Data servant berhasil diubah',
            data: updateservant,
        });
    } catch (error) {
        return next(error);
    }
};

const deleteServant = async (req, res, next) => {
    try {

        const { id } = req.params;
        const findservant = await prisma.servant.findUnique({
            where: {
                id: parseInt(id, 10),
            },
            include: {
                illustrator: true,
            },
        });

        if (!findservant) {
            return res.status(404).json({ 
                message: "Servant tidak ditemukan" 
            });
        };
            
        await prisma.servant.delete({
            where: {
                id: parseInt(id, 10),
            },
            include: {
                illustrator: true,
            },
        });
        
        return res.status(200).json({ 
            message: "Servant berhasil dihapus" 
        });
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getAllServants,
    getServantById,
    addServant,
    addIllustrator,
    updateServant,
    deleteServant,
};