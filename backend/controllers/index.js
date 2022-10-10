exports.getAllIndex = (req, res, next)=>{
    console.log(req.body);
    res.send('Voici les elements listes');
    next();
};

exports.createIndex =  (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet enfin créé !'
    });
  };