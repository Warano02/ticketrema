import Footer from "@/components/footer"
import Header from "@/components/header"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout