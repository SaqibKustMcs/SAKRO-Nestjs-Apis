/**
 * One-time admin user seed script.
 * Run: node scripts/seed-admin.js
 *
 * Creates admin@jhamat.com / Admin@123 if it doesn't already exist.
 */

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  console.error('❌  MONGODB_URI not set in .env');
  process.exit(1);
}

const ADMIN_EMAIL    = 'admin@jhamat.com';
const ADMIN_PASSWORD = 'Admin@123';
const ADMIN_NAME     = 'Super Admin';

const UserSchema = new mongoose.Schema(
  {
    _id:             { type: String },
    email:           { type: String },
    password:        { type: String },
    name:            { type: String },
    fullName:        { type: String },
    userRole:        { type: String },
    userStatus:      { type: String },
    userLevel:       { type: String },
    isEmailVerified: { type: Boolean },
    isDeleted:       { type: Boolean },
    pic:             { type: String },
    profilePic:      { type: String },
  },
  { strict: false },
);

async function seed() {
  console.log('🔌  Connecting to MongoDB…');
  await mongoose.connect(MONGO_URI);
  console.log('✅  Connected');

  const User = mongoose.model('User', UserSchema, 'users');

  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    console.log(`ℹ️   Admin already exists (id: ${existing._id})`);
    console.log(`     Email:    ${ADMIN_EMAIL}`);
    console.log(`     Role:     ${existing.userRole}`);
    console.log(`     Verified: ${existing.isEmailVerified}`);

    if (existing.userRole !== 'admin' || !existing.isEmailVerified) {
      console.log('⚠️   Fixing role / verified flag…');
      await User.updateOne(
        { _id: existing._id },
        { $set: { userRole: 'admin', isEmailVerified: true, isDeleted: false } },
      );
      console.log('✅  Fixed!');
    }
  } else {
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
    const id = new mongoose.Types.ObjectId().toHexString();

    await User.create({
      _id:             id,
      email:           ADMIN_EMAIL,
      password:        hashed,
      name:            ADMIN_NAME,
      fullName:        ADMIN_NAME,
      userRole:        'admin',
      userStatus:      'active',
      userLevel:       'expert',
      isEmailVerified: true,
      isDeleted:       false,
      pic:             '',
      profilePic:      '',
    });

    console.log('🎉  Admin user created!');
    console.log(`     Email:    ${ADMIN_EMAIL}`);
    console.log(`     Password: ${ADMIN_PASSWORD}`);
  }

  await mongoose.disconnect();
  console.log('🔌  Disconnected. Done.');
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err.message);
  process.exit(1);
});
