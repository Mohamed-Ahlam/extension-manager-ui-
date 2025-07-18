import '../assets/styles/Header.css'
export default function Header() {
    
    return (
        <div className="header">
            <h1>Extensions List</h1>
            <div className='button-primary'>
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
            </div>
        </div>
    )
}