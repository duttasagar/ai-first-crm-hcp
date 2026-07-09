import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "#ffffff",
        color: "#1f2937",
      }}
    >
      <Toolbar>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
          }}
        >
          AI First CRM
        </Typography>

      </Toolbar>
    </AppBar>
  );
}