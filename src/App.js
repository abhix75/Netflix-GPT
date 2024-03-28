import Body from "./component/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
export default function App() {
  return (
    <div>
      <Provider store={appStore}><Body /></Provider>
    </div>
  )
}