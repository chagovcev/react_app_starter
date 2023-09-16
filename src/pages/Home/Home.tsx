import {useAppDispatch, useAppSelector} from "../../store/hooks";

import {currentThemeSelector, toggleTheme} from "../../features/themes";

const Home = () => {
    const currentTheme = useAppSelector(currentThemeSelector)

    const dispatch = useAppDispatch()
    const handleChangeTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <h1>This is a Home page</h1>

            <p>Now is <b>{currentTheme}</b> theme.</p>

            <button
                type="button"
                onClick={handleChangeTheme}>
                Change theme
            </button>
        </>
    )
}

export default Home;