import { useState } from "react";

const animals = ["bird" , "cat" , "dog" , "rabbit"];

const SearchParams = () => {
    
    const [location , setLocation] = useState("Ankleshwar")
    const [animal , setAnimal] = useState("")
    const [breed , setBreed] = useState("")
    const breeds = [];
    
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location"
                            onChange = {(e)=> setLocation(e.target.value)}
                           value={location}
                           placeholder="Enter Location" 
                    />
                </label>
                <label htmlFor="Animal">
                    Animal
                    <select 
                        id = "animal"
                        value = {animal}
                        onChange = {(e)=> setAnimal(e.target.value)}
                        onBlur = {(e)=> setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            animals.map(animal =>(
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
                <label htmlFor="Breed">
                    Breed
                    <select 
                        id = "breed"
                        value = {breed}
                        onChange = {(e)=> setBreed(e.target.value)}
                        onBlur = {(e)=> setBr(e.target.value)}
                    >
                        <option />
                        {
                            breeds.map(breed =>(
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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;