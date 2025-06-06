import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  },
  qualification: {
    type: String,
    required: [true, 'Qualification is required']
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required']
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume URL is required']
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Application', applicationSchema); 