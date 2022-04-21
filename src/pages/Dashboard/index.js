import "./style.css";
import Loading from "../../components/Loading";
import LogoutMessage from "../../components/LogoutMessage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectToken } from "../../store/user/selectors";
export default function Dashboard() {
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectAppLoading);
  return (
    <>
      <>{isLoading ? <Loading /> : null}</>
      <>{!token ? <LogoutMessage /> : null}</>
    </>
  );
}
