import Pet from "./pet.js";

const Result = ({ pets }) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
            {
                !pets.length ? (
                    <h2>No Pet found</h2>
                ) : (
                    pets.map((pet) => (
                        <Pet
                            name={pet.name}
                            animal={pet.animal}
                            breed={pet.breed}
                            images={pet.images}
                            key={pet.id}
                            location={`${pet.city},${pet.state}`}
                            id={pet.id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Result;