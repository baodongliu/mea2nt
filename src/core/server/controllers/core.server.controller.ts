import * as config from '../../../../config/config';

function render (req, res) {
  /*
  if (req.sessio.lastVisit !== undefined) {
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();
  */
  res.sendFile(config.INDEX_FILE);

}

export {render};
