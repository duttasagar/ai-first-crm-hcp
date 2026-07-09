import {
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function OutcomeSection({
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
        Outcomes
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Outcomes"
        name="outcomes"
        value={formData.outcomes}
        onChange={(e) =>
          setFormData({
            ...formData,
            outcomes: e.target.value,
          })
        }
      />
    </Box>
  );
}