import Header from "../Header/Header";
import Footer from "../Footer/Footer"

export default function Layout(props) {
  return (
    <div className="Layout">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
      {/* <Footer /> */}
    </div>
  )
}
