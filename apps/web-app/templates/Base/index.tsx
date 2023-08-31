import { ToastContainer } from "react-toastify"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { SiteData } from "../../data/sites"

const BaseTemplate = ({ sitedata, children }: { sitedata: SiteData; children: any }) => (
    <div className="flex flex-col min-h-screen bg-fora-gray100">
        <div className="z-20">
            <header>
                <Header sitedata={sitedata} />
            </header>
        </div>
        <main>{children}</main>{" "}
        <footer>
            <Footer />
        </footer>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
)

export default BaseTemplate
