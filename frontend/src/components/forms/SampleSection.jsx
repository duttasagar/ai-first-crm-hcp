import {
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function SampleSection({
  formData,
  setFormData,
}) {
  return (
    <Box
      sx={{
        mt: 3,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={600}
        mb={2}
      >
        Samples Distributed
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Samples Distributed"
        name="samples_distributed"
        value={formData.samples_distributed}
        onChange={(e) =>
          setFormData({
            ...formData,
            samples_distributed: e.target.value,
          })
        }
      />
    </Box>
  );
}