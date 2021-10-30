import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    handleIndexClick = (event) => {
        this.setState({
            active: +event.target.dataset.index
        });
    }

    render() {
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className="pl-10 py-5 m-5 lg:m-20 flex flex-row justify-items-center align-items-center" >
                <div className="prof-cropper">
                    <img src={images[active]} alt="animal" className="main-pic" />
                </div>
                <div className="grid gap-2 gap-y-4 sm:grid-cols-1 lg:grid-cols-3 justify-items-center align-items-center px-10">
                    {
                        images.map((photo, index) => (
                            //eslint-disable-next-line
                            <div className="image-cropper" >
                                <img
                                    //className="profile-pic"
                                    key={photo}
                                    src={photo}
                                    data-index={index}
                                    onClick={this.handleIndexClick}
                                    className={index === active ? "active" : ""}
                                    alt="Animal Thumbnail"
                                />
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }
}

export default Carousel;