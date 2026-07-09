import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {

    setInteraction(state, action) {

      return {
        ...state,
        ...action.payload
      }

    }

  }

})

export const { setInteraction } =
interactionSlice.actions

export default interactionSlice.reducer