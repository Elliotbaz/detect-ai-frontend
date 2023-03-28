import TextField from '@mui/material/TextField'

export function TextBox(props) {

    const handleQuestionChange = (event) => {
        if (props.onQuestionValueChange) {
            props.onQuestionValueChange(event.target.value);
        }

    }

    return (
        <div className="filter-search-form mt-3 mt-md-0">

            <TextField id="outlined-basic" label="Question Asked" variant="outlined" fullWidth value={props.questionValue}

                onChange={handleQuestionChange}
            />

        </div>
    )
}


export function AnswerBox(props) {

    const handleAnswerValueChange = (event) => {
        if (props.onAnswerValueChange) {
            props.onAnswerValueChange(event.target.value);
        }

    }
    return (
        <div className="filter-search-form mt-3 mt-md-0">
            <br />
            <TextField
                id="filled-multiline-static"
                label="Answer Provided"
                multiline
                rows={5}
                onChange={handleAnswerValueChange}
                // defaultValue="Default Value"
                variant="filled"
                fullWidth
            />

        </div>)
}

