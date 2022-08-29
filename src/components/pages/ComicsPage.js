import ComicsList from "../comicsList/ComicsList";
import { Helmet } from "react-helmet";
import AppBanner from '../appBanner/AppBanner';


const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"/>
                <title>Comic page</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;