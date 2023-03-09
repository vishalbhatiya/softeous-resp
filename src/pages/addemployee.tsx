import React from 'react'

const addemployee = () => {
  return (
    <>
    <div>
     {/* <form onSubmit={handleSubmit}> */}
      <label>
        Name:
        <input type="text" name="name" maxLength={50}    required/>
      </label><br />
      <label><br />
        Salary:
        <input type="number" name="email" min={10000}   required />
      </label><br />
      <button type="submit">Submit</button>
    {/* </form> */}
    </div>
    </>
  )
}

export default addemployee
