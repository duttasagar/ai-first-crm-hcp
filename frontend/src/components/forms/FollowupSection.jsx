import {
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function FollowupSection({
  formData,
  setFormData,
}) {
  return (
    <Box mt={3}>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        mb={1}
      >
        Follow-up Actions
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Follow-up Actions"
        name="followup_actions"
        value={formData.followup_actions}
        onChange={(e) =>
          setFormData({
            ...formData,
            followup_actions: e.target.value,
          })
        }
      />

      <Typography
        mt={3}
        color="primary"
        fontWeight={600}
      >
        AI Suggested Follow-ups
      </Typography>

      <ul>
        <li>Schedule follow-up meeting in 2 weeks</li>
        <li>Send Product X brochure</li>
        <li>Add doctor to webinar invitation list</li>
      </ul>
    </Box>
  );
}