const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb+srv://docteurparlemoi_db_user:Proverbe%3A17%3F@docteurparlemoi086.gkgdw45.mongodb.net/?retryWrites=true&w=majority')
  .then(async () => {
    console.log('✅ MongoDB connected');

    const admin = {
      email: 'defaokalonji086@gmail.com',
      name: 'Admin Principal',
      password: 'Proverbe:17?',
      role: 'admin'
    };

    const hashedPassword = await bcrypt.hash(admin.password, 12);
    
    const user = new mongoose.model('User', new mongoose.Schema({
      email: String,
      password: String,
      name: String,
      role: String
    }))({ ...admin, password: hashedPassword });

    await user.save();
    console.log('✅ Admin créé:', admin.email);
    mongoose.disconnect();
  })
  .catch(err => console.error('❌ Error:', err));

