import React from "react"

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            AllMemeImgs: []
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({AllMemeImgs: memes})
            })
        this.onchangeHandler= this.onchangeHandler.bind(this)
    }
    onchangeHandler(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    Top Text:<input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.onchangeHandler}
                        />
                    <br/>
                    Bottom Text:<input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.onchangeHandler}
                        />

                    <button>Gen</button>
                </form>
        </div>
        )}
}

export default MemeGenerator