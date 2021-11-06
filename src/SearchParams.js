import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Result from "./result";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme, changeAnimal, changeBreed, changeLocation } from "./actionCreators/changeTheme";

const animals = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {

    const animal = useSelector(state => state.animal);
    const location = useSelector(state => state.location);
    const breed = useSelector(state => state.breed);
    const theme = useSelector(state => state.theme);
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    const dispatch = useDispatch();

    useEffect(() => {

        requestPets();

    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    function handleAnimalChange(e) {
        dispatch(changeAnimal(e.target.value));
        dispatch(changeBreed(""));
    }

    return (
        <div
            className="my-0 mx-auto w-5/6 flex flex-row"
        >
            <div>
                <form
                    className="p-10 mb-10 rounded-3xl shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
                    style={{ backgroundColor: "#f2e4e6" }}
                    onSubmit={e => {
                        e.preventDefault();
                        requestPets();
                    }
                    }
                >
                    <label className="search-label" htmlFor="location">
                        Location
                        <input className="search-control" id="location"
                            onChange={(e) => dispatch(changeLocation(e.target.value))}
                            value={location}
                            placeholder="Enter Location"
                        />
                    </label>
                    <label className="search-label" htmlFor="Animal">
                        Animal
                        <select
                            className="search-control"
                            id="animal"
                            value={animal}
                            onChange={handleAnimalChange}
                            onBlur={handleAnimalChange}

                        >
                            <option />
                            {
                                animals.map(animal => (
                                    <option
                                        value={animal}
                                        key={animal}
                                    >
                                        {animal}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label className="search-label" htmlFor="Breed">
                        Breed
                        <select
                            className="search-control disabled:opacity-50"
                            id="breed"
                            value={breed}
                            onChange={(e) => dispatch(changeBreed(e.target.value))}
                            onBlur={(e) => dispatch(changeBreed(e.target.value))}
                        >
                            <option />
                            {
                                breeds.map(breed => (
                                    <option
                                        value={breed}
                                        key={breed}
                                    >
                                        {breed}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label className="search-label" htmlFor='theme'>
                        Theme
                        <select
                            className="search-control"
                            value={theme}
                            onChange={e => dispatch(changeTheme(e.target.value))}
                            onBlur={e => dispatch(changeTheme(e.target.value))}
                        >
                            <option value="darkblue">Dark Blue</option>
                            <option value="purple">purple</option>
                            <option value="black">black</option>
                            <option value="peru">peru</option>
                            <option value="mediumorchid">mediumorchid</option>
                            <option value="chartreuse">chartreuse</option>

                        </select>
                    </label>
                    <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none" style={{ backgroundColor: theme }}>Submit</button>
                </form>
            </div>
            <div className="rounded-3xl p-10 mx-5 justify-items-center align-items-center" style={{ backgroundColor: "#f2e4e6" }}>
                <Result pets={pets} />
            </div>
        </div>
    );
};

export default SearchParams;