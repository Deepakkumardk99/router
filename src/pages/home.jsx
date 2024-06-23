import Career from "./career";
import CyberSecurity from "./cyber";
import DataScience from "./datascience";
import FullstackDevelopment from "./fullstack";

export default function  Home() {
    return (
        <div>
            <FullstackDevelopment />
            <DataScience />
            <CyberSecurity />
            <Career/>
        </div>
    )

}