import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export default function SentimentSection({
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
        Observed / Inferred HCP Sentiment
      </Typography>

      <RadioGroup
        row
        name="sentiment"
        value={formData.sentiment}
        onChange={(e) =>
          setFormData({
            ...formData,
            sentiment: e.target.value,
          })
        }
      >
        <FormControlLabel
          value="Positive"
          control={<Radio color="success" />}
          label="Positive"
        />

        <FormControlLabel
          value="Neutral"
          control={<Radio color="warning" />}
          label="Neutral"
        />

        <FormControlLabel
          value="Negative"
          control={<Radio color="error" />}
          label="Negative"
        />
      </RadioGroup>
    </Box>
  );
}