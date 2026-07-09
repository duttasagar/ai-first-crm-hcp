import { Box, Typography } from "@mui/material";

export default function ChatMessage({
  sender,
  message,
  searchResults,
  followups,
}) {

  // Search Result UI
  if (searchResults) {

    if (searchResults.length === 0) {
      return (
        <Typography>
          No interactions found.
        </Typography>
      );
    }

    return (
      <Box>
        <Typography fontWeight="bold">
          Search Results
        </Typography>

        {searchResults.map((item) => (
          <Box key={item.id}>
            <Typography>
              <b>Doctor:</b> {item.hcp_name}
            </Typography>
            <Typography>
              <b>Summary:</b> {item.ai_summary}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }


  // Follow-up UI
  if (followups) {

    const actions = followups
      .split("*")
      .filter(item => item.trim());


    return (
      <Box>

        <Typography fontWeight="bold" mb={1}>
          Suggested Follow-up Actions
        </Typography>


        {actions.map((action, index)=>(
          <Typography key={index} sx={{mb:1}}>
            • {action.trim()}
          </Typography>
        ))}

      </Box>
    );
  }


  // Normal message
  return (
    <Box>
      <Typography>
        {message}
      </Typography>
    </Box>
  );
}






















// import { Box, Typography } from "@mui/material";

// export default function ChatMessage({
//   sender,
//   message,
//   searchResults,
// }) {

//   // Search Result UI
//   if (searchResults) {

//     if (searchResults.length === 0) {
//       return (
//         <Typography>
//           No interactions found.
//         </Typography>
//       );
//     }

//     return (
//       <Box>
//         <Typography fontWeight="bold">
//           Search Results
//         </Typography>

//         {searchResults.map((item) => (
//           <Box
//             key={item.id}
//             sx={{
//               border: "1px solid #ddd",
//               p: 1,
//               mb: 1,
//               borderRadius: 2,
//             }}
//           >
//  <Typography>
//             <b>Doctor:</b> {item.hcp_name}
//         </Typography>

//         <Typography>
//             <b>Date:</b> {item.interaction_date}
//         </Typography>

//         <Typography>
//             <b>Time:</b> {item.interaction_time || "N/A"}
//         </Typography>

//         <Typography>
//             <b>Interaction Type:</b> {item.interaction_type || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Attendees:</b> {item.attendees || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Topics Discussed:</b> {item.topics_discussed || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Materials Shared:</b> {item.materials_shared || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Samples Distributed:</b> {item.samples_distributed || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Sentiment:</b> {item.sentiment || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Outcome:</b> {item.outcomes || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Follow Up:</b> {item.followup_actions || "N/A"}
//         </Typography>


//         <Typography>
//             <b>Summary:</b> {item.ai_summary}
//         </Typography>          </Box>
//         ))}
//       </Box>
//     );
//   }

//   // Normal chat message
//   return (
//     <Box>
//       <Typography>{message}</Typography>
//     </Box>
//   );
// }




// import { Box, Typography } from "@mui/material";

// export default function ChatMessage({
//     sender,
//     message,
//     searchResults
// }) {

//     if (searchResults) {
//         return (
//             <Box>
//                 <Typography fontWeight="bold">
//                     Search Results
//                 </Typography>

//                 {searchResults.map((item) => (
//                     <Box
//                         key={item.id}
//                         sx={{
//                             border: "1px solid #ddd",
//                             p: 1,
//                             mb: 1
//                         }}
//                     >
//                         <Typography>
//                             <b>Doctor:</b> {item.hcp_name}
//                         </Typography>

//                         <Typography>
//                             <b>Date:</b> {item.interaction_date}
//                         </Typography>

//                         <Typography>
//                             <b>Summary:</b> {item.ai_summary}
//                         </Typography>
//                     </Box>
//                 ))}
//             </Box>
//         );
//     }

//     return (
//         <Box>
//             <Typography>{message}</Typography>
//         </Box>
//     );
// }













// import { Box, Paper, Typography } from "@mui/material";
// import "../../styles/chat.css";

// export default function ChatMessage({ sender, message }) {
//   const isUser = sender === "user";

//   return (
//     <Box className={`message-row ${isUser ? "user" : "ai"}`}>
//       <Paper className="message-bubble" elevation={1}>
//         <Typography variant="body2">
//           {message}
//         </Typography>
//       </Paper>
//     </Box>
//   );
// }