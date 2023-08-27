import "./Template.css";
import React from "react";
import MorevertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

import blank from "../../images/forms-blank-googlecolors.png";
import party from "../../images/partyInvite.png";
import contact from "../../images/contactInformation.png";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Template = () => {
  const navigate = useNavigate();
  async function createForm() {
    const question_list= [
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]
    const response = await axios.post(`https://form-clone-e5252-default-rtdb.firebaseio.com/add_question.json`,
    {
      document_name: "Untitle_form",
      doc_desc: "Add Description",
      questions: question_list,
    });
    const firebaseId = response.data.name;

      navigate("/form/" + firebaseId);
  }
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "15px", color: "#202124" }}>
            Start a new form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon fontSize="small" />
          </div>
          <IconButton>
            <MorevertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="blank" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={party} alt="party" className="card_image" />
          <p className="card_title">Party Invite</p>
        </div>
        <div className="card">
          <img src={contact} alt="contact" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
      </div>
    </div>
  );
};

export default Template;
