import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">
                        Usman<span className="text-accent-default">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header