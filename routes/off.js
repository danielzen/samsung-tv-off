const SamsungRemote = require("samsung-remote");
const config = require("config");

const remote = new SamsungRemote({
  ip: process.env.IP || config.get('ip') // required: IP address of your Samsung Smart TV
});

const turnOffTV = () => {
  remote.send("KEY_POWEROFF", function callback(err) {
    if (err) {
      throw new Error(err);
    } else {
      console.log("Turned TV OFF");
    }
  });
};

module.exports = function(app) {
  app.post("/off", (req, res) => {
    if (req.body.secret && req.body.secret === config.get('secret')) {
      turnOffTV();
      res.send("TV off");
    } else {
      res.send("Not authenticated");
    }
  });
};
