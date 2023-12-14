import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'; // paquete de npm
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHerosByName } from "../";


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHerosByName(q);


    const { searchText, onInputChange } = useForm({
        searchText: q,
    });


    const onSearchSubmit = (event) => {
        event.preventDefault();

        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            placeholder="Search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            type="text"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Result</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-primary animate__animated animate__fadeIn">search a hero</div>
                            : (heroes.length === 0)
                            && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{q}</b></div>
                    }

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />

                        ))
                    }

                </div>
            </div>
        </>
    )
}
