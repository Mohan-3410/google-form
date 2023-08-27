import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { utils as XLSXUtils, write as writeXLSX } from 'xlsx';
import { saveAs } from 'file-saver';


// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';

// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./user_form.css";
import { useStateValue } from "../../store/StateProvider";

import axios from "axios";
function Userform() {
  var quest = [];
  var post_answer = [];
  // var history = useHistory()
  var navigate = useNavigate();
  var [answer, setAnswer] = useState([]);
  var [{ questions, doc_name, doc_desc }, dispatch] = useStateValue();

  function select(que, option) {
    var k = answer.findIndex((ele) => ele.question === que);

    answer[k].answer = option;
    setAnswer(answer);
  }

  useEffect(() => {
    questions.map((q) => {
      return answer.push({
        question: q.questionText,
        answer: " ",
      });
    });
    questions.map((q, qindex) => {
      return quest.push({ header: q.questionText, key: q.questionText });
    });
  }, []);

  var post_answer_data = {};

  function selectinput(que, option) {
    var k = answer.findIndex((ele) => ele.question === que);

    answer[k].answer = option;
    setAnswer(answer);
    console.log(answer);
  }

  function selectcheck(e, que, option) {
    var d = [];
    var k = answer.findIndex((ele) => ele.question === que);
    if (answer[k].answer) {
      d = answer[k].answer.split(",");
    }
    if (e === true) {
      d.push(option);
    } else {
      var n = d.findIndex((el) => el.option === option);
      d.splice(n, 1);
    }
    answer[k].answer = d.join(",");
    setAnswer(answer);
  }
  function exportToExcel() {
    const excelData = answer.map((response) => ({
      Question: response.question,
      Answer: response.answer,
    }));
  
    const ws = XLSXUtils.json_to_sheet(excelData);
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Form Responses');
  
    const blob = new Blob([writeXLSX(wb, { bookType: 'xlsx', type: 'buffer' })], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
  
    saveAs(blob, 'form_responses.xlsx');
  }
  
  

  function submit() {
    answer.map((ele) => {
      return (post_answer_data[ele.question] = ele.answer);
    });

    // axios.post(`http://localhost:9000/student_response/${doc_name}`, 
    axios.post(`https://form-clone-e5252-default-rtdb.firebaseio.com/student_response.json`,
    {
      column: quest,
      answer_data: [post_answer_data],
    });

    exportToExcel();

    navigate(`/submitted`);
  }
  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography style={{ fontSize: "26px" }}>{doc_name}</Typography>
            <Typography style={{ fontSize: "15px" }}>{doc_desc}</Typography>
          </div>

          {questions.map((question, qindex) => (
            <div className="user_form_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {qindex + 1}. {question.questionText}
              </Typography>
              {question.options.map((ques, index) => (
                <div key={index} style={{ marginBottom: "5px" }}>
                  <div style={{ display: "flex" }}>
                    <div className="form-check">
                      {question.questionType !== "radio" ? (
                        question.questionType !== "text" ? (
                          <label>
                            <input
                              type={question.questionType}
                              name={qindex}
                              value={ques.optionText}
                              className="form-check-input"
                              required={question.required}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              onChange={(e) => {
                                selectcheck(
                                  e.target.checked,
                                  question.questionText,
                                  ques.optionText
                                );
                              }}
                            />{" "}
                            {ques.optionText}
                          </label>
                        ) : (
                          <label>
                            <input
                              type={question.questionType}
                              name={qindex}
                              value={ques.optionText}
                              className="form-check-input"
                              required={question.required}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              onChange={(e) => {
                                selectinput(
                                  question.questionText,
                                  e.target.value
                                );
                              }}
                            />{" "}
                            {ques.optionText}
                          </label>
                        )
                      ) : (
                        <label>
                          <input
                            type={question.questionType}
                            name={qindex}
                            value={ques.optionText}
                            className="form-check-input"
                            required={question.required}
                            style={{ margnLeft: "5px", marginRight: "5px" }}
                            onChange={() => {
                              select(question.questionText, ques.optionText);
                            }}
                          />
                          {ques.optionText}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="user_form_submit">
            <Button
              variant="contained"
              color="primary"
              onClick={submit}
              style={{ fontSize: "14px" }}
            >
              Submit
            </Button>
            
          </div>

          <div className="user_footer">Google Forms</div>
        </div>
      </div>
    </div>
  );
}

export default Userform;
