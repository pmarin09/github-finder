import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const[text, setText] = useState('')
    const {users, searchUsers} = useContext(GithubContext)
console.log(users)
    const handleChange = (e) =>{
        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text === '') {
            alert('Please Enter Something')
        }else{
            searchUsers()
            setText('')
        }
    }

    return (
        <div className = 'grid grid-cols1 xl:grid-cols2 lg:grid-cols2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div classname= 'form-control'>
                        <div className = 'relative'>
                            <input
                                type = 'text'
                                className = 'w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder= 'Search'
                                value = {text}
                                onChange ={handleChange}
                                />
                                <button className = 'absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                                    Go
                                </button>
                        </div>

                    </div>
                </form>
            </div>
            {users.length > 0 && (
            <div>
                <button className = 'btn btn-ghost btn=lg'> Clear</button>
            </div>
            )}
            
        </div>
    )
}

export default UserSearch
