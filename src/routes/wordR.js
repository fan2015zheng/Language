import {
  addWord,
  findAllWords,
  findWordsByPage
} from '../controllers/wordC'

const routes = (app) => {
  //app.route('/word').post(addWord)

  //app.route('/words').get(findAllWords)
  
  app.route('/words/:page').get(findWordsByPage)

  // app.route('/word/:wordId')
  //   .put((req, res) => { res.send('PUT /word/:wordId') })
  //   .delete((req, res) => { res.send('DELETE /word/:wordId') })
}

export default routes