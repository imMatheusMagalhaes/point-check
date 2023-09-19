import express from 'express';
import pointService from "../services/point_service"
var router = express.Router();

router.post('/input', async (req, res, next) => {
  const point = await pointService.set_input(req.body)
  res.send(point);
});

router.post('/output', async (req, res, next) => {
  const point = await pointService.set_output(req.body)
  res.send(point);
});

router.get('/', async (req, res, next) => {
  const points = await pointService.get_all()
  res.send(points);
});

router.put('/', async (req, res, next) => {
  const points = await pointService.update_projects(req.body)
  res.send(points);
});

export default router;
