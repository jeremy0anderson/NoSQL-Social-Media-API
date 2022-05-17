const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/social_media_api', {
    useUnifiedTopology: true,
});
module.exports = mongoose.connection;