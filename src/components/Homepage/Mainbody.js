import "./Mainbody.css";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import doc_image from "../../images/docs1.png";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const Mainbody = () => {
  // const id=useParams()
  const navigate = useNavigate();
  function navigate_to(docname){
    var fname = docname.split(".");
    navigate("/form/" + fname[0])
  }
  const [files, setFiles]= React.useState([]);

  async function filenames(){
    // var request = await axios.get("http://localhost:9000/get_all_filenames")
    var request = await axios.get(`https://form-clone-e5252-default-rtdb.firebaseio.com/add_question.json`)
    let filenames = request.data;
    const fileArray = Object.keys(filenames)
    
    setFiles(fileArray)
    
  }
  filenames();
  
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontsize: "16px", fontweight: "500" }}
        >
          Recent forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontsize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainbody_docs">
      {files.map((ele)=>(
        <div className="doc_card" onClick={()=>{navigate_to(ele)}}>
          <img src={doc_image} className="doc_image" alt="doc_image" />
          <div className="doc_card_content">
          <h5 style={{overflow: "ellipsis"}}>{ele ? ele : "Untitled Doc"}</h5>
            <div
              className="doc_content"
              style={{ fontSize: "12px", color: "grey" }}
            >
              <div className="content_left">
                <StorageIcon
                  style={{
                    color: "white",
                    fontSize: "12px",
                    backgroundColor: "#6E2594",
                    padding: "3px",
                    marginRight: "3px",
                    borderRadius: "2px",
                  }}
                />
                opened {new Date().toDateString()}
              </div>

              <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Mainbody;
