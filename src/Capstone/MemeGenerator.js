import React from "react"

class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(allMemeImgs => {
                return allMemeImgs.json();
            })
    }
    render() {
        return (
        <h1>Meme Generator</h1>
        )}
}

export default MemeGenerator