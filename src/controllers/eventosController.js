import Evento from '../models/evento.js';

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEvento();
      return res.status(200).json(resultado);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventosController;
