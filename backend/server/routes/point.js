import express from 'express';
import pointService from "../services/point_service"
import authService from "../services/auth_service"

var router = express.Router();

router.post('/input', authService.authorizer, async (req, res, next) => {
  const point = await pointService.set_input(req.body, req.headers)
  res.send(point);
});

router.post('/output', authService.authorizer, async (req, res, next) => {
  const point = await pointService.set_output(req.body, req.headers)
  res.send(point);
});

router.post('/create', authService.authorizer, async (req, res, next) => {
  const point = await pointService.create(req.body, req.headers)
  res.send(point);
});

router.get('/', authService.authorizer, async (req, res, next) => {
  const points = await pointService.get_all(req.headers)
  res.send(points);
});

router.put('/', authService.authorizer, async (req, res, next) => {
  const points = await pointService.update_projects(req.body, req.headers)
  res.send(points);
});

export default router;
