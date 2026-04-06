"use client";

import { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.message.value;

    setMessages([
      ...messages,
      { user: input, bot: "This is demo AI response." }
    ]);

    e.target.reset();
  };

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>
          <p><b>You:</b> {msg.user}</p>
          <p><b>AI:</b> {msg.bot}</p>
        </div>
      ))}

      <form onSubmit={handleSend}>
        <input
          name="message"
          placeholder="Ask something..."
          style={{ width: "100%", padding: 10, marginTop: 10 }}
        />
      </form>
    </div>
  );
}
