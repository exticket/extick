import React from 'react';
import styled from 'styled-components'
import api from "../api";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
class Add extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            student_class: '',
            lessons: ''
        }
    }
    handleChangeInputFirstName = async event => {
        const first_name = event.target.value
        this.setState({ first_name: first_name })
    }

    handleChangeInputLastName = async event => {
        const last_name = event.target.value
        this.setState({ last_name: last_name })
    }

    handleChangeInputClass = async event => {
        const student_class = event.target.value
        this.setState({ student_class: student_class })
    }

    handleChangeInputLessons = async event => {
        const lessons = event.target.value
        this.setState({ lessons: lessons })
    }
    handleAddStudent = async () => {
        const { first_name, last_name, student_class, lessons } = this.state
        const payload = { first_name, last_name, student_class, lessons }

        await api.insertStudent(payload).then(res => {
            window.alert(`Student inserted successfully`)
            this.setState({
                first_name: '',
                last_name: '',
                student_class: '',
                lessons: ''
            })
        })
    }
    render() {
        const { first_name, last_name, student_class, lessons } = this.state
        return (
            <Wrapper>
                <Title>Create New Student</Title>

                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={first_name}
                    onChange={this.handleChangeInputFirstName}
                />
                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={last_name}
                    onChange={this.handleChangeInputLastName}
                />
                <Label>Class: </Label>
                <InputText
                    type="text"
                    value={student_class}
                    onChange={this.handleChangeInputClass}
                />
                <Label>Lessons: </Label>
                <InputText
                    type="text"
                    value={lessons}
                    onChange={this.handleChangeInputLessons}
                />

                <Button onClick={this.handleAddStudent}>Add New Student</Button>
                <CancelButton href={'/students/data'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}
export default Add;