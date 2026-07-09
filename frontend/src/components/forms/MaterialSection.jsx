import {
  Box,
  Typography,
  TextField,
} from "@mui/material";

export default function MaterialSection({
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
        Materials Shared
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Materials Shared"
        name="materials_shared"
        value={formData.materials_shared}
        onChange={(e) =>
          setFormData({
            ...formData,
            materials_shared: e.target.value,
          })
        }
      />
    </Box>
  );
}