Samsung TV Off
==============

A simple Express API to turn off my Samsung TV. Planning to trigger from various places including Google Home via IFTTT

Uses:
* [samsung-remote](https://github.com/natalan/samsung-remote) which works with my TV
* express
* config
* body-parser

`config/default.json` contains the ip address and port the server will run on as well as the `secret` that must be sent to the `/off` 
endpoint  so that the server considers the request valid
