import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oABbQEOID5njzCOHgEfME6AAAF9eAlB9r9Xt6v~tplv-tej9nj120t-origin.webp',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;