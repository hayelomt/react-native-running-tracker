require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;

// Start App
(async () => {
  const appInstance = await app();

  appInstance.listen(port, () => console.log(`🔥 >>: ${port}`.red.bold));
})();
