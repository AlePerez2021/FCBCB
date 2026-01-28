import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import "./nota.modal.css";

export const ProjectModal = (props) => {
  const { modalContent, projectLink, setIsOpen, imgSrc, isOpen, title, code, tech } = props;

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className="project-modal" onClick={() => setIsOpen(false)}>
      <button className="close-modal-btn">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="modal-card"
      >
        <img
          className="modal-image"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="modal-content">
          <h4>{title}</h4>
          <div className="modal-tech">{tech.join(" - ")}</div>

          <div className="supplied-content">{modalContent}</div>

          <div className="modal-footer">
            <p className="links-text">
              Project Links<span>.</span>
            </p>
            <div className="links">
              <a target="_blank" rel="noreferrer" href={code}>
                <AiFillGithub /> source code
              </a>
              <a target="_blank" rel="noreferrer" href={projectLink}>
                <AiOutlineExport /> live project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};