import "./input.css"

export default function Input() {
    return(
        <form className="coinInput">
        <input className="moneyInput"  type="number" placeholder='Write the money you have ($ USD)'></input>
        <button type='submit'>Submit</button>
        </form>
    );
}