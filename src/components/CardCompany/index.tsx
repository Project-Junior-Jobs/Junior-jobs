import { StyledCardCompanyContainer, StyledInfCompany } from "./style";
import { IPropCard } from "./types";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideRightVariants } from "../../pages/home/motion";

export const CardCompany = ({
  period,
  job_name,
  work_type,
  avatar,
  description,
  requirements,
  responsabilitys,
  id,
  nameCompany,
  locality,
  children,
}: IPropCard) => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <StyledCardCompanyContainer
      variants={slideRightVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ delay: 0.4 }}
    >
      {avatar !== undefined ? (
        <img
          src={user?.type === "company" || user?.type === "Company" ? user.avatar : avatar}
          alt="img"
        />
      ) : (
        <div className="avatarDefault">
          <FaUser />
        </div>
      )}
      <div>
        <StyledInfCompany
          onClick={() => {
            localStorage.setItem("@JOBID", `${id}`);
            localStorage.setItem("@COMPANYID", `${id}`);
            navigate(`/job/${job_name}`);
          }}
        >
          <div className="smallDetail">
            <p>{work_type}</p>
            <p>{period}</p>
          </div>

          <h1 className="titleJob">{job_name}</h1>
          <span className="nameCompany">{user?.type === "company" ? user.name : nameCompany}</span>
          <p className="locality">{locality}</p>
        </StyledInfCompany>

        <div className="description">
          <p>{description}</p>
        </div>

        <div className="boxButtons">{children}</div>
      </div>
    </StyledCardCompanyContainer>
  );
};
