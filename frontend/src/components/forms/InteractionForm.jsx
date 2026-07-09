import { useState } from "react";
import axios from "axios";

import BasicInformation from "./BasicInformation";
import MaterialSection from "./MaterialSection";
import SampleSection from "./SampleSection";
import SentimentSection from "./SentimentSection";
import OutcomeSection from "./OutcomeSection";
import FollowupSection from "./FollowupSection";

import { Button, Stack } from "@mui/material";

export default function InteractionForm({
    formData,
    setFormData
}) {


  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/interaction/",
        formData
      );

      console.log(response.data);

      alert("Interaction Saved Successfully");

      setFormData({
        hcp_name: "",
        interaction_type: "Meeting",
        interaction_date: "",
        interaction_time: "",
        attendees: "",
        topics_discussed: "",
        materials_shared: "",
        samples_distributed: "",
        sentiment: "Positive",
        outcomes: "",
        followup_actions: "",
        ai_summary: "",
      });
    } catch (error) {
      console.log(error.response?.data);
      alert("Something went wrong");
    }
  };

  return (
    <Stack spacing={3}>
      <BasicInformation
        formData={formData}
        setFormData={setFormData}
        
      />

      <MaterialSection
        formData={formData}
        setFormData={setFormData}
      />

      <SampleSection
        formData={formData}
        setFormData={setFormData}
      />

      <SentimentSection
        formData={formData}
        setFormData={setFormData}
      />

      <OutcomeSection
        formData={formData}
        setFormData={setFormData}
      />

      <FollowupSection
        formData={formData}
        setFormData={setFormData}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
      >
        Save Interaction
      </Button>
    </Stack>
  );
}