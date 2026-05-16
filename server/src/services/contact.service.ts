import { getDb } from '../db';
import { ContactMessage } from '../types';

export class ContactService {
  async saveMessage(data: ContactMessage) {
    const db = await getDb();
    await db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [
      data.name,
      data.email,
      data.message,
    ]);
  }

  async getAllMessages() {
    const db = await getDb();
    return await db.all('SELECT * FROM contacts ORDER BY created_at DESC');
  }
}

export const contactService = new ContactService();
