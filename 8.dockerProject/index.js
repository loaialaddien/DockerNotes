const express = require('express');
const app = express();

const redis = require('redis');


const client = redis.createClient({
  host:"redis-server" //the name of the redis service, since we are using a docker-compose
  ,port:6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
