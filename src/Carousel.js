import { Component } from "react";

class Carousel extends Component {
    state = {
        active : 0
    };

    static defaultProps = {
        images : ['http://pets-images.dev-apis.com/pets/none.jpg']
    }

    handleIndexClick = (event) => {
        this.setState({
            active : +event.target.dataset.index
        });
    }

    render () {
        const {active} = this.state;
        const {images} = this.props;
         return (
            <div className = "p-1 my-5 w-full aling-items-center rounded-md relative block">
                <img src = {images[active]} alt="animal" />
                <div className=" absolute my-4 rounded flex flex-row" >
                    {
                        images.map((photo,index) => (
                            //eslint-disable-next-line
                            <img 
                                key = {photo}
                                src = {photo}
                                data-index = {index}
                                onClick={this.handleIndexClick}
                                className={index === active ? "active" :""}
                                alt = "Animal Thumbnail"
                            />
                        ))
                    }
                </div>
            </div>
         )
    }
}

export default Carousel;