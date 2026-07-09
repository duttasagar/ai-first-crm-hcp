import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Box, Typography, Divider } from "@mui/material";

import "./../../styles/chat.css";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import { setInteraction } from "../../redux/interactionSlice";

export default function ChatPanel({
  formData,
  setFormData,
  interactionId,
  setInteractionId,
}) {
  const dispatch = useDispatch();

  // Store extracted interaction before saving
  const [pendingInteraction, setPendingInteraction] = useState(null);

  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "Hello! Tell me about today's HCP interaction and I'll summarize it.",
    },
  ]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: text,
      },
    ]);

    /*
      CONFIRM SAVE FLOW
      User says Yes / Save
    */
    if (
      pendingInteraction &&
      (text.toLowerCase().includes("yes") ||
        text.toLowerCase().includes("save"))
    ) {
      try {
        const saveResponse = await axios.post(
          "http://127.0.0.1:8000/interaction/",
          pendingInteraction,
        );

        setInteractionId(saveResponse.data.id);

        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            message: "Interaction saved successfully.",
          },
        ]);

        setPendingInteraction(null);

        return;
      } catch (error) {
        console.log(error);

        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            message: "Failed to save interaction.",
          },
        ]);

        return;
      }
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat/", {
        message: text,
        interaction: formData,
      });

      console.log(response.data);

      /*
        SEARCH RESULT
      */
      if (response.data.type === "search") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            searchResults: response.data.results,
          },
        ]);

        return;
      }

      if (response.data.type === "followup") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            message: response.data.followups,
          },
        ]);

        return;
      }

      if (response.data.type === "insight") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "assistant",
            message: response.data.insights,
          },
        ]);
        
        return;
      }
      /*
        EXTRACT RESULT
      */

      setFormData((prev) => ({
        ...prev,
        ...response.data.interaction,
      }));

      dispatch(setInteraction(response.data.interaction));

      // Save temporarily
      setPendingInteraction(response.data.interaction);

      // Ask confirmation

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: `${
            response.data.interaction.ai_summary ||
            "Interaction details extracted."
          }

          \n\nDo you want to save this interaction?`,
        },
      ]);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: "Unable to process your request.",
        },
      ]);
    }
  };

  return (
    <Box className="chat-panel">
      {/* Header */}

      <Box className="chat-header">
        <Typography variant="h6" fontWeight={700}>
          AI Assistant
        </Typography>

        <Typography className="chat-subtitle">
          Log interactions using natural language.
        </Typography>

        <Typography className="chat-status">AI Connected</Typography>
      </Box>

      <Divider />

      {/* Messages */}

      <Box className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            message={msg.message}
            searchResults={msg.searchResults}
            followups={msg.followups}
          />
        ))}
      </Box>

      {/* Input */}

      <ChatInput onSend={handleSend} />
    </Box>
  );
}

// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { Box, Typography, Divider } from "@mui/material";

// import "./../../styles/chat.css";

// import ChatMessage from "./ChatMessage";
// import ChatInput from "./ChatInput";

// import { setInteraction } from "../../redux/interactionSlice";

// export default function ChatPanel({
//   formData,
//   setFormData,
//   interactionId,
//   setInteractionId,
// }) {
//   const dispatch = useDispatch();
// const [pendingInteraction, setPendingInteraction] = useState(null);
//   const [messages, setMessages] = useState([
//     {
//       sender: "assistant",
//       message:
//         "Hello! Tell me about today's HCP interaction and I'll summarize it.",
//     },
//   ]);

//   const handleSend = async (text) => {
//     if (!text.trim()) return;

//     // Show user message
//     setMessages((prev) => [
//       ...prev,
//       {
//         sender: "user",
//         message: text,
//       },
//     ]);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/chat/", {
//         message: text,
//         interaction: formData,
//       });
//       console.log(response.data);

//       if (response.data.type === "search") {
//         setMessages((prev) => [
//           ...prev,
//           {
//             sender: "assistant",
//             searchResults: response.data.results,
//           },
//         ]);

//         return;
//       }

//       setFormData((prev) => ({
//         ...prev,
//         ...response.data.interaction,
//       })); // Save AI extracted data into Redux

//       dispatch(setInteraction(response.data.interaction));

//       // await axios.post("http://127.0.0.1:8000/interaction/", response.data);

//       if (!interactionId) {
//         const saveResponse = await axios.post(
//           "http://127.0.0.1:8000/interaction/",
//           response.data.interaction,
//         );

//         setInteractionId(saveResponse.data.id);

//         console.log("Draft Created:", saveResponse.data.id);
//       } else {
//         await axios.put(
//           `http://127.0.0.1:8000/interaction/${interactionId}`,
//           response.data.interaction,
//         );

//         console.log("Draft Updated:", interactionId);
//       }

//       // Show AI summary in chat
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "assistant",
//           message:
//             response.data.interaction.ai_summary || "Interaction extracted successfully.",
//         },
//       ]);
//     } catch (error) {
//       console.log(error);
//       console.log(error.response);
//       console.log(error.response?.data);

//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "assistant",
//           message: "Unable to process your request.",
//         },
//       ]);
//     }
//     //  catch (error) {
//     //   console.error(error);

//     //   setMessages((prev) => [
//     //     ...prev,
//     //     {
//     //       sender: "assistant",
//     //       message: "Unable to process your request.",
//     //     },
//     //   ]);
//     // }
//   };

//   return (
//     <Box className="chat-panel">
//       {/* Header */}
//       <Box className="chat-header">
//         <Typography variant="h6" fontWeight={700}>
//           AI Assistant
//         </Typography>

//         <Typography className="chat-subtitle">
//           Log interactions using natural language.
//         </Typography>

//         <Typography className="chat-status">AI Connected</Typography>
//       </Box>

//       <Divider />

//       {/* Chat Messages */}
//       <Box className="chat-messages">
//         {messages.map((msg, index) => (

//           <ChatMessage
//             key={index}
//             sender={msg.sender}
//             message={msg.message}
//             searchResults={msg.searchResults}

//            />
//         ))}
//       </Box>

//       {/* Chat Input */}
//       <ChatInput onSend={handleSend} />
//     </Box>
//   );
// }
