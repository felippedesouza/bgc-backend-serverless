const dao = require('../dao/pedido_dao');

module.exports.deletar = async (event) => {
   const params = {
      TableName: 'Pedido',
      Key: {
         "numero_pedido": "00"
      }
   };

   const r = await dao.deletar(params)
   console.log(r)
   return
}