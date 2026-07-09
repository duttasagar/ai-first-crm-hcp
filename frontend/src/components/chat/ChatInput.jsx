import { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <Box
      display="flex"
      gap={1}
      p={2}
      borderTop="1px solid #e5e7eb"
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Describe your interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />

      <IconButton
        color="primary"
        onClick={handleSend}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}