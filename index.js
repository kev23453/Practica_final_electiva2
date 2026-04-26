const express = require('express');

function createApp() {
  const app = express();
  
  app.get('/', (req, res) => {
    res.json({ 
      message: 'Hola Mundo desde Express! CI/CD working',
      timestamp: new Date().toISOString()
    });
  });

  app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = { createApp, express };