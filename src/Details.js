import { Component, lazy } from "react";
import { withRouter } from "react-router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

import Modal from "./Modal";

class Details extends Component {

    state = { loading: true, showModal: false };

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(
            Object.assign({
                loading: false
            },
                json.pets[0]
            )
        );
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    adopt = () => (window.location = "http://bit.ly/pet-adopt");
    render() {
        if (this.state.loading) {
            return <h2>Loading...</h2>
        }

        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className="rounded-3xl p-1 m-5 lg:p-5 lg:mx-40 justify-items-center align-items-center block"
                style={{ backgroundColor: "#f2e4e6" }}>
                <Carousel images={images} />
                <div className="px-0 mx-0 text-center justify-items-center align-items-center ">
                    <h1 className="font-serif text-6xl">{name}</h1>
                    <h2 className="mb-5 font-sans text-2xl">{`${animal} - ${breed} - ${city},${state}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button
                                className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    <p className="p-10 lg:my-50 text-lg">{description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name}?</h1>
                                <div className="p-5">
                                    <button className="rounded-xl px-6 py-2 m-5 text-white hover:opacity-50 border-none"
                                        style={{ backgroundColor: "red" }} onClick={this.adopt}>Yes</button>
                                    <button className="rounded-xl px-6 m-5 py-2 text-white hover:opacity-50 border-none"
                                        style={{ backgroundColor: "red" }} onClick={this.toggleModal}>No</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        );
    }
}

const DetailWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailWithRouter />
        </ErrorBoundary>
    );
};