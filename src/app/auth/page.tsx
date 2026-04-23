import Footer from "@/components/Footer";
import AuthenticationForm from "../../components/AuthenticationForm";

export default function Authentication() {
    return <main className="bg-gray">
        <AuthenticationForm />
        <Footer showDetails={false} />
    </main>
}