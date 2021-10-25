import { useState , useEffect } from "react";
import Pet from "./pet";

const animals = ["bird" , "cat" , "dog" , "rabbit"];

const SearchParams = () => {
    
    const [location , setLocation] = useState("")
    const [animal , setAnimal] = useState("")
    const [breed , setBreed] = useState("")
    const [pets , setPets] = useState([]);
    const breeds = [];
    
    useEffect(()=>{
        requestPets();
    },[]);

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}$breed=${breed}`
        );
        const json = await res.json();
        
        setPets(json.pets);
    }

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
            { pets.map( (pet) =>{
                    <Pet
                    name={pet.name} 
                    animal = {pet.animal}
                    breed = {pet.breed}
                    key = {pet.id}
                    />
                })
            }
        </div>
    );
};

export default SearchParams;