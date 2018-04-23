const SamsungRemote         = require('samsung-remote');

const remote = new SamsungRemote({
  ip: '192.168.11.34' // required: IP address of your Samsung Smart TV
});

const turnOffTV = () => {
  remote.send('KEY_POWEROFF', function callback(err) {
    if (err) {
      throw new Error(err);
    } else {
      console.log('Turned TV OFF');
    }
  });
};

module.exports = function(app) {
  app.post('/off', (req, res) => {
    if (req.body.auth && req.body.auth === 'sesame') {
      turnOffTV();
      res.send('TV off');
    } else {
      res.send('Not authenticated');
    }
  });
};
