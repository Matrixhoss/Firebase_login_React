import React , {useRef}from 'react'
import {Form , Button , Card} from 'react-bootstrap'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                </Card.Body>
                <Form className = "px-3">
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef} type='email' required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type='email' required/>
                    </Form.Group>
                    <Form.Group id='confirm-password'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control ref={confirmPasswordRef} type='email' required/>
                    </Form.Group>
                     <Button className='w-100'>Sign Up</Button>
                </Form>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an accout SignIn
            </div>
        </>
    )
}

export default Signup
