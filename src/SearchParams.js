import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";
import Result from "./result";

const animals = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {

    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme, setTheme] = useContext(ThemeContext);

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
                            onChange={(e) => setLocation(e.target.value)}
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
                            onChange={(e) => setAnimal(e.target.value)}
                            onBlur={(e) => setAnimal(e.target.value)}
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
                            onChange={(e) => setBreed(e.target.value)}
                            onBlur={(e) => setBr(e.target.value)}
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
                            onChange={e => setTheme(e.target.value)}
                            onBlur={e => setTheme(e.target.value)}
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