// Update a Contact
const updateContact = async (id, updatedData) => {
  const query = `UPDATE contacts SET name = ?, address = ?, email = ?, phone = ? WHERE id = ?`;
  const { name, address, email, phone } = updatedData;
  const [result] = await db.execute(query, [name, address, email, phone, id]);
  return result;
};

// Delete a Contact
const deleteContact = async (id, userId) => {
  const query = `DELETE FROM contacts WHERE id = ? AND postedBy = ?`;
  const [result] = await db.execute(query, [id, userId]);
  return result;
};
