const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  return res.send({
    id,
    nombre: 'Algo',
  });
});

router.get('/', (req, res) => {
  return res.send([{
    id: 1,
    nombre: 'Algo',
  }]);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return res.send({
    id,
    ...body,
  });
});

router.post('/', (req, res) => {
  const { body } = req;

  return res.send({
    id: 0,
    ...body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  return res.send({ status: 1, id });
});

module.exports = router;