const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [ count ] = await connection('incidents').count("*");

    const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(5)
    .offset((page - 1) * 5 )
    .select(['incidents.*',
     'ongs.name', 
     'ongs.email', 
     'ongs.whatsapp', 
     'ongs.city', 
     'ongs.uf']);// como retornava todos os valores da ong e do incidents o banco acabou sobrepondo o id
      //da ong deixando um id so por isso aqui foi colocado para selecionar todos os casos e selecionados
      //um por um do que queria que retornasse da tabela ongs

    res.header('X-Total-Count', count['count(*)']) //passando o total pelo header(cabeçalho da aplicação)
    return res.json(incidents)
  },

  async create(req, res) {

    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    //transformei essa linha em uma const para pegar o id que sera gerado quando esses dados forem cadastrados no branco (retorna um array de uma posição)
    const[ id ] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });
    

    return res.json({ id });

  },

  async delete(req, res) {

    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents').where('id', id).select('ong_id').first();

    if (incidents.ong_id !== ong_id ) {
      return res.status(401).json( { error: 'Oparation not permited' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send('ok');
  }
}
