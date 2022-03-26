import './App.css';

function App() {
    return ( <
        div >
        <
        h2 className = 'xx' > Hello React { name } < /h2> { testCond } <
        ul >
        <
        renderList > < /renderList> <
        /ul> <
        /div>    
    );
}

const name = < em > Mehrab Aghaee < /em>
let x = 10;
let testCond = < strong > { x < 1 ? 'Good' : 'Bad' } < /strong>

const testList = ['m', 'e', 'h', 'r', 'a', 'b'];

const renderList = () => {
        testList.map((n) => {
                    return <li > { n } < /li>})
                }


                export default App;