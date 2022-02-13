import react,{Component} from "react"
export default class AddPost extends Component{
    super(props){
        this.state = {
            years : 26
        }
        this.nextYear = () =>{
            this.setState(state =>({
                years : ++state.years
            }))
        }
    }render () {
        const {name,years} = this.props
        return (
            <>
                <button onClick={this.nextYear}>Increase</button>
                <h1>{name},{years}</h1>
            </>
        )
    }
}
