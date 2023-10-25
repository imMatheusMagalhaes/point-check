import express from 'express';
import authService from "../services/auth_service"

var router = express.Router();

router.post('/sign-in', async (req, res, next) => {
  const response = await authService.sign_in(req.body)
  return res.status(response.status).send(response);
});

router.post('/sign-up', async (req, res, next) => {
  const response = await authService.sign_up(req.body)
  return res.status(response.status).send(response);
});

export default router;
