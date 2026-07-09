import { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import InteractionForm from "../../components/forms/InteractionForm";
import ChatPanel from "../../components/chat/ChatPanel";
import InteractionHistory from "../../components/history/InteractionHistory";

export default function LogInteraction() {
  const [interactionId, setInteractionId] = useState(null);
  const [formData, setFormData] = useState({
    hcp_name: "",
    interaction_type: "",
    interaction_date: "",
    interaction_time: "",
    attendees: "",
    topics_discussed: "",
    materials_shared: "",
    samples_distributed: "",
    sentiment: "",
    outcomes: "",
    followup_actions: "",
    ai_summary: "",
  });


  const startNewInteraction = () => {

  setInteractionId(null);

  setFormData({
    hcp_name: "",
    interaction_type: "",
    interaction_date: "",
    interaction_time: "",
    attendees: "",
    topics_discussed: "",
    materials_shared: "",
    samples_distributed: "",
    sentiment: "",
    outcomes: "",
    followup_actions: "",
    ai_summary: "",
  });

};

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 3,
        bgcolor: "#F5F7FB",
        minHeight: "100vh",
      }}
    >
      <Grid size={{ xs: 12, lg: 8 }}>
        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            p: 3,
            height: "100%",
          }}
        >
          <InteractionForm formData={formData} setFormData={setFormData} />

          <InteractionHistory />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            height: "100%",
          }}
        >
          <ChatPanel
            formData={formData}
            setFormData={setFormData}
            interactionId={interactionId}
            setInteractionId={setInteractionId}
          />
        </Paper>
      </Grid>

      <Button variant="outlined" onClick={startNewInteraction}>
        New Interaction
      </Button>
    </Grid>
  );
}
