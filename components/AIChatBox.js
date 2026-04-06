import { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    const input = e.target.message.value;

    setMessages([...messages, { user: input, bot: "This is demo AI response." }]);
    e.target.reset();
  };

  return (
    <div className="mt-4">
      <div className="space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div key={i}>
            <p><strong>You:</strong> {msg.user}</p>
            <p><strong>AI:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend}>
        <input
          name="message"
          className="border p-2 w-full rounded"
          placeholder="Ask something..."
        />
      </form>
    </div>
  );
}
