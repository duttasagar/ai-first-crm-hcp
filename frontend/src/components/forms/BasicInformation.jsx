
import {
  Grid,
  TextField,
  Typography,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";

import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";


const interactionTypes = [
  "Meeting",
  "Call",
  "Email",
  "Conference",
  "Hospital Visit",
];

export default function BasicInformation({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={700}>
        Log HCP Interaction
      </Typography>

      <Typography variant="subtitle1" fontWeight={600}>
        Interaction Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={24}>

          <TextField
            fullWidth
            label="HCP Name"
            name="hcp_name"
            value={formData.hcp_name}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Interaction Type"
            name="interaction_type"
            value={formData.interaction_type}
            onChange={handleChange}
          >
            {interactionTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            name="interaction_date"
            value={formData.interaction_date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="time"
            label="Time"
            name="interaction_time"
            value={formData.interaction_time}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="Attendees"
        name="attendees"
        value={formData.attendees}
        onChange={handleChange}
      />

      <TextField
        multiline
        rows={4}
        fullWidth
        label="Topics Discussed"
        name="topics_discussed"
        value={formData.topics_discussed}
        onChange={handleChange}
      />

      <Button startIcon={<KeyboardVoiceOutlinedIcon />} variant="text">
        Summarize from Voice Note
      </Button>
    </Stack>
  );
}
