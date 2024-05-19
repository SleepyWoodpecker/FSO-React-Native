import RepositoryList from "./RepositoryList";
import useRepositories from "../hooks/useRepositories";

const RepositoryListContainer = () => {
  const { repositories } = useRepositories();

  return <RepositoryList repositories={repositories} />;
};

export default RepositoryListContainer;
