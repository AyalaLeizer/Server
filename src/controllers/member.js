import Member from '../models/member.js';

export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json({ message: "Members fetched successfully", data: members });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addMember = async (req, res) => {
    const { name, email, city } = req.body;
    try {
        const member = await Member.create({ name, email, city });
        res.status(201).json({ message: "Member added successfully", member });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const editMember = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const member = await Member.findByIdAndUpdate(id, updates, { new: true });
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.status(200).json({ message: "Member updated successfully", member });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMember = async (req, res) => {
    const { id } = req.params;
    try {
        const member = await Member.findByIdAndDelete(id);
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.status(200).json({ message: "Member deleted successfully", member });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        const member = await Member.findById(id);
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.status(200).json({ message: "Member fetched successfully", member });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
