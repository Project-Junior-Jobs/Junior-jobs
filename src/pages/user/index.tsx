import { Container } from "../../components/Container";
import { FaUser } from "react-icons/fa";
import { Header } from "../../components/Header";
import { StyledMain } from "./styled";
import { StyledFooter } from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { CardCompany } from "../../components/CardCompany";
import ModalEditProfile from "./modalEditProfile";
import { authContext } from "../../contexts/authContext";

export const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isVisible, setVisible } = useContext(authContext);

  //Função para sair da vaga
  // const unapply = (id: number) => {
  //   const newArr = jobs.filter((item) => item.id === id);
  //   setMyJobs(newArr);
  // };

  // useEffect(() => {
  //   const getJob = async (id: number): Promise<void> => {
  //     setLoading(true);
  //     try {
  //       const response = await api.get(`/jobs/${id}`, {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setAllJobs((allJobs) => [...allJobs, response.data]);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const applyJobs = () => {
  //     const newJob = user?.apply_jobs?.map((item, id) => {
  //       return getJob(item);
  //     });
  //   };

  //   applyJobs();
  // }, []);

  return (
    <>
      <ModalEditProfile />
      <Header />
      <Container>
        <StyledMain>
          <section className="sectionProfile">
            {user?.avatar ? (
              <div className="avatarProfile">
                <img src={user.avatar} alt="foto de perfil" />
              </div>
            ) : (
              <div className="avatarDefault">
                <FaUser />
              </div>
            )}

            <div className="contentProfile">
              <h2>{user?.name}</h2>
              <p>{user?.documentation}</p>
              <span>{user?.email}</span>
            </div>
            <button onClick={() => setVisible(true)}>Editar Perfil</button>
          </section>

          <section className="sectionJob">
            <h2>Vagas</h2>
            <ul>
              {user?.apply_jobs!.map((job, id) => (
                <CardCompany
                  id={job.id}
                  key={id}
                  period={job.period}
                  job_name={job.job_name}
                  responsabilitys={job.responsabilitys}
                  work_type={job.work_type}
                />
              ))}
            </ul>
          </section>
        </StyledMain>
      </Container>
      <StyledFooter />
    </>
  );
};
