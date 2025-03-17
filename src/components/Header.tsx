import { FizziLogo } from "./FizziLogo";

const Header = () => {
    return (
        <header className="flex justify-center py-4 -mb-28">
            <FizziLogo className="h-20 z-10 cursor-pointer text-sky-800" />
        </header>
    );
}

export default Header;