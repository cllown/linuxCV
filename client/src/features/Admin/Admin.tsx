import { useState, useEffect } from "react";
import "./Admin.css";
import { API_BASE_URL } from "@/core/config/api";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/contacts`, {
        headers: {
          "x-admin-token": "secret_admin_123",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      setContacts(data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={fetchContacts} className="refresh-btn">
          Refresh
        </button>
      </div>

      <div className="admin-content">
        <h3>Contact Messages ({contacts.length})</h3>
        {isLoading ? (
          <div className="loading">Loading messages...</div>
        ) : (
          <div className="contacts-list">
            {contacts.map((contact) => (
              <div key={contact.id} className="contact-card">
                <div className="contact-card-header">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-email">{contact.email}</span>
                  <span className="contact-date">
                    {new Date(contact.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="contact-message">{contact.message}</div>
              </div>
            ))}
            {contacts.length === 0 && (
              <div className="empty">No messages yet.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
