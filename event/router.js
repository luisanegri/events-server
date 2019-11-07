const { Router } = require('express');
const Event = require('./model');
const router = new Router();

router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(events => res.send(events))
    .catch(error => next(error));
});

router.get('/event', (req, res, next) => {
  Event.findAll()
    .then(events => res.send(events))
    .catch(error => next(error));
});

router.get('/event/:eventId', (req, res, next) => {
  Event.findByPk(req.params.eventId)
    .then(event => res.send(event))
    .catch(error => next(error));
});

router.put('/event/:eventId', (req, res, next) => {
  Event.findByPk(req.params.eventId)
    // pass the request body to event.update
    .then(event => event.update(req.body))
    //send the updated event as the response
    .then(event => res.send(event))
    .catch(error => next(error));
});

router.delete('/event/:eventId', (req, res, next) => {
  // pass the event id to where object
  Event.destroy({ where: { id: req.params.eventId } })
    .then(number => res.send({ number }))
    .catch(error => next(error));
});
module.exports = router;
