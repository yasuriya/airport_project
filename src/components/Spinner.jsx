import { MagnifyingGlass } from "react-loader-spinner"

function Spinner() {
  return (
    <div className="spinner-container">
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#4CB7EE"
      />
    </div>
  )
}

export default Spinner
