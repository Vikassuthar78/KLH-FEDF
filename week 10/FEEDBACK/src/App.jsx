import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback } from "./slice/feedbackSlice";
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Alert,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Rating,
} from "@mui/material";
import {
  Star as StarIcon,
  Send as SendIcon,
  Feedback as FeedbackIcon,
} from "@mui/icons-material";

function App() {
  const dispatch = useDispatch();
  const feedbackEntries = useSelector((state) => state.feedback.entries);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please select a star rating before submitting!");
      return;
    }
    dispatch(addFeedback({ rating, comment }));
    setRating(0);
    setComment("");
    setError("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #f5f7fa, #ffffff)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          ⭐️ Feedback Form
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mt: 3,
          }}
        >
          {/* 🌟 Star Rating Only */}
          <Rating
            name="rating"
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            size="large"
            precision={1}
            icon={<StarIcon fontSize="inherit" color="warning" />}
            emptyIcon={<StarIcon fontSize="inherit" sx={{ opacity: 0.3 }} />}
          />

          <TextField
            label="Add a comment (optional)"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          {error && <Alert severity="error">{error}</Alert>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={{ py: 1.2, px: 4, mt: 1, borderRadius: 2, fontWeight: "bold" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* 📋 Feedback List */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Submitted Feedback
        </Typography>

        {feedbackEntries.length === 0 ? (
          <Typography color="text.secondary">
            No feedback submitted yet.
          </Typography>
        ) : (
          <List sx={{ mt: 1 }}>
            {feedbackEntries.map((entry, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      <FeedbackIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Rating
                        name={`read-only-${index}`}
                        value={parseInt(entry.rating)}
                        readOnly
                        size="small"
                      />
                    }
                    secondary={
                      entry.comment ? entry.comment : "No comment provided."
                    }
                  />
                </ListItem>
                {index < feedbackEntries.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
}

export default App;