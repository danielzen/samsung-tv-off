const SamsungRemote = require('samsung-remote');

const remote = new SamsungRemote({
  ip: '192.168.11.34' // required: IP address of your Samsung Smart TV
});

remote.send('KEY_POWEROFF', function callback(err) {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Turned TV OFF');
  }
});
