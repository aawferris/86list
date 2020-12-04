import Header from "../Header/Header";
import Footer from "../Footer/Footer"

import './Layout.css'

export default function Layout(props) {
  return (
    <div className="Layout">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <div id="child-container">
      {props.children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}
