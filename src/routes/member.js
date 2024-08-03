import express from 'express';
import { getAllMembers, addMember, editMember, deleteMember, getMemberById } from '../controllers/member.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getAllMembers);
router.post('/', auth, addMember);
router.put('/:id', auth, editMember);
router.delete('/:id', auth, deleteMember);
router.get('/:id', auth, getMemberById);

export default router;
