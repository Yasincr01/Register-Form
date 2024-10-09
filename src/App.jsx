import { TextField, FormLabel, RadioGroup, Radio, FormControlLabel, Stack, Button, MenuItem } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import './App.css'
import React, { useState } from 'react'

function App() {

  const [name, setName] = useState(0)
  const [address, setAddress] = useState(0)
  const [mobile, setMobile] = useState(0)
  const [email, setEmail] = useState(0)
  const [gender, setGender] = useState(0)
  const [dob, setDob] = useState(0)
  const [courses, setCourses] = useState(0)

  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isAddressInvalid, setIsAddressInvalid] = useState(false)
  const [isMobileInvalid, setIsMobileInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isDobInvalid, setIsDobInvalid] = useState(false)
  const [isGenderInvalid, setIsGenderInvalid] = useState(false)
  const [isCoursesInvalid, setIsCoursesInvalid] = useState(false)


  const userInputValidation = (inputTag) => {
    const { name, value } = inputTag;
    if (name == "Name") {
      setName(value)
      !!value.match(/^[a-zA-Z\s\.]+$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
    }

    else if (name == 'Address') {
      setAddress(value)
      !!value ? setIsAddressInvalid(false) : setIsAddressInvalid(true)
    }
    else if (name == 'Mobile') {
      setMobile(value)
      !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) ? setIsMobileInvalid(false) : setIsMobileInvalid(true)
    }

    else if (name == 'Email') {
      setEmail(value)
      !!value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[com]{2,4}$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    }
    else if (name == 'Gender') {
      setGender(value)
      !!value ? setIsGenderInvalid(false) : setIsGenderInvalid(true)
    }
    else if (name === "Dob") {
      setDob(value);
      const selectedDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - selectedDate.getFullYear();
      const isUnderAge = age < 18 || (age === 18 && today < new Date(today.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
      isUnderAge ? setIsDobInvalid(true) : setIsDobInvalid(false);
    }


    else if (name == 'Courses') {
      setCourses(value)
      !!value ? setIsCoursesInvalid(false) : setIsCoursesInvalid(true)
    }

  }
  const getRegisterDetails = () => {
    if (name && address && mobile && email && gender && dob && courses) {
      alert(`Data Stored Successfully!!!`)
    }
    else {
      alert(`Please fill the form`)
    }
  }
  const resetAllDetails = () => {
    setName(0)
    setMobile(0)
    setAddress(0)
    setEmail(0)
    setDob(0)
    setGender(0)
    setCourses(0)
    setIsNameInvalid(false)
    setIsAddressInvalid(false)
    setIsMobileInvalid(false)
    setIsGenderInvalid(false)
    setIsEmailInvalid(false)
    setIsDobInvalid(false)
    setIsCoursesInvalid(false)
  }

  // js code
  // Biology , Computer Science, Commerce, Humanities
  const course = [
    {
      value: 'option',
      label: 'Choose any Course',
    },
    {
      value: 'Biology',
      label: 'Biology',
    },
    {
      value: 'Computer Science',
      label: 'Computer Science',
    },
    {
      value: 'Commerce',
      label: 'Commerce',
    },
    {
      value: 'Humanities',
      label: 'Humanities',
    },
  ];


  return (

    <div style={{ height: '600px' }} className='d-flex justify-content-center align-items-center text-light'>
      <div style={{ width: '500px', marginTop: '50px', backgroundColor: 'gray' }} className=' rounded p-5 text-dark '>
        <h1 style={{ fontWeight: '500', fontFamily: 'fantasy' }} className='text-center'>Higher Secondary Admission</h1>
        {/* form */}
        <form className='mt-3  d-flex justify-content-evenly flex-column align-items-center '>

          {/* Name - Address - Mobile - E mail - Gender - Date of birth -   */}

          <div className='mb-2'>
            <TextField id="name" value={name || ""} label="Student Name" onChange={e => userInputValidation(e.target)} name='Name' variant="outlined" style={{ width: '400px' }} className='text-dark' />
          </div>

          {isNameInvalid && <div className="mb-3 fw-bolder text-danger text-start w-100">*Invalid Character</div>}

          <div className='mb-2'>
            <TextField id="address" value={address || ""} label="Address" name='Address' onChange={e => userInputValidation(e.target)} variant="outlined" style={{ width: '400px' }} className=' m-3 text-dark' />
          </div>

          {isAddressInvalid && <div className="mb-3 fw-bolder text-danger text-start w-100">*Enter your Address</div>}

          <div >
            <TextField
              label="Phone Number" style={{ width: '400px' }}
              name='Mobile' value={mobile || ""}
              onChange={e => userInputValidation(e.target)}
              id="mobile" className='mb-3'
              // sx={{ m: 1, width: '25ch' }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                },
              }}
            />
          </div>

          {isMobileInvalid && <div className="mb-3 fw-bolder text-danger text-start w-100">*Enter a valid Mobile Number</div>}

          <div className='mb-2'>
            <TextField id="email" value={email || ""} onChange={e => userInputValidation(e.target)} label="Email" name='Email' variant="outlined" style={{ width: '400px' }} className='' />
          </div>

          {isEmailInvalid && <div className='mb-2 fw-bolder text-danger text-start w-100'>*Enter a valid emailId</div>}

          <div style={{ width: '400px' }} className='border border-secondary rounded mb-3 p-2 d-flex justify-content-start align-items-center' >
            <FormLabel id="gender" value={gender || ""} className='me-2 text-dark'>Gender :</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="Gender"
              onChange={e => userInputValidation(e.target)}
            >
              <div>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </div>
            </RadioGroup>
            {isGenderInvalid && <div className="mb-2 fw-bolder text-danger text-start w-100">*Gender is required</div>}
          </div>

          <div style={{ width: '400px' }} className='mb-3'>
            <TextField value={dob || ""} onChange={e => userInputValidation(e.target)} name='Dob' className='w-100' type='date' id="dob" color='dark' label="Date of Birth" variant="outlined"
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start"></InputAdornment>
                },
              }} />
            {
              isDobInvalid && <div className="mb-2 fw-bolder text-danger text-start w-100">*You must be at least 18 years old</div>
            }
          </div>



          <TextField
            value={courses || ""}
            onChange={e => userInputValidation(e.target)}
            className='mb-3 w-100 text-start'
            name='Courses'
            id="standard-gender"
            select
            label="Courses"
            defaultValue=""
            variant="outlined"
          >
            {course.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {isCoursesInvalid && <div className="mb-2 fw-bolder text-danger text-start w-100">*Courses is required</div>}


          <Stack direction="row" justifyContent='center' spacing={2}>
            <Button onClick={getRegisterDetails} disabled={isNameInvalid || isAddressInvalid || isMobileInvalid || isEmailInvalid || isDobInvalid || isGenderInvalid || isCoursesInvalid} variant="contained" className='bg-primary text-white'>Register</Button>
            <Button onClick={resetAllDetails} variant="contained" className='bg-danger'>Reset</Button>
          </Stack>



        </form>
      </div>
    </div>
  )
}

export default App
