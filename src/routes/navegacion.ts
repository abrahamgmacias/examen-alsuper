import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
    return res.status(200).send({
        message: "¡Hola! Esta es la página de inicio."
    });
});

router.get("/about", async (req, res) => {
    return res.status(200).send({
        message: "Bienvenido a la página 'Acerca de nosotros'."
    });
});

router.get("/contact", async (req, res) => {
    return res.status(200).send({
        message: 'Ponte en contacto con nosotros en "contact@example.com."'        
    });
});

export default router;