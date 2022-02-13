import react from "react";
import { Component } from "react/cjs/react.production.min";
import './post-list-item.css'


export default class PostListItem extends Component {
       state = {
           important:false,
           like: false
       }

       onImportant = () => {
        this.setState(state =>({
            important: !state.important
        }));
    }
        Onlike = () => {
            this.setState(state =>({
                like: !state.like
            }))
    }
      
    render () {
            const {label} = this.props
            const {important} = this.state
            const {like} = this.state
            let classNames = 'app-list-item d-flex justify-content-between'
            if (important) {
                classNames +=' important'
            }
            if (like) {
                classNames +=' like'
            }
            return(
            <div className={classNames}>
            <span className="app-list-item-label" onClick={this.Onlike} >{label}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button"
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                    <i className="bi bi-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="bi bi-trash"></i>
                </button>
                    <i 
                    className="bi bi-heart-fill"></i>
            </div>
        </div>
    )}
}
