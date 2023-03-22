import React, { useState } from 'react'

const AddUser = () => {
    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')

    return (
        <div className='addUser'>
            <div className='addUser__container'>
                <div>
                    <h2>Add User</h2>
                    <div>
                        <form>
                            <div>
                                <label></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser
